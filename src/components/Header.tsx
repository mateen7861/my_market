import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  IconButton,
  Badge,
  createMuiTheme,
  ThemeProvider,
  withStyles,
  Drawer,
} from "@material-ui/core";
import styles from "./Header.module.css";
const Header = () => {
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

  return (
    <ThemeProvider theme={innerTheme}>
      <header className={styles.header}>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon className={styles.header__icon} style={{ fontSize: 30 }} />
        </IconButton>
        <IconButton>
          <StyledBadge showZero badgeContent={0} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </header>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div>
          <div>
            <h1
              style={{
                color: "grey",
                textAlign: "center",
                margin: 2 + "rem",
              }}
            >
              My <span style={{ color: "orange" }}>Market</span>
            </h1>
            <hr />
            <h3
              style={{
                color: "grey",
                textAlign: "center",
                margin: "1rem",
              }}
            >
              Search
            </h3>
            <hr />
            <h3
              style={{
                color: "grey",
                textAlign: "center",
                margin: "1rem",
              }}
            >
              Cart
            </h3>
            <hr />
            <h3
              style={{
                color: "grey",
                textAlign: "center",
                margin: "1rem",
              }}
            >
              Profile
            </h3>
            <hr />
          </div>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default Header;
