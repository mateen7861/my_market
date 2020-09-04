import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Footer.css";

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
      <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchRoundedIcon />} />
      <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction label="Me" icon={<PersonRoundedIcon />} />
    </BottomNavigation>
  );
}
