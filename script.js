
let product = [
    {id: 1,name: 'car',price: 200},
    {id: 2,name: 'bike',price: 100},
    {id: 3,name: 'moto',price: 200}
];

console.log(product);
console.log(product.length);

function remove(i){
    for(k=0; k<product.length;k++){
       if(i !== k ){
        console.log(product[k])
        alert(product[i].name+ " is deleted")
       }
    }
}
remove(1);