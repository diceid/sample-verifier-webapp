# Sample Verifier Web application

The sample web application demonstrates the functionality of Verification Controller. Different components required for this demo are:<br> 
- DICE Verification component <br>
- Identity Wallet for Holder and <br>
- Verifiable Sample Web Application  (sample-verifier-webapp) <br>

DICE verification component is hosted at: https://futurebankvcauthcontroller.wiprobc.com

Identity Wallet application for Holder, DICE Wallet need to be installed on the mobile phone. The wallet is available on both Android and iOS platforms. 
 - On iOS, it be can downloaded from: [DICE ID - Apple playstore](https://apps.apple.com/in/app/dice-id/id1624858853)
 - On Android, the link is: [DICE ID - Apps on Google Play](https://play.google.com/store/apps/details?id=com.diwallet1)

Verifiable Sample web application can be downloaded from here. Once you download the code, follow the steps below to install the code:
1. change inside the directory sample-verififier webapp
2. build and Install webapp 
  - npm install <br>
  - npm run build <br>
  - npm start <br>
  
The flow of Verifiable credential between these different parties is:<br>

![Flow between different parties](diagrams/flow_vc_auth.jpg)


Different steps user needs to go through to setup Verifiable credential are: <br>
1.	Configure Presentation request parameters with Verifier Controller:
PUT/POST https://futurebankvcauthcontroller.wiprobc.com/api/vc-config: This API can be used to configure the presentation request parameters. Holder will present proof in terms of these parameters. The id of this configuration need to be passed in the sample application
2.	Donwload sample verifier application and make the following changes:
   - Sample-verifier-webapp/src/vc_services/VC_AuthService.js 
      - Constants.clientRoot -> should point to the URL where sample verifier application is hosted. This URL should be accessible from Verifier controller 
      - userManager.settings.metadata.authorization_endpoint -> change pres_req_conf_id to the presentation request id you have created. If you haven’t created any new id, then the default id demo-access can be used.
3.	Install and build the application with the following commands:

