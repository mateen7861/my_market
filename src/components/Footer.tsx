import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Footer.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    color: "black",
    borderRadius: "1.5rem 1.5rem 0 0",
    bottom: "0",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeRoundedIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchRoundedIcon />}
        component={Link}
        to="/search"
      />
      <BottomNavigationAction
        label="Cart"
        icon={<ShoppingCartIcon />}
        component={Link}
        to="/cart"
      />
      <BottomNavigationAction
        label="Me"
        icon={<PersonRoundedIcon />}
        component={Link}
        to="/me"
      />
    </BottomNavigation>
  );
}
