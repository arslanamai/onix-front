import { createBrowserRouter} from "react-router-dom";
import { Root } from "../components/Root";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { WebSitePage } from "../pages/WebSite/WebSitePage";
import { ContactPage } from "../pages/Contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <LoginPage/>,
      }
    ], 
    errorElement: <div>Oops, page not found</div>,
  },
  {
    path: "profile",
    element: <ProfilePage/>,
  },
  {
    path: "website",
    element: <WebSitePage/>,
    children: [
      {
          path: "contact",
          element: <ContactPage/>
      }
    ]
  }
]);