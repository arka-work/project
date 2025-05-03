class Creatuser {
    email:string;
    name:string
    password:number
    readonly city:string="kolkata";

    constructor(email:string , name:string ,password:number)
    {
        this.email=email;
        this.name=name;
        this.password=password;
    }
}

let arka=new Creatuser("dfghj@gmail.com","arka",15)
console.log(arka.city);

export{};