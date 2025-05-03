interface user{
    readonly userid:number
    name:string
    email:string
    getCoupon(Coupon:string):number
}
getCoupon:(name:"arka")=>{
    return 10
}

let arkaprava:user={userid:2345,name:"arka",email:"hdhd@gmail.com", getCoupon:(name:"bob"):number=>{
    return 100
}
    
}

console.log(arkaprava.name)

export{}