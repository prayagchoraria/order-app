import { useEffect, useState } from "react";
import Order from "./Order";
import { calculateTotalPrice } from "./utils.js";

const Orders = ({ orders }) => {
  const [filteredOrders, setFilteredOrders] = useState([...orders]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText !== "") {
      setFilteredOrders(
        orders.filter((order) => {
          return order.name.toLowerCase().includes(searchText.toLowerCase());
        })
      );
    } else {
      setFilteredOrders(orders);
    }
  }, [searchText]);

  return (
    <div>
      <h1>Orders</h1>
      Search by name:{" "}
      <input
        type="text"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Bun</th>
            <th>Salad</th>
            <th>Cheese</th>
            <th>Cutlet</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </tbody>
      </table>
      <br />
      {!!orders.length && (
        <h2>Total Sales: {calculateTotalPrice(filteredOrders)}</h2>
      )}
      <br />
      {!orders.length && <span>No orders yet</span>}
    </div>
  );
};

export default Orders;
