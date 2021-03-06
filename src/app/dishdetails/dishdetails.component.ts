import { Component, OnInit,Input } from '@angular/core';
import { Dish } from 'src/app/shared/dish';


@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.css']
})
export class DishdetailsComponent implements OnInit {

    @Input()
    dish = Dish;
    constructor() { }

    ngOnInit() {
    }

}
