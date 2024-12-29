import Layout from '@src/components/Layout';
import Home from '@src/pages/Home';
import Search from '@src/pages/Search';
import { RouteObject } from 'react-router-dom';

type ExtendedRouteObject = RouteObject & {
  index?: boolean;
  role: number;
};

const publicPages: ExtendedRouteObject[] = [
  {
    path: '/',
    element: <Home />,
    // errorElement: <ErrorPage />,
    index: true,
    role: 1,
  },
  {
    path: '/search',
    element: <Search />,
    // errorElement: <ErrorPage />,
    index: true,
    role: 1,
  },
];

export const routerList: ExtendedRouteObject[] = [
  {
    path: '/',
    element: <Layout />, // 공통 레이아웃 설정
    children: publicPages, // 하위 라우트로 publicPages 추가
    role: 1,
  },
];