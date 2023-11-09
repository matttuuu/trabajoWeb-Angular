import { Component, Input, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';
import {Student } from 'src/app/models/student';
import { FormsModule  } from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms'; //Importamos los validators
//import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'componente-tabla',
  templateUrl: './first-component.component.html', 
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit  { //OnInit es una interfaz que te permite cargar cosas cuando el componente se carga
  student = new Student();
  studentForm:FormGroup;
  
  studentsList = new Array <Student>
  

  //@Input() dni : string = "44670850" //variables de tipo string, para realizar la validacion en el tfoot
  //nombre : string 
  //apellido : string
  //email : string

  id2 : string
  dni2 : string
  nombre2 : string
  apellido2 : string
  email2 : string

  constructor(private studentService: TestServiceService){} //Creamos el constructor de la clase



  ngOnInit() { 
    this.studentForm= new FormGroup({ 
      "dni": new FormControl(this.student.dni,Validators.required),
      "firstName":new FormControl(this.student.firstName, Validators.required),
      "lastName":new FormControl(this.student.lastName, Validators.required),
      "email":new FormControl(this.student.email, Validators.required)
    });
    this.getAll()
  }


  //getter, para recuperar las variables
  get dni() {return this.studentForm.get("dni") } //Copiar estos getter para cada variable requerida
  get lastName() {return this.studentForm.get("lastName")}
  get firstName() {return this.studentForm.get("firstName")}
  get email() {return this.studentForm.get("email")}
  


  getAll(){
    this.studentService.getAll().subscribe(response => {
      this.studentsList = response;
    }, error => {
      console.log(error);     
    })
  }

  /*
  add(){ //Solventar este método
    let s = new Student()
    s.dni=this.dni
    this.studentService.add(s).subscribe(response => {
      this.studentsList = response;
    }, error => {
      console.log(error);   
    })
  }
*/
  saveStudent(){

    this.student.dni = this.dni?.value //sintaxis
    this.student.lastName = this.lastName?.value
    this.student.firstName = this.firstName?.value
    this.student.email = this.email?.value
    this.student.cohort = 0
    this.student.status = 'activo'
    this.student.gender = 'masculino'
    this.student.address = 'abc123'
    this.student.phone = '223000'

    this.studentService.add(new Student).subscribe(() => { // deberia usar el new?
      location.reload()
      }, error => {

        alert('Error: ' + error.error.message)
        document.getElementsByTagName('input')[0].focus()
    })

  }

}







