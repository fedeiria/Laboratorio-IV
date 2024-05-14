import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './sidenav-data';
import { CommonModule } from '@angular/common';
import { SideNavToggle } from '../../../models/side-nav-toggle';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style( {opacity: 0} ),
        animate('350ms',
          style( {opacity: 1} )
        )
      ]),
      transition(':leave', [
        style( {opacity: 1} ),
        animate('350',
          style( {opacity: 0} )
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  screenWidth = 0;
  collapsed = false;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/welcome']);
  }
}
