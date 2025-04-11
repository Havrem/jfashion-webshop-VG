import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from '../css/Checkout.module.css'

const Checkout = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.content}>
                <Cart/>
            </div>
            <Footer/>
        </div>
    );
}

export default Checkout;