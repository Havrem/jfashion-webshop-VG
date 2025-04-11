import { useState } from "react";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from '../css/Checkout.module.css'
import OrderModal from "../components/OrderModal";
import { useCart } from "../hooks/useCart";

const Checkout = () => {
      const [showModal, setShowModal] = useState(false);
      const [showConfirmation, setShowConfirmation] = useState(false);

      const { items } = useCart();

    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.content}>
                <Cart/>
                    {showModal && (
                        <OrderModal
                            // product={product}
                            onClose={() => {
                            setShowModal(false);
                            setShowConfirmation(false);
                            }}
                            showConfirmation={showConfirmation}
                            setShowConfirmation={setShowConfirmation}
                        />
                    )}
                {items.length > 0 && (
                <button className={styles.buyBtn} onClick={() => setShowModal(true)}>
                    Checkout
                </button>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default Checkout;