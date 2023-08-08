import { Component, OnInit } from '@angular/core';

// declare const $:any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'bi-speedometer', class: '' },
    { path: '/inventario', title: 'Inventario TI',  icon:'bi-table', class: '' },
    { path: '/factibilidades', title: 'Factibilidades',  icon:'bi-people', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  menuItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
