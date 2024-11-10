import { createBrowserRouter} from "react-router-dom";
import { Root } from "../components/Root";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { WebSitePage } from "../pages/WebSite/WebSitePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { CleanPath } from "./CleanPath";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "profile",
        element: (
          <CleanPath>
            <ProfilePage/>
          </CleanPath>)
      },
      {
        path: "/website",
        element: (
          <CleanPath>
            <WebSitePage />
          </CleanPath>)
      },
      {
        path: "login",
        element: (
          <CleanPath>
            <LoginPage/>
          </CleanPath>)
      }
    ],
    errorElement: <div>Страница не найдена</div>,
  },
]);