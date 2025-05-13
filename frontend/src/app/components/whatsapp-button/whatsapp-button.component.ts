import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  @Input() phoneNumber: string = '5493515151827';
  @Input() message: string = 'Bienvenido a *Tienda Full Bike*, en que podemos ayudarte?';

  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
