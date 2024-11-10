import { Outlet } from "react-router-dom";

export type Props = {
    children: React.ReactNode;
  };
  
  export function Root() {
    return (
        <div>
          <Outlet/>
        </div>
    );
  }