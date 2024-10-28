import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MENU APP';

  constructor(private router: Router) {
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  // goHomePage() {
  //   this.router.navigate(['home']);
  // }

  // goAboutPage() {
  //   this.router.navigate(['about']);
  // }
}
