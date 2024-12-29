import BotttomNavCart from "./components/ui/BottomNavCart";
import Cart from "./components/ui/Cart";
import FilterSection from "./components/ui/FilterSection";
import Footer from "./components/Footer";
import ModalCancelOrder from "./components/ui/ModalCancelOrder";
import ProductContainer from "./components/ui/ProductContainer";
import ScrollToTop from "./components/ui/ScrollToTop";

import { DataProvider } from "./context/dataContext";
import { CartProvider } from "./context/CartContext";
import { CartDataProvider } from "./context/CartDataContext";

function App() {
  return (
    <CartDataProvider>
      <DataProvider>
        <CartProvider>
          <section id="home">
            <div className="frame">
              <ScrollToTop />
              <div className="frame"></div>
              <ModalCancelOrder />
              <FilterSection />

              {/* PRODUCT GOES DOWN HERE */}
              <div>
                <ProductContainer />
              </div>
              <BotttomNavCart />
              <Cart />
            </div>
          </section>
          <Footer />
        </CartProvider>
      </DataProvider>
    </CartDataProvider>
  );
}

export default App;
