import React from "react";
import styles from "./Profile.module.css";
import { Avatar, makeStyles, createStyles, Theme } from "@material-ui/core";
import Pic from "./mateen.jpg";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import RoomIcon from "@material-ui/icons/Room";
const Profile = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        "& > *": {
          margin: theme.spacing(1),
        },
      },

      large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
    })
  );
  const classes = useStyles();

  return (
    <div style={{ height: "100vh" }}>
      <div className={styles.profile__top__background}>
        <Avatar className={classes.large} alt="Trevor Henderson" src={Pic} />
      </div>
      <div className={styles.profile__detail_el}>
        <PersonRoundedIcon style={{ color: "orange" }} />
        <p>Mateen Mustafa</p>
      </div>

      <div className={styles.profile__detail_el}>
        <EmailRoundedIcon style={{ color: "orange" }} />
        <p>mateenworld7861@gmail.com</p>
      </div>
      <div className={styles.profile__detail_el}>
        <PhoneRoundedIcon style={{ color: "orange" }} />
        <p>+92 320 3685996</p>
      </div>
      <div className={styles.profile__detail_el}>
        <FacebookIcon style={{ color: "orange" }} />
        <p>Mateen Mustafa</p>
      </div>
      <div className={styles.profile__detail_el}>
        <InstagramIcon style={{ color: "orange" }} />
        <p>@blastermateen</p>
      </div>
      <div className={styles.profile__detail_el}>
        <RoomIcon style={{ color: "orange" }} />
        <p>Chaprar Khas,Sialkot</p>
      </div>
    </div>
  );
};

export default Profile;
