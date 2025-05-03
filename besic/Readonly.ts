type user={
    readonly id:number
    name:string
    password:string
    email:string
    cedit_card?:number
}

let newuser : user = {
    id:1234,
    name:"Bob",
    password:"sdfghj345",
    email:"wert45@gmail.com"
}

newuser.name="arka"
console.log(newuser.name)