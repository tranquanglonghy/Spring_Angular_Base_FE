import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("A","BC","abc@gmail.com", 100),
    new SalesPerson("B","BC","bbc@gmail.com", 100),
    new SalesPerson("C","BC","cbc@gmail.com", 100),
    new SalesPerson("D","BC","dbc@gmail.com", 100)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
