import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { ModalComponent } from './components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal1Component } from './components/modal-1/modal-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MENU APP';
  modalData: {
    email: string,
    textAreaValue: string
  } = {
    email: 'example@email.com',
    textAreaValue: 'SALVE, tranquilidade ?'
  };

  constructor(private modalService: NgbModal) { }

  openModal(route: string) {
    console.log(route);
    if (route === 'home') { // Verifica se a rota é 'home'
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.selectedRoute = route;
      modalRef.componentInstance.email = this.modalData.email;
      modalRef.componentInstance.saveData = (newEmail: string) => this.saveModalData(newEmail, this.modalData.textAreaValue);
    } else if (route === 'games') {
      const modalRef = this.modalService.open(Modal1Component);
      modalRef.componentInstance.selectedRoute = route;
      modalRef.componentInstance.textareaValue = this.modalData.textAreaValue;
      modalRef.componentInstance.saveData = (newTextAreaValue: string) => this.saveModalData(this.modalData.email, newTextAreaValue);
    }
  }

  saveModalData(newEmail: string, newTextAreaValue: string) {
    this.modalData.email = newEmail;
    this.modalData.textAreaValue = newTextAreaValue;
    console.log('Dados salvos ', this.modalData);
  }
}