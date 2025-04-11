import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []);

    const add = product => {
        const match = items.find(i => i.id == product.id);

        if (match) {
            setItems(
                items.map(item => 
                    item.id == product.id 
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            );
        } else {
            setItems (
                [...items, {...product, quantity: 1}]
            );
        }
    }

    const subtract = product => {
        const match = items.find(i => i.id == product.id);

        if (match) {
            if (match.quantity > 1) {
                setItems(
                    items.map(item => 
                        item.id == product.id 
                            ? {...item, quantity: item.quantity - 1}
                            : item
                    )
                );
            } else {
                setItems(
                    items.filter(item => item.id != product.id)
                );
            }
        }
    }

    const remove = product => {
        setItems(
            items.filter(item => item.id != product.id)
        );
    }

    const clear = () => {
        setItems([]);
    }

    const sum = () => {
        return items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <CartContext.Provider
            value={{
                items,
                add,
                subtract,
                remove,
                clear,
                sum
            }}
        >
            {children}
        </CartContext.Provider>
    );
}