import { Outlet, Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to="/">Create Order</Link> <br />
      <Link to="/admin">Admin</Link>
      <Outlet />
    </>
  );
};

export default Main;
