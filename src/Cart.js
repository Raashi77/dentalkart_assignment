import React, { useState, useCallback } from 'react';
import EmptyCart from './EmptyCart';
import CartWithItems from './CartWithItems';
import { productImages } from './config';

function Cart() {
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: 'Ceramic Bracket Kit MBT 0.22',
        description: 'Ceramic Brackets',
        price: 250,
        image: productImages.product1,
      },
      {
        id: 2,
        name: 'Bomedent Green Plum Apex Locator',
        description: '5th generation modern apex locator',
        price: 5995,
        image: productImages.product2,
      },
      {
        id: 3,
        name: 'Russia Tor Vm Sectional Contoured Matrices Kits',
        description: 'Sectional Contoured Matrix Bands with Rings',
        price: 1500,
        image: productImages.product3,
      },
    ]);

  const addProductToCart = useCallback(
    (product) => {
      const itemIndex = cartItems.findIndex((item) => item.id === product.id);
      if (itemIndex === -1) {
        setCartItems([...cartItems, { ...product }]);
      } else {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      }
    },
    [cartItems]
  );

  const removeProductFromCart = useCallback(
    (productId) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCartItems);
    },
    [cartItems]
  );

  const deleteItemsFromCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return (
    <div>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartWithItems
          cartItems={cartItems}
          setCartItems={setCartItems}
          addProductToCart={addProductToCart}
          removeProductFromCart={removeProductFromCart}
          deleteItemsFromCart={deleteItemsFromCart}
        />
      )}
    </div>
  );
}

export default Cart;
