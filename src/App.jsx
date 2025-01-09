import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
const App = () => {
  return (
    <div className="">
      <HelmetProvider>
        <Helmet>
          <title>Star Global - Công ty Thiết kế Website</title>
          <meta
            name="description"
            content="Giải pháp trang web cao cấp dành cho chủ doanh nghiệp
muốn vượt lên trước đối thủ cạnh tranh."
          />
          <meta name="keywords" content="react, seo, website" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
};
export default App;
