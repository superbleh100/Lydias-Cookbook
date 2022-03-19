import { Component, OnInit } from '@angular/core';
import { Day } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit{
  menuList: Day[] = [];

  constructor(private menuService: MenuService,) {
  }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuService.getMenu().subscribe(items => this.menuList = items);
  }

}
