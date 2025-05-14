import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import type { Product } from '../../types/types';

@Component({
  selector: 'app-galeria-productos',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  bikes: Product[] = [];
  filteredBikes: Product[] = [];
  brands: (string | undefined)[] = [];
  styles: (string | undefined)[] = [];
  maxPrice: number = 0;
  selectedPrice: number = 0;
  loading: boolean = true;

  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe({
      next: (bikesList) => {
        this.bikes = bikesList;
        this.filteredBikes = bikesList;
        this.maxPrice = Math.max(...bikesList.map((bike) => bike.precio));
        this.selectedPrice = this.maxPrice;
        this.brands =
          Array.from(
            new Set(bikesList.map((bike) => bike.marca_descripcion))
          ) || [];
        this.styles =
          Array.from(
            new Set(bikesList.map((bike) => bike.estilo_descripcion))
          ) || [];
      },
      error: (error) => console.error(error),
      complete: () => (this.loading = false),
    });
  }

  onSubmit(formData: any): void {
    const { marca, estilo, precio } = formData;
    this.filteredBikes = this.bikes.filter((bike) => {
      const isBrandMatch = marca ? bike.marca_descripcion === marca : true;
      const isStyleMatch = estilo ? bike.estilo_descripcion === estilo : true;
      const isPriceMatch = precio ? bike.precio <= Number(precio) : true;

      return isBrandMatch && isStyleMatch && isPriceMatch;
    });
  }

  onPriceChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedPrice = Number(input.value);
  }

  resetFilters(): void {
    this.filteredBikes = this.bikes;
    this.selectedPrice = this.maxPrice;
  }

  showOrHideFilters(): void {
    const filters = document.querySelector('form') as HTMLElement;

    if (
      filters.classList.contains('hidden') ||
      filters.classList.contains('initial')
    ) {
      filters.classList.remove('hidden');
      filters.classList.remove('initial');
      filters.classList.add('visible');
    } else {
      filters.classList.remove('visible');
      filters.classList.add('hidden');
    }
  }
}
