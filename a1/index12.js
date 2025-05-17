const products =[
    {id:1,name:"hello",price:34,status:"pending",qty:3},
    {id:2,name:"hello 1",price:34,status:"pending",qty:5},
    {id:3,name:"hello 2",price:34,status:"pending",qty:2}

];
const newarray=products.map((item)=>({...item,price:item.price+5,status:item.status="complete",total:item.qty*item.price}))
console.log(newarray)






