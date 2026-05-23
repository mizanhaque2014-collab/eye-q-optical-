/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { HelmetProvider } from 'react-helmet-async';

// Real pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Branches from './pages/Branches';
import EyeTesting from './pages/EyeTesting';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'products', element: <Products /> },
      { path: 'branches', element: <Branches /> },
      { path: 'eye-testing', element: <EyeTesting /> },
      { path: 'contact', element: <Contact /> },
      { path: 'appointment', element: <Appointment /> },
    ],
  },
]);

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
