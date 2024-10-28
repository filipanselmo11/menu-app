import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MENU APP';
  @ViewChild('modalContentHome', { static: true }) modalContentHome!: TemplateRef<any>;
  @ViewChild('modalContentAbout', { static: true }) modalContentAbout!: TemplateRef<any>;
  @ViewChild('modalContentGames', { static: true }) modalContentGames!: TemplateRef<any>;
  @ViewChild('modalContentDefault', { static: true }) modalContentDefault!: TemplateRef<any>;

  constructor(private router: Router, private modalService: NgbModal) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  openModal(route: string) {
    const modalRef = this.modalService.open(ModalComponent);
    let modalContent: TemplateRef<any>;

    switch (route) {
      case 'home':
        modalContent = this.modalContentHome;
        break;
      case 'about':
        modalContent = this.modalContentAbout;
        break;
      case 'games':
        modalContent = this.modalContentGames;
        break;
      default:
        modalContent = this.modalContentDefault;
        break;
    }

    modalRef.componentInstance.selectedRoute = route;
    modalRef.componentInstance.contentTemplate = modalContent;
  }
  // goHomePage() {
  //   this.router.navigate(['home']);
  // }

  // goAboutPage() {
  //   this.router.navigate(['about']);
  // }
}
