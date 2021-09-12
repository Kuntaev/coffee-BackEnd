import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from  "@material-ui/icons/Telegram"
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from "react-router-dom"
import LocalMallIcon from '@material-ui/icons/LocalMall';


const useStyles = makeStyles({
  box: {
<<<<<<< HEAD
    backgroundColor: "grey",
    height: 80
=======
    backgroundColor: "black",
>>>>>>> main
  },
  flex: {
    display: "flex"
  },
  shrift: {
    color: 'white',
    fontSize: 20,
    textDecoration: 'none'
  },
  icons: {
    fontSize: 40,
    color: "wheat",
    "&:hover": {
      color: "red",

    },
  },
<<<<<<< HEAD
  pust: {
    marginTop: 10
  }
=======
  logo:{
    width:65,
    fontcolor: 'white'
  },
>>>>>>> main
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
<<<<<<< HEAD
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <div><Link className={classes.shrift}>О нас</Link></div>
            <div><Link className={classes.shrift}>Поддержка</Link></div>
          </Grid>
          <Grid item xs={4} className={classes.shrift}>
            <div><Link className={classes.shrift}>Доставка</Link></div>
            <div><Link className={classes.shrift}>Самовызов</Link></div>
=======
      <Container className={classes.main} >
        <Grid container className={classes.container}>
          <Grid item xs={3}>
            <div className={classes.shrift}>CAFFEE ©2021</div>
          </Grid>
          <Grid item xs={3} className={classes.shrift}>
            <img src="https://i.postimg.cc/wTrmVRGZ/Pngtree-hand-painted-brown-coffee-cup-3400766.png" className={classes.logo}/>
>>>>>>> main
          </Grid>
          <Grid item  xs={4}/>
          <Grid item xs={2} spacing="flex-end" >
            <div className={classes.pust}></div>
            <Grid container>
              <div><Link href="https://www.instagram.com/myxammad.13/" target="_blank" >{<InstagramIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://www.facebook.com/coffee" target="_blank" className={classes.shrift}>{<FacebookIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://web.telegram.org/z/#-1154410942" target="_blank" className={classes.shrift}>{<TelegramIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://www.youtube.com/user/nescaferu" target="_blank" className={classes.shrift}>{<YouTubeIcon className={classes.icons}/>}</Link></div>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;