import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Profile from "../pages/Profile.jsx";
import Catalog from '../pages/Catalog.jsx';
import Product from '../pages/Product.jsx';
import CreateItem from "../pages/CreateItem.jsx";

export const publicRoutes = [
    {path: '/', Page: Home},
    {path: '/catalog', Page: Catalog},
    {path: '/product/:id', Page: Product},
    {path: '*', Page: NotFound}
]
export const privateRoutes = [
    {path: '/', Page: Home},
    {path: '/profile', Page: Profile},
    {path: '/catalog', Page: Catalog},
    {path: '/product/:id', Page: Product},
    {path: '/catalog/create', Page: CreateItem},
    {path: '*', Page: NotFound}
]