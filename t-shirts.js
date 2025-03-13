const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: '/images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: '/images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: '/images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: '/images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: '/images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: '/images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: '/images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: '/images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: '/images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

function TshirtCard({ tshirt, index, updateStock }) {
  const [stock, setStock] = React.useState(tshirt.stock);
  const [selectedQuantity, setSelectedQuantity] = React.useState(1);

  React.useEffect(() => {
    setStock(tshirt.stock);
  }, [tshirt]);

  const handleSelectChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value));
  };

  const handleBuyClick = () => {
    if (stock >= selectedQuantity) {
      const newStock = stock - selectedQuantity;
      setStock(newStock);
      updateStock(index, newStock);
    }
  };

  return (
    <div className="col-12 col-md-4 col-lg-4 mb-4">
      <div className="card shadow-sm">
        <img src={tshirt.image} alt={tshirt.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{tshirt.title}</h5>
          <p className="card-price">Price: ${tshirt.price.toFixed(2)}</p>
          <p className={`card-stock ${stock === 0 ? 'text-danger' : ''}`}>
            {stock === 0 ? 'Out of Stock' : `${stock} left!`}
          </p>
          <select
            value={selectedQuantity}
            onChange={handleSelectChange}
            className="form-select"
            disabled={stock === 0}
          >
            {[...Array(stock).keys()].map(i => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <br></br>
          <div className="card-button">
            <button
              className="btn btn-primary"
              onClick={handleBuyClick}
              disabled={stock === 0}
            >
              {stock === 0 ? 'Out of Stock' : 'Buy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TshirtList() {
  const [tshirtList, setTshirtList] = React.useState(tshirts);

  const updateStock = (index, newStock) => {
    const updatedTshirts = [...tshirtList];
    updatedTshirts[index].stock = newStock;
    setTshirtList(updatedTshirts);
  };

  return (
    <div className="row">
      <h1 className="text-center my-4">T-shirts</h1>
      {tshirtList.map((tshirt, index) => (
        <TshirtCard
          key={index}
          tshirt={tshirt}
          index={index}
          updateStock={updateStock}
        />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TshirtList />);
