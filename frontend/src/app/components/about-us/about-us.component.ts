import { Component } from '@angular/core';

interface Member {
  name: string;
  img: string;
  link: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  members: Member[] = [
    { name: 'Barletta Fernando', img: 'fernando.jpeg', link: 'Ferbarletta' },
    { name: 'Blasiche Andres', img: 'andres.jpeg', link: 'blasichea' },
    { name: 'Cabrera Veronica', img: 'veronica.jpeg', link: 'Verosolc30' },
    { name: 'Castillo Fernanda', img: 'fernanda.png', link: 'FernandaACastillo' },
    { name: 'Krenn Federico', img: 'federico.jpeg', link: 'fedekrenn' },
    { name: 'Liendo Germán', img: 'german.jpg', link: 'g3rm6n' },
    { name: 'Gillini Emiliano', img: 'emiliano.jpg', link: 'emigillini' },
  ];
}
