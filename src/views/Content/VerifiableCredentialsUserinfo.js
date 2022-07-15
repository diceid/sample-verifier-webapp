import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SimCardIcon from "@material-ui/icons/SimCard";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";
import {
  vc_login,
  vc_getUser,
  vc_renewToken,
  vc_logout,
} from "../../vc_services/VC_AuthService";
import { NoEncryption, SettingsCellOutlined } from "@material-ui/icons";
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
    marginTop: "150px",
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

function VerifiableCredentialsUserInfo() {
  const classes = useStyles();
  const [userName, setUserName] = React.useState("");
  const [userAddress, setUserAddress] = React.useState("");
  const [userData, setUserdata] = React.useState("");
  const [count, setCount] = React.useState(0);
  const counterIteration = 25;



  let userInformation = {
    userName: "dummy user",
    userAddress: "turkey",
  };

  const handleCloseSession = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location = "/";
  };

  let counter = 0;
  const updateState = (value) => setCount(value);

  useEffect(() => {
    //get_vc_userinfo();
    const timer = setInterval(() => {
      
      if(counter < counterIteration) {
        counter = counter + 1;
        updateState(counter);
      } else {        
        clearInterval(timer);
        handleCloseSession();
      }  
      
    }, 1000);
    getUserDataFromToken(sessionStorage.getItem("key"));
    return () => clearInterval(timer);
  }, []);

  const getUserData = () => {
    const logininfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(logininfo);
    setUserName(logininfo.userName);
    setUserAddress(logininfo.userAddress);
  };

  const getUserDataFromToken = (token) =>{
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const userdata = JSON.parse(jsonPayload);
    setUserdata(userdata)
  }

  const get_vc_userinfo = () => {
    vc_getUser().then((user) => {
      if (user) {
        console.log("User has been successfully loaded from store.");
        //setLoggedinUser(user.profile.email);

        console.log(user);
        userInformation.userName = user.profile.CustomerName;
        userInformation.userAddress = user.profile.PostalAddress;
        localStorage.setItem("userInfo", JSON.stringify(userInformation));
        getUserData();
      } else {
        console.log("dummy data");
        localStorage.setItem("userInfo", JSON.stringify(userInformation));
        getUserData();
      }
    });
  };

  return (
    <div className={classes.root}>
      <Box color="text.primary" className={classes.box}>
        <br></br>

        {/*<Typography className={classes.subtitle}>
          Hello <b>{userData.Employee_Name}</b>, Relationship credentials Received and
          verified!. SIM will be delivered at your postal address :{" "}
          <b> {userAddress} </b>
        </Typography>
        <Divider /> 
        <Typography className={classes.subtitle}>
          You can close your session.
        </Typography>*/}

        <Typography className={classes.subtitle}>
        Welcome <b>{userData.Name}</b>!! Your credentials have been verified successfully.<br/>
        You are allowed to Wipro premises.
        </Typography>

        <br/>

        <Typography className={classes.subtitle}>
         {`You will be redirected to new QR code within ${counterIteration - count} seconds.`}
        </Typography>

        
      </Box>
      
      

      

     
      <br></br>
      <br></br>


      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleCloseSession}
      >
        Present Credentials
      </Button>

      {/*<Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleCloseSession}
      >
        Close Session
      </Button>
     <Typography className={classes.centertitle}>
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
      <Link className={classes.Tulevikcss}>Tulevik</Link>*/}
    </div>
  );
}
export default VerifiableCredentialsUserInfo;
