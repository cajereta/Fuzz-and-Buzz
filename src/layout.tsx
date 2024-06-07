import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "./components/header/Header";
import { motion } from "framer-motion";
import { Footer } from "./components/footer/Footer";

export const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <main>
        <motion.div
          key={pathname}
          initial={{ opacity: 0.6, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ScrollRestoration />
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </>
  );
};
