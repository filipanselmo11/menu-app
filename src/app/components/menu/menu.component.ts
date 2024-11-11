import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
// import { ModalComponent } from '../modal/modal.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  @Output('toggle-icon-event') toggleIconEvent = new EventEmitter<string>();

  menuSections = [
    { id: 1, title: '1', items: [{ icon: '🎨', route: 'home' }, { icon: '📂', route: 'about' }, { icon: '📅', route: 'calendar' }, { icon: '💻', route: 'dashboard' }] },
    { id: 2, title: '2', items: [{ icon: '🎲', route: 'games' }, { icon: '🎵', route: 'music' }] },
    { id: 3, title: '3', items: [{ icon: '➕', route: 'new' }] }
  ];

  openSections: Set<number> = new Set();

  toggleSection(id: number) {
    if (this.openSections.has(id)) {
      this.openSections.delete(id);
    } else {
      this.openSections.add(id);
    }
  }

  isSectionOpen(id: number): boolean {
    return this.openSections.has(id);
  }

  toggleIconClick(route: string) {
    this.toggleIconEvent.emit(route); // Emite a rota para o componente pai
  }
}