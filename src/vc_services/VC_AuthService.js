import { Log, User, UserManager } from "oidc-client";

// import { authProvider } from 'authProvider';

//Verifiable credentials start
let Constants = {
  stsAuthority: "https://futurebankvcauthcontroller.diceid.com/",
  clientId: "django-oidc-demo",
  clientRoot: "http://localhost:3000/",
  clientScope: "openid profile vc_authn",
  apiRoot: "https://demo.identityserver.io/api/",
};

const settings = {
  authority: Constants.stsAuthority,
  client_id: Constants.clientId,
  redirect_uri: `${Constants.clientRoot}signin-callback.html`,
  silent_redirect_uri: `${Constants.clientRoot}silent-callback.html`,
  post_logout_redirect_uri: `${Constants.clientRoot}`,
  response_type: "code",
  scope: Constants.clientScope,
  loadUserInfo: false,
  response_mode: "query",
};

var userManager = new UserManager(settings);
userManager.settings.metadata = {
  issuer: "https://futurebankvcauthcontroller.wiprobc.com/",
 jwks_uri:
    "https://futurebankvcauthcontroller.diceid.com/.well-known/openid-configuration/jwks",
  authorization_endpoint:
    "https://futurebankvcauthcontroller.diceid.com/vc/connect/authorize?pres_req_conf_id=verified-email",
  token_endpoint:
    "https://futurebankvcauthcontroller.diceid.com/vc/connect/token",
  userinfo_endpoint:
    "https://futurebankvcauthcontroller.diceid.com/connect/userinfo",
  check_session_iframe:
    "https://futurebankvcauthcontroller.diceid.com/vc/connect/checksession",
  revocation_endpoint:
    "https://futurebankvcauthcontroller.diceid.com/vc/connect/revocation",
};

Log.logger = console;
Log.level = Log.INFO;
//verifiable credentials end

export const vc_login = () => {
  userManager.signinPopup().then(
    (response) => {
      console.log(response); //write your if else condition from here
    },
    (error) => {
      console.log(error); //write your error code here
    }
  );
};

export const vc_logout = () => {
  userManager.signoutRedirect().then(
    (response) => {
      console.log(response); //write your if else condition from here
    },
    (error) => {
      console.log(error); //write your error code here
    }
  );
};

export const vc_getUser = () => {
  return userManager.getUser();
};

export const vc_renewToken = () => {
  userManager.signinSilent().then(
    (response) => {
      console.log(response); //write your if else condition from here
    },
    (error) => {
      console.log(error); //write your error code here
    }
  );
};
