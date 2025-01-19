import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

// Before Lazy Loading
// dist/index.html                   0.48 kB │ gzip:   0.31 kB
// dist/assets/index-99664037.css   30.24 kB │ gzip:   5.06 kB
// dist/assets/index-4ae31545.js   509.28 kB │ gzip: 148.87 kB

// After Lazy Loading
// dist/index.html                           0.48 kB │ gzip:   0.31 kB  
// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB  
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB  
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB  
// dist/assets/Homepage-b9276e6f.css         0.51 kB │ gzip:   0.30 kB  
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB  
// dist/assets/AppLayout-9b07c78d.css        1.91 kB │ gzip:   0.70 kB  
// dist/assets/index-b155e48e.css           26.58 kB │ gzip:   4.38 kB  
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-696ac7da.js      0.15 kB │ gzip:   0.15 kB  
// dist/assets/Logo-2c324b03.js              0.21 kB │ gzip:   0.19 kB  
//  kB │ gzip:   0.48 kB
// dist/assets/Login-bfe88afb.js             1.03 kB │ gzip:   0.54 kB  
// dist/assets/AppLayout-ca91be64.js       157.06 kB │ gzip:  46.25 kB  
// dist/assets/index-4dbaca90.js           350.65 kB │ gzip: 102.10 kB 


export default function App() {

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}
