import React from "react";
import {
  IconButton,
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  Button,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import useStyles from "./Styles.js";

const CartItem = ({ item, handleRemoveFromCart, updateQuantity }) => {
  const classes = useStyles();

  const removeHandler = () => {
    handleRemoveFromCart(item.id);
  };
  return (
    <Card>
      <CardMedia className={classes.media} image={item.image.url} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="h6">{item.price.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            type="button"
            size="small"
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            type="button"
            size="small"
          >
            +
          </Button>
        </div>
        <IconButton onClick={removeHandler} aria-label="remove-from-cart">
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
