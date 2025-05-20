import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Cart } from '../../types/types';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { PreferenceItem } from '../../types/types';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
declare var MercadoPago: any;

@Component({
  selector: 'app-checkout-component',
  standalone: true,
  imports: [LoadingComponent, CommonModule],
  templateUrl: './checkout-component.component.html',
  styleUrl: './checkout-component.component.css'
})

export class CheckoutComponent implements OnInit {
  cart: Cart | null = null;
    totalAmount = 0;
  isLoading = true;
   preferenceId: string | null = null;

  constructor(private cartService: CartService, private checkoutService: CheckoutService,  private router: Router
  ) {}

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (cart) => {
        if (!cart || cart.items.length === 0) {
          this.router.navigate(['/carrito']);
        }

        this.cart = cart;
        this.totalAmount = cart.items.reduce((acc, item) => {
          return acc + item.cantidad * item.producto.precio;
        }, 0);
      },
      error: (err) => {
        console.error('Error al obtener el carrito:', err);
        this.router.navigate(['/carrito']);
      },
      complete: () => (this.isLoading = false),
    });
  }

pagar() {
  if (!this.cart) return;

  const items: PreferenceItem[] = this.cart.items.map((item) => ({
    title: item.producto.modelo,
    quantity: item.cantidad,
    unit_price: item.producto.precio,
  }));

this.checkoutService.pagar(items).subscribe({
  next: (res) => {
    this.preferenceId = res.id;
    this.initBrickCheckout(this.preferenceId);
  },
  error: (err) => {
    console.error('Error al generar preferencia:', err);
  }
});
}

  initBrickCheckout(preferenceId: string) {
    const mp = new MercadoPago('TEST-e4a62483-088f-4d43-8185-62c1c1a9d794', { locale: 'es-AR' });

    mp.bricks().create("wallet", "wallet_container", {
      initialization: {
        preferenceId: preferenceId
      },
      callbacks: {
        onReady: () => {
          console.log('Brick listo');
        },
        onError: (error: any) => {
          console.error('Error en el pago:', error);
        },
        onSuccess: () => {
    
          this.cartService.confirmarCompra().subscribe({
            next: (res) => {
              alert('¡Compra confirmada!');
              this.router.navigate(['/inicio']);
            },
            error: (err) => {
              console.error('Error al confirmar la compra:', err);
              alert('Ocurrió un error al confirmar la compra.');
            }
          });
        }
      },
    });
  }
}