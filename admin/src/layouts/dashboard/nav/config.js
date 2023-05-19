// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Manage Orders',
    path: '/dashboard/orders',
    icon: icon('ic_cartx'),
  },
  {
    title: 'Manage Vendors',
    path: '/dashboard/vendors',
    icon: icon('ic_vendor'),
  },
  {
    title: 'Manage Customers',
    path: '/dashboard/customers',
    icon: icon('ic_user'),
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: icon('ic_settings'),
  },
];

export default navConfig;
