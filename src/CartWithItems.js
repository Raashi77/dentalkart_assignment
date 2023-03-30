import React from 'react';
import { BoldDarkColoredText, Card, FadedText, DarkColoredText, RowLayout, ScreenContainer, SectionHeadingText, SectionView } from './GlobalStyles';
import { theme } from './theme';
import { FaStar,FaTrash,FaHeart,FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardHeader
} from 'mdb-react-ui-kit';
function CartWithItems({ setCartItems, cartItems, addProductToCart, removeProductFromCart, deleteItemsFromCart }) {
  const handleAddProduct = (product) => {
    addProductToCart(product);
  };

  const handleRemoveProduct = (productId) => {
    removeProductFromCart(productId);
  };

  const handleDeleteItems = () => {
    deleteItemsFromCart();
  };

  const handleQuantityChange = (event, product) => {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          item.quantity = quantity;
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
      <MDBCard>
        <MDBCardBody>
          <RowLayout>
            <div>
          {cartItems.map((row,i)=>(
                <MDBCard>
                  <MDBCardBody>
                    <RowLayout>
                      <RowLayout>
                        <img src={row.image} height={150} width={150}/>
                        <div style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                          <div style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                            <MDBCardText style={{fontSize: '14px', fontWeight: '650'}}>{row.name}</MDBCardText>
                            <MDBCardText style={{fontSize: '14px', fontWeight: '650'}}> {'\u20B9'+row.price}</MDBCardText>
                            <RowLayout>
                              <div style={{backgroundColor: theme.guestColors.guestColor1, padding:3, margin: 5}}>
                                <RowLayout normalRow={false} style={{justifyContent: 'center'}}>
                                  <FaStar color={theme.primaryColor} size={14}/>
                                  <DarkColoredText size={'12px'} color={theme.primaryColor} style={{marginLeft: 2}}>{4.7}</DarkColoredText>
                                </RowLayout>
                              </div>
                              <DarkColoredText size={'12px'} color={theme.guestColors.guestColor2}>{"(56.36% off on MRP)"}</DarkColoredText>
                            </RowLayout>
                          </div>
                          <DarkColoredText size={'12px'} color={theme.guestColors.guestColor1}>Unit Product Weight: 0.2 kg</DarkColoredText>
                        </div>
                      </RowLayout>
                      <div style={{margin: 10, flexDirection: 'column', justifyContent: 'space-between'}}>
                          <div>
                            <DarkColoredText>Quantity</DarkColoredText>
                            <DarkColoredText size={'12px'} color={theme.guestColors.guestColor2}>Buy 1 more to get at 115 each</DarkColoredText>
                            <DarkColoredText size={'12px'} color={theme.guestColors.guestColor2}>Buy 4 more to get at 115 each</DarkColoredText>
                            <DarkColoredText size={'12px'} color={theme.guestColors.guestColor2}>Buy 9 more to get at 115 each</DarkColoredText>
                          </div>
                          <RowLayout style={{justifyContent: 'space-between'}}>
                            <RowLayout>
                              <FaTrash/>
                              <DarkColoredText color={theme.tabInactiveColor} size={'12px'}>Remove</DarkColoredText>
                            </RowLayout>
                            <RowLayout>
                              <FaHeart/>
                              <DarkColoredText color={theme.tabInactiveColor} size={'12px'}>Add to Wishlist</DarkColoredText>
                            </RowLayout>
                          </RowLayout>
                      </div>
                    </RowLayout>
                  </MDBCardBody>
                </MDBCard>
              ))}
              </div>
              <div style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <MDBCard style={{backgroundColor: theme.guestColors.guestColor6}}>
                  <MDBCardHeader>
                      <MDBCardTitle style={{color: theme.guestColors.guestColor2, fontSize:'14px', fontWeight:'bold'}}>Free delivery across India on all orders above Rs 2500</MDBCardTitle>
                  </MDBCardHeader>
                </MDBCard>
                <MDBCard style={{marginTop: 5}}>
                  <MDBCardHeader>
                    <RowLayout style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                      <FaMapMarkerAlt color={theme.guestColors.guestColor3} size={14}/>
                      <MDBCardTitle style={{ fontSize:'12px', color: theme.guestColors.guestColor5, marginLeft: 5}}>Deliver to India</MDBCardTitle>
                    </RowLayout>
                    
                  </MDBCardHeader>
                </MDBCard>
                <MDBCard style={{marginTop: 5}}>
                  <MDBCardHeader>
                    <RowLayout style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                      <BsFillCheckCircleFill color={theme.guestColors.guestColor2} size={14}/>
                      <MDBCardTitle style={{ fontSize:'12px',marginTop: 7}}>COD and Prepaid available at this pincode</MDBCardTitle>
                    </RowLayout>
                  </MDBCardHeader>
                </MDBCard>
                <MDBCard style={{marginTop: 5}}>
                  <MDBCardHeader>
                    <MDBCardTitle style={{ fontSize:'12px'}}>Price Details</MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <RowLayout style={{justifyContent: 'space-between'}}>
                      <FadedText size={'12px'}>Total Quantity</FadedText>
                      <FadedText size={'12px'}>1</FadedText>
                    </RowLayout>
                    <RowLayout style={{justifyContent: 'space-between'}}>
                      <FadedText size={'12px'}>Total Weight</FadedText>
                      <FadedText size={'12px'}>0.2kg</FadedText>
                    </RowLayout>
                    <RowLayout style={{justifyContent: 'space-between'}}>
                      <FadedText size={'12px'}>Sub Total</FadedText>
                      <FadedText size={'12px'}>0.2kg</FadedText>
                    </RowLayout>
                    <RowLayout style={{justifyContent: 'space-between'}}>
                      <FadedText size={'12px'}>Delivery Charges (View Details)</FadedText>
                      <FadedText size={'12px'}>0.2kg</FadedText>
                    </RowLayout>
                    <RowLayout style={{justifyContent: 'space-between'}}>
                      <FadedText size={'12px'} color={theme.guestColors.guestColor2}>Total Savings</FadedText>
                      <FadedText size={'12px'}>155.00</FadedText>
                    </RowLayout>
                    <RowLayout style={{justifyContent: 'space-between',marginTop: 5}}>
                      <RowLayout>
                        <FadedText size={'12px'} style={{fontWeight: 'bold'}}>Grand Total  </FadedText>
                        <FadedText size={'12px'}> (inclusive of all taxes)</FadedText>
                      </RowLayout>
                      <FadedText size={'12px'}>0.2kg</FadedText>
                    </RowLayout>
                    <div style={{margin: 10, padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                      <DarkColoredText>Continue to Payment</DarkColoredText>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
              
              </RowLayout>
        </MDBCardBody>
      </MDBCard>                 
  );
}

export default CartWithItems;
