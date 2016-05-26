var mattresses = [
  {
    name: "Heaven Sleep",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$899",
    imageURL: "img/mattress5.png"
  },
  {
    name: "Mothers Hug",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$1099",
    imageURL: "img/mattress1.jpg"
  },
  {
    name: "STP",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$1099",
    imageURL: "img/mattress2.jpg"
  },
  {
    name: "Quilted Northern",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$399",
    imageURL: "img/duvet.jpg"
  },
  {
    name: "Supportive",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$99",
    imageURL: "img/pillow.jpg"
  },
  {
    name: "The Bird",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$99",
    imageURL: "img/pillow2.jpg"
  },
  {
    name: "Revolution #9",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$899",
    imageURL: "img/mattress3.jpg"
  },
  {
    name: "Stop Making Sense",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$199",
    imageURL: "img/frame1.jpg"
  },
  {
    name: "Sapien",
    description: "Lorem ipsum dolor sit amet, sapien neque nobis, enim nunc. Lectus mattis purus quisque sem, lorem molestie dis sem ac libero, diam vivamus id, eget ac aliquam. Sit accumsan, semper ridiculus, est dui enim lorem non pharetra eget.",
    price: "$1299",
    imageURL: "img/mattress4.jpg"
  }
];

var productContainer = document.getElementsByClassName("container");
var productContainer = productContainer[0];

for (var i = 0; i < mattresses.length; i++) {
  var productCard =  `<div class="productContainer">
                        <div class="productImageContainer">
                          <img src="${mattresses[i].imageURL}"
                        </div>
                        <div class="productInfoContainer">
                          <h1>${mattresses[i].name}</h1>
                          <p>${mattresses[i].description}</p>
                          <p>${mattresses[i].price}</p>
                        </div>
                      </div>`;

  productContainer.innerHTML += productCard;

}
