import { Home, Myname, Electronics, Mobile, Desktop, Laptop } from './pages';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: '/myname',
    component: Myname,
    breadcrumbName: 'Myname'
  },
  {
    path: '/electronics',
    component: Electronics,
    breadcrumbName: 'Electronics',
    routes: [
      {
        path: '/electronics/mobile',
        component: Mobile,
        breadcrumbName: 'Mobile Phone'
      },
      {
        path: '/electronics/desktop',
        component: Desktop,
        breadcrumbName: 'Desktop PC'
      },
      {
        path: '/electronics/laptop',
        component: Laptop,
        breadcrumbName: 'Laptop'
      }
    ]
  }
];

export default routes;