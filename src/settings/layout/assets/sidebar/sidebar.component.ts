import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarService } from './sidebar.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from "../../../core/auth/auth.service";
import { HttpService } from "../../../core/http/http.service";
import { NavMenu } from "../../../theme/components/navigation/navMenu";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sideNavLeft') public sideNavLeft!: MatSidenav;
  @ViewChild('sideNavRight') public sideNavRight!: MatSidenav;
  showFiller = false;
  menuItems: NavMenu[];
  userVisible$: any;
  userMenuOpen$: any;
  user!: any;

  constructor(
    private sidenavService: SidebarService,
    private observer: BreakpointObserver,
    private authService: AuthService,
    private httpService: HttpService,
  ) {
    this.menuItems = [
      {
        id: 'user.dashboard',
        title: 'Dashboard',
        type: 'collapsable',
        icon: 'dashboard',
        children: [
          {
            id: 'user.dashboard',
            title: 'Dashboard',
            type: 'basic',
          }
        ],
      },
      {
        id: 'user.analytics',
        title: 'Analytics',
        type: 'basic',
        icon: 'analytics',
      },
      {
        id: 'user.settings',
        title: 'Settings',
        type: 'basic',
        icon: 'settings',
      },
    ];
  }


  authenticated() {
    return this.authService.authenticated;
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  get buildVersion(): string {
    return 'Alpha.v.60e2f785';
  }

  // ngAfterViewInit() {
  //   this.sidenavService.setSidenav(this.sideNavLeft);
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
  //     if (res.matches) {
  //       this.sideNavLeft.mode = 'over';
  //       this.sideNavLeft.close().then((r) => console.log(r));
  //     } else {
  //       this.sideNavLeft.mode = 'side';
  //       this.sideNavLeft.open().then((r) => console.log(r));
  //     }
  //   });
  // }
}
