import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {
  // variable de estado para mostrar el menu responsivo
  show:boolean = true;
    
  constructor() { }

  ngOnInit() {
  }

  showMenu(){
    let foo = this.show;
    this.show = foo === false ? true : false; 
  }

}
