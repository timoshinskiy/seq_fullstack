import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Profile from "../pages/Profile.jsx";

export const publicRoutes = [
    {path: '/', Page: Home},
    {path: '*', Page: NotFound}
]
export const privateRoutes = [
    {path: '/', Page: Home},
    {path: '*', Page: NotFound},
    {path: '/profile', Page: Profile}
]