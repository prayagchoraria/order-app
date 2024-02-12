const Order = ({ order }) => (
  <tr>
    <td>{order.id}</td>
    <td>{order.name}</td>
    <td>{order.bun}</td>
    <td>{order.salad ? "Yes" : "No"}</td>
    <td>{order.cheese}</td>
    <td>{order.cutlet}</td>
    <td>{order.price}</td>
  </tr>
);

export default Order;
