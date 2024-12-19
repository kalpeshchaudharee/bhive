import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// Lazy-loaded components
const Home = lazy(() => import('../pages/Home/Home'));
// const About = lazy(() => import('../pages/About'));
// const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    // { path: '/about', element: <About /> },
    // { path: '*', element: <NotFound /> },
  ]);

  return routes;
};

export default AppRoutes;