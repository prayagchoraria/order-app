import { useEffect, useState } from "react";
import { calculateOrderPrice } from "./utils";

const initialState = {
  name: "",
  bun: 2,
  salad: false,
  cheese: 0,
  cutlet: 0,
};

const CreateOrder = ({ createOrder }) => {
  const [price, setPrice] = useState(0);

  const [orderData, setOrderData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderNumber = createOrder({ ...orderData, price });

    alert(`Your order is created. Your order number is ${orderNumber}`);
    setOrderData(initialState);
  };

  const handleChange = ({ target: { name, value, checked } }) => {
    if (value < 0) {
      return;
    }
    setOrderData({
      ...orderData,
      [name]: name === "salad" ? checked : value,
    });
  };

  useEffect(() => {
    setPrice(calculateOrderPrice(orderData));
  }, [orderData]);

  return (
    <div>
      <h1>Create Order</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name{" "}
          <input
            type="text"
            name="name"
            required
            value={orderData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Bun <input type="number" name="bun" readOnly value={2} />
        </label>
        <label>
          Salad{" "}
          <input
            type="checkbox"
            name="salad"
            onChange={handleChange}
            checked={orderData.salad}
          />
        </label>
        <label>
          Cheese slices{" "}
          <input
            type="number"
            name="cheese"
            value={orderData.cheese}
            onChange={handleChange}
          />
        </label>
        <label>
          Cutlets{" "}
          <input
            type="number"
            name="cutlet"
            value={orderData.cutlet}
            onChange={handleChange}
          />
        </label>

        <p>Total Price: {price} </p>

        <button>Create order</button>
      </form>
    </div>
  );
};

export default CreateOrder;
