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
    this.menuService.getMenu().subscribe(items => {
      let days = this.getWeek();
      days.forEach(day => {
        let item = items.find(d => d.date.getTime() == day.getTime());
        if (item) {
          this.menuList.push(item);
        } else {
          this.menuList.push({
            date: new Date(day),
            items: []
          });
        }
      });
    });
  }

  private getWeek(): Date[] {
    let days = [];
    let today = new Date();
    let currentDay = new Date();
    today.setHours(0,0,0,0);
    currentDay.setHours(0,0,0,0);

    for (let i = 0; i < 7; i++) {
      days.push(currentDay);
      currentDay = new Date(today.setDate(today.getDate() + 1));
    }

    return days;
  }

}
