import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input('selected-route') selectedRoute: string = '';
  @Input('content-template') contentTemplate!: TemplateRef<any>;
  // @Input('modal-content') modalContent: any;
  // @Input() fields!: { name: string; label: string; type: string }[];

  constructor(public activeModal: NgbActiveModal) { }

}
