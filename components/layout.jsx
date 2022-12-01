import BackgroundGradient from "./backgroundGradient";
import CustomCursor from "./cursor/customCursor";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;