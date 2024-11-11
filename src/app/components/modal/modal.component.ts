import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() selectedRoute: string = '';
  @Input() email!: string;
  @Input() saveData!: (newEmail: string) => void;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log('Salve, eu sou o MODAL 0');
    console.log('EMAIL ', this.email);
  }

  saveEmail() {
    this.saveData(this.email);
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }

  sendEmail() {
    console.log('Email enviado: ', this.email);
    this.closeModal();
  }
}
