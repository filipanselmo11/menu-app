import { Component } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  email: string =  '';
  modalOpen: boolean = false;

  // constructor(private router: Router) { }

}
