
export class Student{ //Creamos la clase student
    
    id:number 
    dni:string
    lastName:string
    firstName:string
    email:string
    cohort?:number //Podemos poner este caracter para que se valide, si es que no tenemos
    //la propiedad stricPropertyInitialization = false en el archivo tsconfig.json
    status?:string
    gender?:string
    address?:string
    phone?: string


}