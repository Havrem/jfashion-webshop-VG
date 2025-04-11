import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../pages.css";
import styles from "../css/Content.module.css";

const Contact = () => {
  return (
    <div className={styles.mywrap}>
      <Navbar></Navbar>
      <div className="page-container-wrapper">
      <div className="pages-container">
        <h1>Contact</h1>
        <div className="text-container">
          <p className="pages-text">
            Thought you were a gold, but realized silver was yours to wear? Fret not!
            If you need to return any item, you're free to do so <u>within 60 days</u> of receiving
            it.
            Please email us at <b>returns@jfashion.com</b> and let us know:
          </p>
          <ul style={{ listStyle: "none"}}>
              <li>What is the item?</li>
              <li>Who are you? (Name and address)</li>
            </ul>

          <p className="pages-text">
            Just want to say hi? Our customer service team is at <b>hello@jfashion.com</b>.
          </p>
          
          <p className="pages-text">
            Prefer old-school mail? Send it to: <b>JFashion</b>,

            21 Jewel Street,

            SW4 0SB,
     
            London
          </p>
        </div>
      </div>
      <div className={styles.contact}>
          <div className={styles.mask}>
            {/* <h1 className="pages-title">Contact Us</h1> */}
          </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Contact;
