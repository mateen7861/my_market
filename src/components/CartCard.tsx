import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { REMOVE } from "../store/cartSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      maxWidth: 700,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

export default function ComplexGrid({
  title,
  id,
  price,
  brand,
  imageUrl,
  storage,
}: any) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const remove_from_cart = () => {
    dispatch(
      REMOVE({
        id,
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  By {brand}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {title}{" "}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {storage}
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={remove_from_cart} variant="contained">
                  Remove
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography style={{ color: "orange" }} variant="h6">
                ${price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
