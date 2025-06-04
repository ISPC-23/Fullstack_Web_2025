import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Cookies from 'universal-cookie';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-token-login',
  standalone: true,
  imports: [],
  templateUrl: './token-login.component.html',
  styleUrl: './token-login.component.css'
})
export class TokenLoginComponent implements OnInit {
    private cookies = new Cookies();
  constructor(    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      const email = params['email'];
      const isAdmin = params['isadmin'];

      if (token && email && isAdmin) {

        this.cookies.set('token', token);
        this.cookies.set('userEmail', email);
        this.cookies.set('isAdmin', isAdmin);
        this.authService.isAdmin.next(isAdmin === 'true');
        this.authService.isLogged.next(true);
        this.authService.userEmail.next(email);

        this.router.navigate(['/carrito']);
      } else {
  
        this.router.navigate(['/login']);
      }
    });
  }
} 