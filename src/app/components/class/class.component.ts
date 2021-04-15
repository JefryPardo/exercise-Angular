import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {
  
  alerta:string = "alert-danger"
  cargando: boolean = false;


  propiedades: any = { 
    danger: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.cargando= true;
    setTimeout( ()=> this.cargando= false, 3000 )
  }

}
