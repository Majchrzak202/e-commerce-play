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
import { useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation()

  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.img}
            />
            Outstanding E-shop!
          </Typography>

          <div className={classes.grow} />
          {location.pathname === '/' && 
          <div className={classes.button}>
            <Link to="/cart"> </Link>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="show cart"
              color="inherit"
            >
              <Badge
                overlap="rectangular"
                badgeContent={totalItems}
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> }
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
