type user={
    name:string;
    email:string;
    isCharging:true;
};

function loginUser(user:user):user{
    return({name:"arka", email:"arauaba@gmail.com",isCharging:true});
}

loginUser({name:"arka", email:"arauaba@gmail.com",isCharging:true});
export {};