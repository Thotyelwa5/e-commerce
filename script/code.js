
let productList = document.querySelector('#product-list');
let products = [
  { name: 'Poloneck', price: 79.99, image: 'https://i.postimg.cc/L4rZMLC8/poloneck.png' },
  { name: 'Boots', price: 249.99, image: 'https://i.postimg.cc/8zCGKnRJ/winter-boots.png' },
  { name: 'Hoodie', price: 400.00, image: 'https://i.postimg.cc/5ytpdvn3/winter-hoodie.png' },
  { name: 'Dress', price: 179.99, image: 'https://i.postimg.cc/W4nMNzDf/winter-dress-1.png'},
  { name: 'Coat', price: 321.99, image: 'https://i.postimg.cc/9FY8RmqZ/coat.png'},
];

products.forEach((product) => {
  let card = document.createElement('div');
  card.className = 'card';
  card.style = 'width: 18rem;';

  let image = document.createElement('img');
  image.className = 'card-img-top';
  image.src = product.image;
  image.alt = 'Product Image';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = product.price;

  let text = document.createElement('p');
  text.className = 'card-text';
  text.textContent = product.name;

  let button = document.createElement('a');
  button.href = '#';
  button.className = 'btn btn-primary';
  button.textContent = 'Add to Cart';

  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(button);

  card.appendChild(image);
  card.appendChild(cardBody);

  productList.appendChild(card);
});
