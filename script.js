let product = [
  { id: 1, name: "car", price: 200 },
  { id: 2, name: "bike", price: 100 },
  { id: 3, name: "moto", price: 200 },
  { id: 4, name: "airplane", price: 200 },
  { id: 5, name: "truck", price: 100 },
  { id: 6, name: "ambulance", price: 200 },
];
console.log("All products");
console.log(product);
console.log("Length of product");
console.log(product.length);

function deleteArray(k) {
  let del = product[k].name;
  product.splice(k, 1);
  console.log("All Products after deleting");
  console.log(product);
  console.log(del + " is deleted");
}

deleteArray(0);

function remove(i) {
  for (k = 0; k < product.length; k++) {
    if (i !== k) {
      console.log(product[k]);
      alert(product[i].name + " is deleted");
    }
  }
}
// remove(1);
