import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayout";

//^ pages
import Login from "../pages/authentication/Login/Login";
import SignIn from "../pages/authentication/Signin/SignIn";
import AboutUs from "../pages/AboutUs/AboutUs";
import Profile from "../pages/profile/Profile";
import Notification from "../pages/notification/Notification";
import TimeLine from "../pages/TimeLine/TimeLine";
import Network from "../pages/network/Network";
import Jobs from "../pages/jobs/Jobs";

//^ layouts
import ValidationLayout from "../layouts/validation-layout";
import AboutMe from "../pages/authentication/userDetailForms/AboutMe/AboutMe";
import Education from "../pages/authentication/userDetailForms/Education/Education";
import Experience from "../pages/authentication/userDetailForms/Experience/Experience";
import Skills from "../pages/authentication/userDetailForms/Skills/Skills";
import AddLanguage from "../pages/authentication/userDetailForms/Language/AddLanguage";
import Preferredshifts from "../pages/authentication/userDetailForms/Shifts/Preferredshifts";
import AddRole from "../pages/authentication/userDetailForms/roles/AddRole";
import FeedBack from "../pages/FeedBack/FeedBack";
import OrgSignIn from "../pages/authentication/OrgDetailForms/OrgSignIn/OrgSignIn";
import AddJobs from "../pages/authentication/OrgDetailForms/AddJobs";
import OrgRootLayout from "../pages/RootLayout/OrgRootLayout";
import ReviewApplication from "../pages/OrgPages/ReviewApplication";
import OrgProfile from "../pages/OrgPages/OrgProfile";
import OrgProfileForm from "../pages/OrgPages/OrgProfileForm";

function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ValidationLayout />,
      children: [
        { path: "/", element: <RootLayout /> },

        //User Pages
        { path: "/AboutUs", element: <AboutUs /> },
        { path: "/profile", element: <Profile /> },
        { path: "/notification", element: <Notification /> },
        { path: "/TimeLine", element: <TimeLine /> },
        { path: "/network", element: <Network /> },
        { path: "/jobs", element: <Jobs /> },
        { path: "/RootLayout", element: <RootLayout /> },
        { path: "/AboutMe", element: <AboutMe /> },
        { path: "/Education", element: <Education /> },
        { path: "/Experience", element: <Experience /> },
        { path: "/Skills", element: <Skills /> },
        { path: "/AddLanguage", element: <AddLanguage /> },
        { path: "/Preferredshifts", element: <Preferredshifts /> },
        { path: "/AddRole", element: <AddRole /> },
        { path: "/FeedBack", element: <FeedBack /> },

        //organization Pages
        { path: "/OrgSignIn", element: <OrgSignIn /> },
        { path: "/AddJobs", element: <AddJobs /> },
        { path: "/OrgRootLayout", element: <OrgRootLayout /> },
        { path: "/ReviewApplication", element: <ReviewApplication /> },
        { path: "/OrgProfile", element: <OrgProfile /> },
        { path: "/OrgProfileForm", element: <OrgProfileForm /> },
      ],
    },
    { path: "/Login", element: <Login /> },
    { path: "/Signin", element: <SignIn /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default Router;
