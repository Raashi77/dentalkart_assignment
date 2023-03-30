import React from 'react';
import { RowLayout, ScreenContainer, SectionHeadingText, SectionView } from './GlobalStyles';
import { theme } from './theme';
import { FaStar, FaTrash, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

 
import { Grid } from '@mui/material';
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
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  return (

    <Box sx={{ pt: 10, pl: 2,pr:2 }}>
      <Grid container spacing={3}>


        <Grid xs={12} sm={12} lg={7} md={7} item>
          <Stack spacing={1} direction={"row"} sx={{ alignItems: "center", mb: 1 }}>
            <Typography variant='h5' fontWeight={700}> My Cart</Typography>
            <Typography variant='h5' fontWeight={400}>(1 items) </Typography>
          </Stack>
          <Card sx={{ p: 2, background: "transparent" }}>
            <Stack spacing={1}>
              {cartItems.map((row, i) => (

                <Card sx={{ p: 1 }}>
                
                    <Grid container  spacing={2}>
                      <Grid item xs={3} sm={3} lg={3} md={3}>
                        <img src={row.image} height={"100%"} width={"100%"} style={{objectFit:"contain"}} />
                      </Grid>

                      <Grid xs={9} sm={9} lg={9} md={9} item >
                        <Stack width={"100%"}>

                          <Box>
                            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
                              <Box style={{ justifyContent: 'flex-start' }}>
                                <Stack spacing={2}>
                                  <Typography style={{ fontSize: '14px', fontWeight: 700 }}>{row.name}</Typography>
                                  <Typography style={{ fontSize: '14px', fontWeight: 700 }}> {'\u20B9' + row.price}</Typography>

                                  <Stack direction={"row"} sx={{ alignItems: "center" }}>
                                    <Box style={{ backgroundColor: theme.guestColors.guestColor1, margin: 5, borderRadius: 2, paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1 }}>
                                      <Stack spacing={1} direction={"row"} normalRow={false} style={{ justifyContent: 'center', alignItems: "center" }}>
                                        <FaStar color={theme.primaryColor} fontSize={12} />
                                        <Typography fontSize={'12px'} color={theme.primaryColor} style={{ marginLeft: 2 }}>{4.7}</Typography>
                                      </Stack>
                                    </Box>
                                    <Typography fontSize={'12px'} fontWeight={700} color={theme.guestColors.guestColor2}>{"(56.36% off on MRP)"}</Typography>
                                  </Stack>
                                </Stack>
                              </Box>

                              <Box>
                                <Typography fontSize={12} sx={{ textAlign: 'center' }}>Quantity</Typography>
                                <Typography fontSize={isSmallScreen?'50%':"100%"} color={theme.guestColors.guestColor2}>Buy 1 more to get at 115 each</Typography>
                                <Typography fontSize={isSmallScreen?'50%':"100%"} color={theme.guestColors.guestColor2}>Buy 4 more to get at 115 each</Typography>
                                <Typography fontSize={isSmallScreen?'50%':"100%"} color={theme.guestColors.guestColor2}>Buy 9 more to get at 115 each</Typography>
                              </Box>

                            </Stack>
                          </Box>


                          <Divider sx={{ background: "grey", mt: "auto", mb: 1 }} />
                          <Box>
                            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                              <Typography fontSize={'12px'} fontWeight={700} color={theme.guestColors.guestColor1}>Unit Product Weight: 0.2 kg</Typography>
                              <Stack spacing={2} direction="row" sx={{ justifyContent: 'space-between' }}>
                                <Stack spacing={0.5} direction={"row"} sx={{ alignItems: "center" }}>
                                  <FaTrash size={10} color='grey' />
                                  <Typography fontWeight={700} color={theme.tabInactiveColor} fontSize={'12px'}>Remove</Typography>
                                </Stack>
                                <Stack spacing={0.5} direction={"row"} sx={{ alignItems: "center" }}>
                                  <FaHeart size={isSmallScreen?20: 10} color='grey' />
                                  <Typography fontWeight={700} color={theme.tabInactiveColor} fontSize={'12px'}>Add to Wishlist</Typography>
                                </Stack>
                              </Stack>
                            </Stack>

                          </Box>
                        </Stack>
                      </Grid>
                    </Grid>
                  
                </Card>
              ))}
            </Stack>
          </Card>

        </Grid>

        <Grid xs={12} sm={12} lg={5} md={5} item>
          <Stack spacing={2}>
            <Card sx={{ backgroundColor: theme.guestColors.guestColor6, p: 1 }}>

              <Typography sx={{ color: theme.guestColors.guestColor2, fontSize: '14px', fontWeight: 'bold' }}>Free delivery across India on all orders above Rs 2500</Typography>

            </Card>
            <Card sx={{ mt: 1, p: 1 }}>

              <Stack direction={"row"} spacing={1} style={{ alignItems: 'center' }}>
                <FaMapMarkerAlt color={theme.guestColors.guestColor3} fontSize={14} />
                <Typography fontWeight={700} style={{ fontSize: '12px', color: theme.guestColors.guestColor5 }}>Deliver to India</Typography>
              </Stack>


            </Card>
            <Card sx={{ p: 1 }}>

              <Stack direction={"row"} spacing={1} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <BsFillCheckCircleFill color={theme.guestColors.guestColor2} fontSize={14} />
                <Typography style={{ fontSize: '12px' }}>COD and Prepaid available at this pincode</Typography>
              </Stack>

            </Card>
            <Card sx={{ p: 1 }}>

              <Typography fontWeight={700} style={{ fontSize: '12px' }}>Price Details</Typography>
              <Divider sx={{ mt: 1, mb: 1 }} />


              <Stack spacing={0.4}>
                <Stack direction={"row"} style={{ justifyContent: 'space-between' }}>
                  <Typography color={"grey"} fontSize={'12px'}>Total Quantity</Typography>
                  <Typography color={"grey"} fontSize={'12px'}>1</Typography>
                </Stack>
                <Stack direction="row" style={{ justifyContent: 'space-between' }}>
                  <Typography color={"grey"} fontSize={'12px'}>Total Weight</Typography>
                  <Typography color={"grey"} fontSize={'12px'}>0.2kg</Typography>
                </Stack>
                <Stack direction="row" style={{ justifyContent: 'space-between' }}>
                  <Typography color={"grey"} fontSize={'12px'}>Sub Total</Typography>
                  <Typography color={"grey"} fontSize={'12px'}>0.2kg</Typography>
                </Stack>
                <Stack direction="row" style={{ justifyContent: 'space-between' }}>
                  <Typography color={"grey"} fontSize={'12px'}>Delivery Charges (View Details)</Typography>
                  <Typography color={"grey"} fontSize={'12px'}>0.2kg</Typography>
                </Stack>
                <Stack direction="row" style={{ justifyContent: 'space-between' }}>
                  <Typography fontSize={'12px'} color={theme.guestColors.guestColor2}>Total Savings</Typography>
                  <Typography color={"grey"} fontSize={'12px'}>155.00</Typography>
                </Stack>
                <Stack direction="row" style={{ justifyContent: 'space-between', marginTop: 5 }}>
                  <Stack direction="row">
                    <Typography color={"grey"} fontSize={'12px'} style={{ fontWeight: 'bold' }}>Grand Total  </Typography>
                    <Typography color={"grey"} fontSize={'12px'}> (inclusive of all taxes)</Typography>
                  </Stack>
                  <Typography color={"grey"} fontSize={'12px'}>0.2kg</Typography>
                </Stack>
                <Divider sx={{ mt: 1, mb: 1 }} />


                <Button sx={{ p: 1, background: "orange", m: 1, justifyContent: 'center', }}>
                  <Typography color={"white"} fontWeight={700} sx={{ textTransform: "none" }} >Continue to Payment</Typography>
                </Button>
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>


  );
}

export default CartWithItems;
