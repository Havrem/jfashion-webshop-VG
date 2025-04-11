import { Link } from "react-router-dom";
import styles from "../css/Frontpage.module.css";
import bag from "../assets/bag.svg";

const Navbar = () => {
    return (
        <nav className={styles.mynav}>
          <p className ={styles.navlogo}> JFASHION </p>
            <ul className={styles.categories}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/checkout"><img src={bag}/></Link></li>
                </ul>
            
      </nav>
    );
} 
export default Navbar;