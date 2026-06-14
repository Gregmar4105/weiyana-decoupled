import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { GuestRoute } from './GuestRoute';
import { LoginPage } from '../login/LoginPage';
import { RegisterPage } from '../login/RegisterPage';
import { DashboardPage } from './DashboardPage';
import { SidebarLayout } from '../components/SidebarLayout';
import { Error404 } from './Error404';
import { Error500 } from './Error500';

// Import newly added pages
import { InventoryPage } from './InventoryPage';
import { ReordersPage } from './ReordersPage';
import { RequestOrdersPage } from './RequestOrdersPage';
import { TransfersPage } from './TransfersPage';
import { CategoriesPage } from './CategoriesPage';
import { BrandsPage } from './BrandsPage';
import { SuppliersPage } from './SuppliersPage';
import { QrBarcodesPage } from './QrBarcodesPage';
import { ReportsPage } from './ReportsPage';

export const router = createBrowserRouter([
  // Guest Routes (Only accessible when logged out)
  {
    element: <GuestRoute />,
    errorElement: <Error500 />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  // Protected Routes (Only accessible when logged in)
  {
    element: <ProtectedRoute />,
    errorElement: <Error500 />,
    children: [
      {
        element: <SidebarLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/inventory',
            element: <InventoryPage />,
          },
          {
            path: '/reorders',
            element: <ReordersPage />,
          },
          {
            path: '/request-orders',
            element: <RequestOrdersPage />,
          },
          {
            path: '/transfers',
            element: <TransfersPage />,
          },
          {
            path: '/categories',
            element: <CategoriesPage />,
          },
          {
            path: '/brands',
            element: <BrandsPage />,
          },
          {
            path: '/suppliers',
            element: <SuppliersPage />,
          },
          {
            path: '/qr-barcodes',
            element: <QrBarcodesPage />,
          },
          {
            path: '/reports',
            element: <ReportsPage />,
          },
        ],
      },
    ],
  },
  // Fallback 404 Route
  {
    path: '*',
    element: <Error404 />,
  },
]);

