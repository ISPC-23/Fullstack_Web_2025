import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';
import { Product } from '../../types/types';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-ingresar-productos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LoadingComponent],
  templateUrl: './ingresar-productos.component.html',
  styleUrl: './ingresar-productos.component.css',
})
export class IngresarProductosComponent implements OnInit {
  productos: Product[] = [];
  productoForm!: FormGroup;
  isLoading = true;

  marcas = [
    { id: 1, nombre: 'Merida' },
    { id: 2, nombre: 'Vairo' },
    { id: 3, nombre: 'Oxea' },
    { id: 4, nombre: 'Trek' },
    { id: 5, nombre: 'Venzo' }
  ];

  rodados = [20, 26, 27.5, 29];

  estilos = [
    { id: 1, nombre: 'BMX' },
    { id: 2, nombre: 'Rutera' },
    { id: 3, nombre: 'Mountain Bike' }
  ];

  materiales = [
    { id: 1, nombre: 'Hierro' },
    { id: 2, nombre: 'Aluminio' },
    { id: 3, nombre: 'Carbono' }
  ];

  colores = [
    { id: 1, nombre: 'Amarillo' },
    { id: 2, nombre: 'Verde' },
    { id: 3, nombre: 'Azul' },
    { id: 4, nombre: 'Blanco' },
    { id: 5, nombre: 'Negro' },
    { id: 6, nombre: 'Rojo' }
  ];


  constructor(
    private producstService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.productoForm = this.formBuilder.group({
      modelo: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      imagen: ['', Validators.required],
      detalle: ['', Validators.required],
      marca: [this.marcas[0].id, Validators.required],
      rodado: [this.rodados[0], Validators.required],
      estilo: [this.estilos[0].id, Validators.required],
      material: [this.materiales[0].id, Validators.required],
      color: [this.colores[0].id, Validators.required],
    });
  }

  obtenerProductos(): void {
    this.producstService.getProducts().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => console.error(error),
      complete: () => (this.isLoading = false),
    });
  }

  crearProducto(event: Event): void {
    event.preventDefault();

    if (this.productoForm.valid) {
      const nuevoProducto: Product = {
        modelo: this.productoForm.value.modelo,
        precio: this.productoForm.value.precio,
        stock: this.productoForm.value.stock,
        imagen: this.productoForm.value.imagen,
        detalle: this.productoForm.value.detalle,
        marca: this.productoForm.value.marca,
        rodado: this.productoForm.value.rodado,
        estilo: this.productoForm.value.estilo,
        material: this.productoForm.value.material,
        color: this.productoForm.value.color,
      };

      console.log('Enviando al servidor...', nuevoProducto);

      this.producstService.postProducts(nuevoProducto).subscribe({
        next: (data) => {
          alert('Producto creado con exito');
          console.log('Producto creado:', data);
          this.obtenerProductos();
          this.productoForm.reset();
        },
        error: 
        (error) => {
          alert('Error al crear el producto, por favor intenta de nuevo');
          console.error(error);
        }
      });
    } else {
      this.productoForm.markAllAsTouched();
    }
  }
}
