import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateOrder from "./CreateOrder";
import Orders from "./Orders";
import Main from "./Main";
import "./styles.css";

export default function App() {
  const [orders, setOrders] = useState([]);
  const createOrder = (order) => {
    const id = orders.length + 1;
    setOrders([
      ...orders,
      {
        id,
        ...order,
      },
    ]);
    return id;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <CreateOrder createOrder={createOrder} />,
        },
        {
          path: "admin",
          element: <Orders orders={orders} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
