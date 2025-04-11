import { useState } from 'react';
import styles from '../../css/Cart.module.css';
import { useCart } from '../../hooks/useCart';
import Card from './Card';

const Cart = () => {
    const { items, clear, sum } = useCart();

    const handleClear = () => {
        clear();
    }

    return (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Shoppingbag</h1>

          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <Card item={item} key={item.id} />
              ))}
              <div className={styles.bottom}>
                <button className={styles.emptyBtn} onClick={handleClear}>
                    Empty bag
                </button>
                <p>Total sum: {sum()}</p>
              </div>
            </>
          ) : (
            <div>Empty.</div>
          )}
        </div>
      );
    };

export default Cart;