# sample-verifier-webapp

The sample web application demonstrates the functionality of Verification Controller. Different components required for this demo are:<br> 
•	Wipro’s Verification controller <br>
•	Identity Wallet for Holder and <br>
•	Verifiable Sample Web Application <br>

Verification controller is hosted by us at https://vcauth.azurefd.net <br>
Holder should have Identity Wallet application, DIWallet installed on their mobile phone. The wallet is available on both Android and iOS platforms. 
<br>On iOS, wallet be can downloaded from: https://apps.apple.com/in/app/dice-id/id1624858853
<br>On Android, the link is:  DIWallet - Apps on Google Play

The flow of Verifiable credential between these different parties is:<br>
![Flow between different parties](diagrams/flow_vc_auth.jpg)





Different steps user needs to go through to setup Verifiable credential with Wipro’s Platform are: <br>
1.	Configure Presentation request parameters with Verifier Controller:
PUT/POST https://vcauth.azurefd.net/api/vc-config: This API can be used to configure the presentation request parameters. Holder will present proof in terms of these parameters.
The id of this configuration need to be passed in the sample application
 be passed to  authorize?pres_req_conf_id=idname 
2.	Donwload sample verifier application and make the following changes:<br>
a.	Sample-verifier-webapp/src/vc_services/VC_AuthService.js <br>
i.	Constants.clientRoot -> should point to the URL where sample verifier application is hosted. This URL should be accessible from Verifier controller <br>
ii.	userManager.settings.metadata.authorization_endpoint -> change pres_req_conf_id to the presentation request id you have created. If you haven’t created any new id, then the default id wipro-access can be used.<br>
3.	Install and build the application with the following commands:<br>
a.	npm install <br>
b.	npm run build <br>
c.	npm start <br>
