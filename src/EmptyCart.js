import React from 'react';

function EmptyCart() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src="https://via.placeholder.com/150" alt="Empty Cart" style={{ margin: '2rem' }} />
      <h2>Your cart is empty</h2>
      <p style={{ fontSize: '1.2rem' }}>Looks like you haven't added any items to your cart yet.</p>
    </div>
  );
}

export default EmptyCart;
