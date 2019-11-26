import Home from './components/Home';
import ListProducts from './components/product/List';
import CreateProduct from './components/product/Create';
import EditProduct from './components/product/Edit';
import Login from './components/account/Login';
import Create from './components/account/Create';
import Detail from './components/product/Detail';
import Basket from './components/basket/Basket';

export const routes = [{ path: '', component: Home },
                        {path:'/Home', component : Home},
                        { path: '/product/create', component: CreateProduct },
                        {path: '/product/list', component : ListProducts},
                        {path: '/product/edit/:id', component : EditProduct},
                        {path : '/account/Login', component : Login},
                        {path: '/account/create', component : Create},
                        {path: '/product/detail/:id', component : Detail},
                        {path: '/Basket', component : Basket}
                    ];
