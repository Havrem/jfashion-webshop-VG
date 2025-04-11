import styles from '../../css/Cart.module.css';
import trash from '../../assets/trash.svg';
import addIcon from '../../assets/plus.svg';
import subtractIcon from '../../assets/dash.svg';
import { useCart } from '../../hooks/useCart';
import AutoCropImage from '../AutoCropImage';

const Card = ({item}) => {
    const { add, subtract, remove } = useCart();

    const handleAdd = () => {
        add(item);
    }

    const handleSubtract = () => {
        subtract(item);
    }

    const handleRemove = () => {
        remove(item);
    }

    return (
        <div className={styles.card}>
            <div className={styles.thumbnailContainer}>
                <AutoCropImage
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className={styles.thumbnail}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.top}>
                    <div className={styles.text}>
                        <p>{item.brand}</p>
                        <p >{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                    <button className={styles.trashBtn} onClick={handleRemove}>
                        <img src={trash}/>
                    </button>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.edit}>
                        <button onClick={handleSubtract}>
                            <img src={subtractIcon} className={styles.subtract}/>
                        </button>
                        <button onClick={handleAdd}>
                            <img src={addIcon} className={styles.add}/>
                        </button>
                    </div>
                    <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;