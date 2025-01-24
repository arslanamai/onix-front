import { Link, Outlet } from "react-router-dom";

export function Root() {
    return (
        <div> 
          <Link to="login">Log in</Link>
          <Outlet/>
        </div>
    );
  }