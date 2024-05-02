import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Checkout from "./components/chekout";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Speakers1 from "./pages/Speakers1";
import Speakers2 from "./pages/Speakers2";
import Earphones1 from "./pages/Earphones1";
import Headphones1 from "./pages/Headphones1";
import Headphones2 from "./pages/Headphones2";
import Headphones3 from "./pages/Headphones3";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/login");
    }
    AOS.init({ duration: 700 });
    setToken(localStorage.getItem("token"));
  }, []);

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }

    return children;
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
    {/* motion bu kutub xona yani saytda animatsiya boshqa narsalar yaratish uchun ishlatdim*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Home></Home>
                </Layout>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/headphones"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Headphones></Headphones>
                </Layout>
              </ProtectedRoute>
            }
          />
           <Route
            path="/headphones1"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Headphones1></Headphones1>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/headphones2"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Headphones2></Headphones2>
                </Layout>
              </ProtectedRoute>
            }
          />
            <Route
            path="/headphones3"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Headphones3></Headphones3>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/speakers"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Speakers></Speakers>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/speakers1"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Speakers1></Speakers1>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/speakers2"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Speakers2></Speakers2>
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/earphones"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Earphones></Earphones>
                </Layout>
              </ProtectedRoute>
            }
          />
           <Route
            path="/earphones1"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Earphones1></Earphones1>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Checkout></Checkout>
                </Layout>
              </ProtectedRoute>
            }
          />
          <></>
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
