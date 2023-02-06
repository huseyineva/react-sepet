import { useEffect, useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Product from "./components/Product";
import Products from "./products.json";

function App() {
  const [money, setMoney] = useState(3000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * Products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <style>
        {`
					.reset{
						margin-bottom: 10px;
						margin-left: 60px;
					}
					`}
      </style>
      <div className="container products">
        {Products.map((product) => (
          <Product
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
            total={total}
            money={money}
          />
        ))}
      </div>

      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          total={total}
          Products={Products}
          basket={basket}
        />
      )}
    </>
  );
}

export default App;
