import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle: string = "iMarket";
  menuItems: any;
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {heading:"Electronics",icon:"fa fa-mobile fa-lg"},
      {heading:"TVs & Appliances",icon:"fa fa-tv fa-lg"},
      {heading:"Men",icon:"fa fa-male fa-lg"},
      {heading:"Women",icon:"fa fa-female fa-lg"},
      {heading:"Baby & Kids",icon:"fa fa-user-circle  fa-lg"},
      {heading:"Home & Furniture",icon:"fa fa-home fa-lg"},
      {heading:"Grocery",icon:"fa fa-apple fa-lg"}
    ]
 }
}
