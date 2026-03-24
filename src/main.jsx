import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Layout & Pages
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Shopping from './components/Shopping/Shopping.jsx'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import Cart from './components/Cart/Cart.jsx'
import Success from './components/Success/Success.jsx'
import LoginPage from './components/LoginPage/LoginPage.jsx'
import Register from './components/Register/Register.jsx'

// Context Providers
import { CartProvider } from './components/Context/CartContext.jsx'
import { AuthProvider } from './components/Context/AuthContext.jsx'

// const router = createBrowserRouter([
//   { path: '/', element: <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       },
//     ]
//    },
// ])

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='user/:id' element={<User />} />
          <Route path='shopping' element={<Shopping />} />
          <Route path='product/:id' element={<ProductDetail />} />
          <Route path='cart' element={<Cart />} />
          <Route path='success' element={<Success />} />
          <Route path='loginpage' element={<LoginPage />} />
          <Route path='register' element={<Register />} />
        </Route>
      )
    )

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
