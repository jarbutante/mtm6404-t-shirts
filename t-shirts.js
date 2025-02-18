const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

const tshirtCards = document.querySelectorAll(".card");

  tshirtCards.forEach((card, index) => {
    const stockText = card.querySelector("p.text-muted-foreground");
    const selectBox = card.querySelector("select");
    const buyButton = card.querySelector("button");

    // Update stock display
    if (tshirts[index].stock === 0) {
      stockText.textContent = "Out of Stock";
      stockText.classList.add("text-danger");
      buyButton.disabled = true;
      selectBox.disabled = true;
    } else {
      stockText.textContent = `${tshirts[index].stock} left!`;
      selectBox.innerHTML = "";
      for (let i = 1; i <= tshirts[index].stock; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectBox.appendChild(option);
      }
    }

    // Buy button event listener
    buyButton.addEventListener("click", function () {
      const selectedQuantity = parseInt(selectBox.value);

      // Decrease stock by the selected quantity
      tshirts[index].stock -= selectedQuantity;

      // Check if stock is now 0
      if (tshirts[index].stock <= 0) {
        tshirts[index].stock = 0;
        stockText.textContent = "Out of Stock";
        stockText.classList.add("text-danger");
        buyButton.disabled = true;
        selectBox.disabled = true;
      } else {
        stockText.textContent = `${tshirts[index].stock} left!`;

        // Update select options
        selectBox.innerHTML = "";
        for (let i = 1; i <= tshirts[index].stock; i++) {
          const option = document.createElement("option");
          option.value = i;
          option.textContent = i;
          selectBox.appendChild(option);
        }
      }
    });
  });
