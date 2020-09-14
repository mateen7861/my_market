import React, { FC, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import {
  IconButton,
  Badge,
  createMuiTheme,
  ThemeProvider,
  withStyles,
  Drawer,
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import styles from "./Header.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header: FC = () => {
  const navigate = useNavigate();
  const innerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: "#FFA500	",
      },
    },
  });
  const StyledBadge = withStyles((theme) => ({
    badge: {
      color: "white",
    },
  }))(Badge);
  const [open, setOpen] = useState<boolean>(false);
  const cart: number = useSelector((state: any) => {
    return state.cart.cart.length;
  });
  return (
    <ThemeProvider theme={innerTheme}>
      <header className={styles.header}>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon className={styles.header__icon} style={{ fontSize: 30 }} />
        </IconButton>
        <IconButton onClick={() => navigate("/cart")}>
          <StyledBadge showZero badgeContent={cart} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </header>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <h1
          style={{
            color: "#242424",
            textAlign: "center",
            margin: 2 + "rem",
          }}
        >
          My <span style={{ color: "orange" }}>Market</span>
        </h1>
        <hr />
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className={styles.drawer__element}
            onClick={() => setOpen(false)}
          >
            <HomeRoundedIcon style={{ color: "orange" }} />
            <h3 style={{ color: "grey" }}>Home</h3>
          </div>
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <div
            className={styles.drawer__element}
            onClick={() => setOpen(false)}
          >
            <SearchRoundedIcon style={{ color: "orange" }} />
            <h3 style={{ color: "grey" }}>Search</h3>
          </div>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div
            className={styles.drawer__element}
            onClick={() => setOpen(false)}
          >
            <ShoppingCartIcon style={{ color: "orange" }} />
            <h3 style={{ color: "grey" }}>Cart</h3>
          </div>
        </Link>
        <Link to="/me" style={{ textDecoration: "none" }}>
          <div
            className={styles.drawer__element}
            onClick={() => setOpen(false)}
          >
            <PersonRoundedIcon style={{ color: "orange" }} />
            <h3 style={{ color: "grey" }}>Profile</h3>
          </div>
        </Link>
      </Drawer>
    </ThemeProvider>
  );
};

export default Header;
