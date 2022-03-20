import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, take, tap } from "rxjs";
import { Day, MenuItem } from "./menu";

@Injectable({ providedIn: 'root', })
export class MenuService {
  private menu: Day[] = [
    {
      date: new Date("3/19/22"),
      items: [
          {"recipe": "first", id: 1},
          {"recipe": "second", id: 2}
      ]
    },
    {
      date: new Date("3/21/22"),
      items: [
          {"recipe": "third", id: 3}
      ]
    },
    {
      date: new Date("4/2/22"),
      items: [
          {"recipe": "fourth", id: 4},
          {"recipe": "fifth", id: 5}
      ]
    }
  ];

  constructor(private httpClient: HttpClient) {
  }

  getMenu(): Observable<Day[]> {
    return of(this.menu);
  }

  /** POST: add a new hero to the server */
  addMenuItem(item: MenuItem, date: Date): Observable<MenuItem> {
    let day = this.menu.find(day => day.date == date);
    if (day) {
      day.items.push(item);
    } else {
      this.menu.push({
        date: date,
        items: [item]
      });
    }

    return of(item);
  }
}

