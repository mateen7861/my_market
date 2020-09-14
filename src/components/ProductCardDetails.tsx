import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Smartphone, Smartphones } from "./Products";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100vw",
  },
  image: {
    width: "100%",
    objectFit: "contain",
    [theme.breakpoints.up("sm")]: {
      height: "60vh",
    },
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  price: {
    color: "orange",
    fontWeight: "bolder",
  },
  cartbtn: {
    backgroundColor: "orange !important",
    color: "white",
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
  const { title } = useParams();
  const [data, setData] = useState<Smartphone[]>();
  useEffect(() => {
    const tempData: Smartphone[] = Smartphones.filter((Smartphone) => {
      return Smartphone.id === Number(title);
    });
    setData(tempData);
  }, [title]);

  return (
    <div className={classes.root}>
      {data?.map((v: Smartphone) => (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={v.imageUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    By {v.brand}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {v.title}{" "}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {v.storage}
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textSecondary">
                    {v.description}
                  </Typography>
                  <List
                    component="nav"
                    className={classes.root}
                    aria-label="mailbox folders"
                  >
                    <ListItem button>
                      <ListItemText>Ram : {v.ram}</ListItemText>
                    </ListItem>
                    <Divider light />
                    <ListItem button divider>
                      <ListItemText>Colors : {v.color}</ListItemText>
                    </ListItem>

                    <Divider light />
                    <ListItem button divider>
                      <ListItemText>Camera : {v.camera}</ListItemText>
                    </ListItem>

                    <Divider light />
                    <ListItem button divider>
                      <ListItemText>Battery : {v.battery}</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <Button
                    size="large"
                    variant="contained"
                    className={classes.cartbtn}
                  >
                    Add To Cart
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h5" className={classes.price}>
                  {v.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <br />
      <br />
      <br />
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Smartphones } from "./Products";
// import styles from "./ProductCardDetails.module.css";
// import { Grid } from "@material-ui/core";
// const ProductCardDetails = () => {
//   const { title } = useParams();
//   const [data, setData]: any = useState();
//   useEffect(() => {
//     const tempData = Smartphones.filter((Smartphone) => {
//       return Smartphone.id === Number(title);
//     });
//     setData(tempData);
//   }, [title]);

//   return (
//     <>
//       {data?.map((v: any) => (
//         <div>
//           <Grid container direction="column">
//             <Grid sm={4} xs={12} item>
//               <img
//                 src={v.imageUrl}
//                 style={{ width: "100%", height: "60vh", objectFit: "contain" }}
//                 alt=""
//               />
//             </Grid>
//           </Grid>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ProductCardDetails;
