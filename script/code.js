
let product =  document.querySelector('div.')
let products = [
    { name: 'Poloneck', price: 79.99, image: 'https://i.postimg.cc/L4rZMLC8/poloneck.png' },
    { name: 'Boots', price: 249.99, image: 'https://i.postimg.cc/8zCGKnRJ/winter-boots.png' },
    { name: 'Hoodie', price: 400.00, image: 'https://i.postimg.cc/5ytpdvn3/winter-hoodie.png' },
    { name: 'Dress', price: 179.99, image: 'https://i.postimg.cc/W4nMNzDf/winter-dress-1.png'},
    { name: 'Coat', price: 321.99, image: 'https://i.postimg.cc/9FY8RmqZ/coat.png'},
  ];
products.forEach((content)=>{
    products.innerHTML +=
<div class="card" style="width: 18rem;">
  <img src="${content.image}" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">${content.price}</h5>
    <p class="card-text">${content.name}</p>
    <a href="#" class="btn btn-primary">Add a chart</a>
  </div>
</div>
})