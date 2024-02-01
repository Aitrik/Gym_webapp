
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { useLocation } from 'react-router-dom';
import { Check_Token } from './Redux/AuthSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Cms/Dashboard';
import { lazy, Suspense } from 'react';
import Book from './Cms/Book';

function App() {

  const Login = lazy(() => import('./Auth/Login'))
  const Register = lazy(() => import('./Auth/Register'))
  const Home = lazy(() => import('./Cms/Home'))
  const About = lazy(() => import('./Cms/About'))
  const Services = lazy(() => import('./Cms/Services'))
  const Blog = lazy(() => import('./Cms/Blog'))
  const Blog1 = lazy(() => import('./Cms/Blog1'))
  const Services1=lazy(()=>import('./Cms/Services1'))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Check_Token());
  }, []);

  const Privatenames = [
    {
      path: '/dashboard',
      Component: <Dashboard />
    },
    {
      path: '/services',
      Component: <Services />
    },
    {
      path: '/blog',
      Component: <Blog />
    },
    {
      path: "/blog1/:id",
      Component: <Blog1 />
    },
    {
      path:"/services/:id",
      Component:<Services1/>
    },
    {
      path:"/book/:id",
      Component:<Book/>
    }
  ]
  const Publicnames = [
    {
      path: '/about',
      Component: <About />
    },
    {
      path: '/',
      Component: <Home />
    },
    {
      path: '/register',
      Component: <Register />
    },
    {
      path: '/login',
      Component: <Login />
    },

  ]
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token !== null && token !== undefined ? (
      children
    ) :
      <>
        <Navigate to='/login' />
        {alert("Login in first to access")}
      </>
  }

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };








  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            {Publicnames.map((route) => (
              <Route path={route.path} element={route.Component} />
            ))}
            {Privatenames.map((route) => (
              <Route path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />
            ))}
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
