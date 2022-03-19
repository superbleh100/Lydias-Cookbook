import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Day } from "./menu";

@Injectable({providedIn: 'root',})
export class MenuService {
    getMenu(): Observable<Day[]> {
        return of([
            {
                date: new Date('3/19'),
                items: [
                    {recipe: 'first'},
                    {recipe: 'second'}
                ]
            },
            {
                date: new Date('3/21'),
                items: [
                    {recipe: 'third'},
                ]
            },
            {
                date: new Date('4/2'),
                items: [
                    {recipe: 'fourth'},
                    {recipe: 'fifth'}
                ]
            }
            
        ]);
    }
}

