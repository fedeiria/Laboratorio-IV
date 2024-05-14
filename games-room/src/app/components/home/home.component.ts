import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SideNavToggle } from '../../models/side-nav-toggle';
import { HeaderComponent } from '../layout/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent, SidenavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
