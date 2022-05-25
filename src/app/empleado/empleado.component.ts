import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //template:"<p>Aca va un empleado</p>",
  //styles: ["p {background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre = 'juan';
  apellido = 'Valdez'
  edad = 25;
  //empresa = 'pildora informaticas';
  constructor() { }

  getEdad(){
    return this.edad;
  }

  /*llamaEmpresa(value: String){
  }*/

  habilitacionCuadro = false;

  usuRegistrado = false;

  getRegistroUsuario(){
    this.usuRegistrado = false;
  }

  ngOnInit(): void {
  }

}
