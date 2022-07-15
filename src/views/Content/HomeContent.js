import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SimCardIcon from "@material-ui/icons/SimCard";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";


import {
  vc_login,
  vc_getUser,
  vc_renewToken,
  vc_logout,
} from "../../vc_services/VC_AuthService";
import { NoEncryption } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    marginTop: "100px",
    fontSize: "16px",
  },
  subtitle: {
    fontSize: "16px",
    textAlign: "left",
    marginTop: "10px",
  },
  centertitle: {
    fontSize: "16px",
    textAlign: "left",
    marginTop: "30px",
    textAlign: "center",
  },
  box: {
    marginLeft: "309px",
  },
  button: {
    marginTop: "15px",
    width: "250px",
    color: "#064DA2b",
    backgroundColor: "#064DA2",
    display: "inline-block",
    fontSize: "1rem",
    height: "50px",
    textTransform: "none",
    borderRadius:"30px"
  },
  futurebankcss: {
    background: "#225ba2",
    color: "white",
    padding: "10px",
    fontFamily: "MerriWeather",
    fontSize: "24px",
    marginLeft: "-400px",
  },
  Avenircss: {
    color: "#224c6b",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "underline",
    fontFamily: "Playfair Display",
    marginLeft: "300px",
  },
  Bhavishyacss: {
    color: "#dc3e36",
    fontSize: "24px",
    marginTop: "10px",
    textDecoration: "underline",
    fontWeight: "bold",
    marginLeft: "100px",
  },
  Tulevikcss: {
    color: "#61b12f",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "underline",
    fontFamily: "Archivo Narrow",
    marginLeft: "300px",
  },
  divstyle: {
    marginLeft: "auto!important",
    marginRight: "auto!important",
    position: "relative",
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
  },
}));

function ContentComponent() {
  const classes = useStyles();

  const handleVC_SignIn = () => {
    vc_login();
  };


  return (
    <div className={classes.root} style={{marginTop: '100px'}}>
      <br/>
      <br/>
      <br/>
      <br/>

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleVC_SignIn}
      >
        Verify Credentials
      </Button>

     
        
     
      {/* <Typography className={classes.title}>
        Apply for a Sim card online
      </Typography>
      <Box color="text.primary" className={classes.box}>
        <br></br>
        <Typography className={classes.subtitle}>
          We have gone paperless. So you can !
        </Typography>
        <Typography className={classes.subtitle}>
          Apply through <b>Relationship Credential</b> issued by your bank and
          get the SIM card delievered at your <b>home</b> !
        </Typography>
        <Typography className={classes.subtitle}>
          Access your bank application for issuance for{" "}
          <b>Relationship Credential.</b>
        </Typography>
        <Typography className={classes.subtitle}>
          Apply for Sim card only through your bank issued{" "}
          <b>Relationship Credential </b> by scanning the QR code below.
        </Typography>
      </Box> */}
        
      {/* <iframe 
       class="responsive-iframe" 
       width="100%" 
       height="800px" 
       frameBorder="0" 
       scrolling="none" 
       src="https://vcauth.azurefd.net/vc/connect/authorize?pres_req_conf_id=wipro-access&client_id=wipro-client&redirect_uri=https%3A%2F%2Fwiproaccess.azurewebsites.net%2Fsignin-callback.html&response_type=code&scope=openid%20profile%20vc_authn&state=5a7bb8a1b8da4061bd41c1bbca9cc0f4&code_challenge=cKbedFKsNVxdtuGITsckqmKB-QxqExTZdww2RsMflTg&code_challenge_method=S256&display=popup&response_mode=query"> 
      </iframe> */}
      
      {/* <Typography className={classes.centertitle}>
        FutureCom accepts digital <b>Relationship Credentials </b>from the
        following banks for the instant verification and issuance of SIM cards
    </Typography>
      <br></br>
      <br></br>
      <Link
        className={classes.futurebankcss}
        href="https://futurebank.azurewebsites.net/cs"
      >
        Future Bank
      </Link>
      <Link className={classes.Avenircss}>Avenir</Link>
      <br></br> <br></br>
      <Link className={classes.Bhavishyacss}>Bhavishya</Link>
      <Link className={classes.Tulevikcss}>Tulevik</Link>
      <p>env url from .env file is : {process.env.REACT_APP_ARIES_IP}</p>
      <p>env port from .env file is : {process.env.REACT_APP_ARIES_PORT}</p>
      <p>
        variable value from Azure config file is :
        {process.env.REACT_APP_MY_NEW_KEY}
      </p> */}
    
    </div>
  );
}
export default ContentComponent;
