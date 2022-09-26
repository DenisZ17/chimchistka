import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

function CounterProduct(props) {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="product__item-counter">
      <BiMinus
        onClick={() => decrement()}
        className="product__item-counterDec"
        color="#000"
        fontSize={26}
      />

      <div className="product__item-counterNumb">{count}</div>
      <BiPlus
        onClick={() => increment()}
        className="product__item-counterInc"
        color="#000"
        fontSize={26}
      />
    </div>
  );
}

export default CounterProduct;
