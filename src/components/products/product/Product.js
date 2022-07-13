import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./ProductStyles";

const Product = ({ price, name, description, img, handleAddToCart, id }) => {
  const classes = useStyles();

  const addToCartHandler = () => {
    handleAddToCart(id, 1)
  }

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} src={"/"} image={img} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">{price}</Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton onClick={addToCartHandler} aria-label=" Add to Cart!">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
