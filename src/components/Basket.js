import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, Products, total, resetBasket }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Shopping Details</h3>
        {basket.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            product={Products.find((p) => p.id === item.id)}
          />
        ))}
        <div className="total">Total: ${total}</div>

        <style>
          {`
					.total{
						margin-top:10px;
					}
					`}
        </style>
        <button
          disabled={total === 0}
          className="reset-btn"
          onClick={resetBasket}
        >
          RESET
        </button>
      </div>
      <style>
        {`
				.basket-container {
					padding: 20px;
					background: #fff;
					border: 1px solid #ddd;
				}

				.basket-container h3 {
					font-size: 20px;
					margin-bottom: 10px;
					text-decoration: underline;
				}
				
				.basket-container .total {
					border-top: 1px solid #ddd;
					padding-top: 10px;
					margin-top: 10px;
					font-size: 15px;
					font-weight: bold;
					text-align: right;
					color: rgb(172, 209, 196);
				}

				.reset-btn {
					background: rgb(172, 209, 196);
					color: #fff;
					border-radius: 40px;
					padding: 0 20px;
					height: 40px;
					cursor: pointer;
					font-size: 15px;
					font-weight: bold;
					letter-spacing: 1px;
				}
				`}
      </style>
    </>
  );
}

export default Basket;
