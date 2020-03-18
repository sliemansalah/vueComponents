import Dashboard from "../views/Dashboard";
import Index from "../views/customers/Index";
import Customers from "../views/customers/View";

import UsersIndex from "../views/users/Index";
import UsersView from "../views/users/View";
import UserDetails from "../views/users/Details";

import ComponentsIndex from "../views/components/Index";
import ComponentsBase from "../views/components/Base";
import ComponentsPrime from "../views/components/Prime";

import FormsIndex from "../views/forms/Index";
import ValidationForm from "../views/forms/ValidationForm";

export default  [
    { path: '/', component: Dashboard },
    { path: '/customers', component: Index, children:[
        { path: '', component: Customers },
    ] },
    { path: '/users', component: UsersIndex, children:[
        { path: '', component: UsersView },
        { path: ':id/details', component: UserDetails },
    ] },
    { path: '/components', component: ComponentsIndex, children:[
        { path: '', component: ComponentsBase },
        { path: 'base', component: ComponentsBase },
        { path: 'prime', component: ComponentsPrime },
    ] },
    { path: '/forms', component: FormsIndex, children:[
        { path: '', component: ValidationForm },
        { path: 'validation', component: ValidationForm },
    ] },
]
