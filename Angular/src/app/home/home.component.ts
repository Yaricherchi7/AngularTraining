import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: "About",
        icon: 'pi pi-fw pi-plus',
        url: "/about",
      },
      {
        label: 'contact',
        icon: 'pi pi-fw pi-trash',
        url: "/contact",
      },
    ];
  }
}
