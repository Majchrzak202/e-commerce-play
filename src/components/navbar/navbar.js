import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../assets/logo.jpg";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title} color="inherit">
          <Link style={{textDecoration: 'none'}} to='/'>
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.img}
            />
            Outstanding E-shop!
            </Link>
          </Typography>
          
          <div className={classes.grow} />
          <div className={classes.button}>
            <Link to='/cart'>
            <IconButton  aria-label="show cart" color="inherit">
              <Badge overlap="rectangular" badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
