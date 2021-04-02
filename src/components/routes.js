import Contacts from './Contacts';
import Products from './pages/Products';
import Counter from './pages/Counter';

export const routes = [
    {
        path: '/products',
        label: 'Products',
        component: Products,
    },
    {
        path: '/contacts',
        label: 'Contacts',
        component: Contacts,
    },
    {
        path: '/counter',
        label: 'Counter',
        component: Counter,
    },
];
