import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent implements OnInit {
  estado: 'procesando' | 'exito' | 'error' = 'procesando';
  mensaje = '';

  constructor(
    private route: ActivatedRoute,
    private cartservice: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const paymentId = params['payment_id'];
      const status = params['status'];

      if (paymentId && status === 'approved') {
        this.cartservice.confirmarCompra().subscribe({
          next: res => {
            this.estado = 'exito';
            this.mensaje = '¡Compra confirmada con éxito!';
          },
          error: err => {
            this.estado = 'error';
            this.mensaje = 'Ocurrió un error al confirmar la compra.';
          }
        });
      } else {
        this.estado = 'error';
        this.mensaje = 'Parámetros inválidos. No se pudo confirmar la compra.';
      }
    });
  }
}