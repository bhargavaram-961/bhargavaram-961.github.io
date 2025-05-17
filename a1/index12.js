const products =[
    {id:1,name:"hello",price:34,status:"pending"},
    {id:1,name:"hello 1",price:34,status:"pending"},
    {id:1,name:"hello 2",price:34,status:"pending"}

];
const newarray=products.map((item)=>({...item,price:item.price+5,status:item.status="complete"}))
console.log(newarray)


