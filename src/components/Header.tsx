import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton, Badge } from "@material-ui/core";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <IconButton>
        <MenuIcon className={styles.header__icon} style={{ fontSize: 30 }} />
      </IconButton>
      <IconButton>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon
            className={styles.header__icon}
            style={{ fontSize: 30 }}
          />
        </Badge>
      </IconButton>
    </header>
  );
};

export default Header;
