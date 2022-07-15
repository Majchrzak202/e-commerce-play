import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, emptyCart, handleRemoveFromCart, updateQuantity }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="h5">Your Cart is Empty, start adding some!</Typography>
  );

  if (!cart.line_items) return "Loading";

  const FilledCart = () => (
    <>
      <Grid container spacing={5}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              handleRemoveFromCart={handleRemoveFromCart}
              item={item}
              key={item.id}
              updateQuantity={updateQuantity}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            onClick={emptyCart}
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Card
          </Button>
          <Button
            component={Link}
            to='/checkout'
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography gutterBottom variant="h4">
        Your shoping Cart:
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
