import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyles from "./Styles";

const Products = ({ products }) => {
  const classes = useStyles();

  if (products.length === 0) {
    return null;
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.data.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}
           price={product.price.formatted}
           name={product.name} 
           description={product.description}
           img={product.image.url} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
