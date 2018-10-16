import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles: any;
  constructor() { }

  ngOnInit() {
    this.mobiles = [
      {img:"assets/Images/mobiles/1.jpg",heading:"OnePlus 6 (Mirror Black 6GB RAM + 64GB Memory)",price:"₹34,999",subheading:"Free Delivery by tomorrow"},
      {img:"assets/Images/mobiles/2.jpg",heading:"Honor Pro (Blue 3GB RAM + 32GB Memory)",price:"₹25,999",subheading:"Free Delivery by tomorrow"},
      {img:"assets/Images/mobiles/3.jpg",heading:"Apple iPhone X (Space Grey, 256GB)",price:"₹1,02,962",subheading:"Free Delivery by tomorrow"}
    ]
  }
}
