import { Component, Input, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';
import {Student } from 'src/app/models/student';
import { FormsModule  } from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms'; //Importamos los validators
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



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

  @Input() id2 : number
  @Input() dni2 : string
  @Input() nombre2 : string
  @Input() apellido2 : string
  @Input() email2 : string

  dni3: string
  apellido3: string
  nombre3: string
  email3: string

  constructor(private studentService: TestServiceService, private modalService: NgbModal){} //Creamos el constructor de la clase



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

    this.studentService.add(this.student).subscribe(() => { 
      location.reload()
      }, error => {
        console.error(error);
        alert('Error: ' + error.error.message)
        document.getElementsByTagName('input')[0].focus()
    })

  }

  delete(id: number) {
    this.studentService.delete(id).subscribe(() => { //id - resolver
      location.reload()
    },error => {
      console.error(error)
      alert("Error: " + error.error.message)
    })
  }

  view(ver: any, s:Student){ //Hacemos uso del ngbModal (revisar constructor)
    this.id2 = s.id;
    this.dni2 = s.dni;
    this.apellido2 = s.lastName;
    this.nombre2 = s.firstName;
    this.email2 = s.email;
    //this.dni3 -> email3 3lineas abajo


    this.modalService.open(ver).result.then(() => {
      if(this.dni2.trim()!== "" && this.apellido2.trim() !== "" && this.nombre2.trim() !== "" && this.email2.trim() !== "" &&
      (this.dni2.trim() !== this.dni3.trim() || this.apellido2.trim() !== this.apellido3.trim() || this.nombre2.trim() !== this.nombre3.trim() || this.email2.trim() !== this.email3.trim())) {

        let student = new Student();
        student.id = this.id2;
        student.dni = this.dni2;
        student.lastName = this.apellido2;
        student.firstName = this.nombre2;
        student.email = this.email2;
        student.cohort = 0
        student.status = 'activo'
        student.gender = 'masculino'
        student.address = 'mcn223'
        student.phone = '444'

        this.studentService.update(student).subscribe(() => { 
          location.reload();
        }, error => {
          console.error(error);
          alert("Hubo un error: " + error.error.message);
        })
      }


    }, reason => {} ) // ???
      
  }

}







