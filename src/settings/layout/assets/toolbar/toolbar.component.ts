import {Component, HostBinding, OnInit} from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { AuthService } from "../../../core/auth/auth.service";
import { FormControl } from "@angular/forms";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';

  constructor(
    private sidenav: SidebarService,
    private authService: AuthService,
    private overlay: OverlayContainer,
  ) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }


  toggleSidenav() {
    this.sidenav.toggle();
  }

  logout() {
    this.authService.logout();
  }

  authenticated() {
    return this.authService.authenticated();
  }
}
