async function GetData() {
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  return data;
}
async function buscador() {
  let producToSearch = document.getElementById("buscar");
  let product = producToSearch.value;
  let res = await fetch(`http://localhost:3000/products?producto=${product}`);
  let productsFilter = await res.json();
  let data2 = "";
  for (let i = 0; i < productsFilter.length; i++) {
    data2 += `
    <div class="Carta">
      <div class="carta_imagen">
        <img
          class="product_image"
          src="${productsFilter[i].image}" />
      </div>      
      <span class="carta_container"> ${productsFilter[i].product} </span>    
      <span class="carta_id"> ${productsFilter[i].id} </span>
    </div>    
`;
  }
  document.getElementById("Cards").innerHTML = data2;
}
window.addEventListener("load", async (event) => {
  let productsList = await GetData();
  let data = "";
  for (let i = 0; i < productsList.length; i++) {
    data += `
    <div class="Carta">
      <div class="carta_imagen">
        <img
          class="product_image"
          src="${productsList[i].image}" />
      </div>      
      <span class="carta_container"> ${productsList[i].product} </span>    
      <span class="carta_id"> ${productsList[i].id} </span>
    </div>
`;
  }
  document.getElementById("Cards").innerHTML = data;
});
