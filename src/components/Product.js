import React from "react";

function Product({ product, basket, setBasket, total, money }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    checkBasket.amount -= 1;

    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <>
      <div className="product">
        <img src={product.image} />
        <h3>{product.title}</h3>
        <div className="price">
          <h3>${product.price}</h3>
        </div>
        <div className="actions">
          <button
            className="sell-btn"
            disabled={!basketItem}
            onClick={removeBasket}
          >
            SELL
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button
            className="buy-btn"
            disabled={total + product.price > money}
            onClick={addBasket}
          >
            BUY
          </button>
        </div>
        <style>
          {`
            .product {
              padding: 10px;
              background: #fff;
              border: 1px solid #ddd;
							margin-bottom: 10px;
							width: 24%;
            }

						.product img {
							width: 100%;
						}

						.product .price {
							font-size: 20px;
							color: #fff;
						}

						.product h3 {
							font-size: 20px;
							margin-bottom: 10px;
						}

						.product .actions {
							display: flex;
							align-items: center;
						}

						.actions button {
							height: 40px;
							padding: 0 15px;
							flex: 1;
							border-radius: 20px;
							cursor: pointer;
						}

						.actions button[disabled]{
							opacity: .3;
							cursor: not-allowed;
						}

						.actions .buy-btn{
							background: rgb(172, 209, 196);
							font-size: 14px;
							font-weight: bold;
							color: #fff;
						}

						.actions .sell-btn{
							background: #ccc;
							color: #fff;
							font-size: 14px;
							font-weight: bold;
						}

						.actions .amount {
							width: 50px;
							text-align: center;
							border: 1px solid #ddd;
							border-radius: 40px;
							font-size: 15px;
							font-weight: bold;
						}
						 
          `}
        </style>
      </div>
    </>
  );
}

export default Product;
