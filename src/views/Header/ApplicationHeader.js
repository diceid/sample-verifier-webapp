import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SimCardIcon from "@material-ui/icons/SimCard";

import Logo from "../Header/wipro-new-logo.png";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    backgroundColor: "#064DA2",
    color: "064DA2",
    // color: "green",
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: "-1px",
    marginLeft: "-25px",
    marginRight: "-25px",
    fontStyle: "normal",
    fontWeight: "bold",
    padding: "10px 30px",
    paddingBottom: "0px"
    
  },
  subtitle: {
    flexGrow: 1,
    backgroundColor: "#064DA2",
    color: "064DA2",
    // color: "red",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: "-16px",
    fontStyle: "normal",
    padding: "15px 30px",
    paddingTop: "1px"
    
    
  },
  appbarcss: {
    backgroundColor: "#58aaca",
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    padding: "2px",
  },
}));

function HeaderComponent() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root} >
      <AppBar style={{ height: '81px', backgroundColor: 'white'}} position="static">
        <Toolbar style={{ height: '100%' }}>
          <div className={classes.topBarWrapper}>
            <img src={Logo} alt="logo" style={{ height: 59, paddingTop: '15px',  transform: 'translateY(-2px)' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                
              }}
            >
            </div>
          </div>
        </Toolbar>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Sample Verifier Application
          </Typography>
        </Toolbar>
        <Typography variant="h7" className={classes.subtitle}>
            Bringing the world to your finger tips     
        </Typography>
        
      </AppBar>

      <br></br>
    </div>
  );
}
export default HeaderComponent;
