type user = {
    id:number;
    username:string;
}

type admin={
    admin_id:number;
    admin_name:string

}

let arka :user|admin={username:"arka15",id:1234}
let harry:user={username:"bob",id:7890}
console.log(arka)
arka.username="arkaprava";

export {};