import { Component } from '@angular/core';

interface Member {
  name: string;
  img: string;
  link: string;
  role: string;
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
    {
      name: 'Barletta Fernando',
      img: 'fernando.webp',
      link: 'Ferbarletta',
      role: 'Ventas',
    },
    {
      name: 'Beltramone Mateo',
      img: 'mateo.webp',
      link: 'Mateo88XD',
      role: 'Ventas',
    },
    {
      name: 'Blasiche Andres',
      img: 'andres.webp',
      link: 'blasichea',
      role: 'Postventa',
    },
    {
      name: 'Cabrera Veronica',
      img: 'veronica.webp',
      link: 'Verosolc30',
      role: 'Administración',
    },
    {
      name: 'Krenn Federico',
      img: 'federico.webp',
      link: 'fedekrenn',
      role: 'Coordinación General',
    },
    {
      name: 'Gillini Emiliano',
      img: 'emiliano.webp',
      link: 'emigillini',
      role: 'Mecánica General',
    },
  ];
}
