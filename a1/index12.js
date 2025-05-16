const products =[
    {id:1,name:"hello",price:34},
    {id:1,name:"hello 1",price:34},
    {id:1,name:"hello 2",price:34}

];
const newarray=products.map(x=>({name:x.name,price:x.price+5}));
newarray.forEach(x1=>{
    console.log(x1.name+" "+x1.price);
})

