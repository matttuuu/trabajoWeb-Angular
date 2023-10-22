import { Component, Input, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';
import {Student } from 'src/app/models/student';
import { FormsModule  } from '@angular/forms';
//import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'componente-tabla',
  templateUrl: './first-component.component.html', 
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit  { //OnInit es una interfaz que te permite cargar cosas cuando el componente se carga
  studentsList = new Array <Student>

  @Input() dni : string = "44670850" //variables de tipo string, para realizar la validacion en el tfoot
  nombre : string 
  apellido : string
  email : string

  id2 : string
  dni2 : string
  nombre2 : string
  apellido2 : string
  email2 : string

  constructor(private studentService: TestServiceService){} //Creamos el constructor de la clase

  


  ngOnInit() { 
    this.getAll()
  }

  getAll(){
    this.studentService.getAll().subscribe(response => {
      this.studentsList = response;
    }, error => {
      console.log(error);     
    })
  }

  add(){ //Solventar este método
    let s = new Student()
    s.dni=this.dni
    this.studentService.add(s).subscribe(response => {
      this.studentsList = response;
    }, error => {
      console.log(error);   
    })
  }

  saveStudent(){

    let s = new Student()
    s.dni = this.dni
    s.lastName = this.apellido
    s.firstName = this.nombre
    s.email = this.email
    s.cohort = 0
    s.status = 'activo'
    s.gender = 'masculino'
    s.address = 'abc123'
    s.phone = '000'
    this.studentService.add(new Student).subscribe(() => { // deberia usar el new?
      location.reload()
      }, error => {
        
        alert('Error: ' + error.error.message)
        document.getElementsByTagName('input')[0].focus()
    })

  }

}
