import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

const PRODUCTS = [
  {
    id: 1,
    name: "Shoes",
    description: "Fancy shoes for everyone",
    price: 22.99,
    img: "https://rukminim1.flixcart.com/image/459/551/kq6yefk0/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq.jpeg?q=50",
  },
  {
    id: 2,
    name: "Sweter",
    description: "Zajebioza sweterek",
    price: 10.99,
    img: "https://photos05.redcart.pl/templates/images/description/23020/Image/landing_pages/black_week/2021/products/dev-macbook-pro-16-inch.png",
  },
  {
    id: 3,
    name: "Macbook",
    description: "Thats a MacBook , no need to say more",
    price: 799.99,
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {PRODUCTS.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              img={product.img}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
