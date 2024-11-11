import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-1.component.html',
  styleUrl: './modal-1.component.css'
})
export class Modal1Component implements OnInit {
  @Input() selectedRoute!: string;
  @Input() textareaValue!: string;
  @Input() saveData!: (newTextAreaValue: string) => void;

  constructor (private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log('Salve eu sou o modal 1');
    console.log('Textarea ', this.textareaValue);
  }

  saveTextArea() {
    this.saveData(this.textareaValue);
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
