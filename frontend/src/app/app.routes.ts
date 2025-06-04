import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { CheckoutComponent } from './components/checkout-component/checkout-component.component';
import { IngresarProductosComponent } from './components/ingresar-productos/ingresar-productos.component';
import { TokenLoginComponent } from './components/token-login/token-login.component';
import { authGuard, loginGuard } from './auth.guard';
import { SuccessComponent } from './components/mp-responses/success/success.component';
import { FailureComponent } from './components/mp-responses/failure/failure.component';
import { PendingComponent } from './components/mp-responses/pending/pending.component';
export const routes: Routes = [
  {
    path: 'panel-de-control',
    component: CustomerDashboardComponent,
    canActivate: [loginGuard],
  },
  { path: 'inicio', component: LandingPageComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'productos/:id', component: ProductDetailComponent },
  { path: 'token-login', component: TokenLoginComponent },
  { path: 'contacto', component: ContactPageComponent },
  { path: 'acerca-de-nosotros', component: AboutUsComponent },
  { path: 'recuperar-contraseña', component: RecoverPasswordComponent },
  { path: 'inicio-sesion', component: LoginPageComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'logout', component: LogoutPageComponent, canActivate: [loginGuard] },
  { path: 'carrito', component: CartPageComponent, canActivate: [loginGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [loginGuard] },
  { path: 'success', component: SuccessComponent, canActivate: [loginGuard] },
  { path: 'failure', component: FailureComponent, canActivate: [loginGuard] },
  { path: 'pending', component: PendingComponent, canActivate: [loginGuard] },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];
