### Upload to your Google Drive with terminal itself 

#### Steps to get started with the Script
1. Clone the Repository
2. Create .env File 
3. Create a Project at [GCP](https://console.cloud.google.com/)
4. Enable Google Drive API under Enable API and Services
![Enable_API](https://raw.githubusercontent.com/nparashar150/Google_Drive_Handler/main/assets/Enable_API.png)
5. Under API and Services Generate a OAuth 2.0 Client ID
6. Pase `https://developers.google.com/oauthplayground` as Redirect URI inside the OAuth 2.0 Client ID
![Generate_OAuth_Credentials](https://raw.githubusercontent.com/nparashar150/Google_Drive_Handler/main/assets/Generate_OAuth_Credentials.png)
7. Whitelist your Email Address Under OAuth Consent Screen section
![WhiteList_Email](https://raw.githubusercontent.com/nparashar150/Google_Drive_Handler/main/assets/WhiteList_Email.png)
8. Go to [OAuthPlayground](https://developers.google.com/oauthplayground)
9. Select Google Drive V3 and Paste your Client Id and Client Secret
![Generate_Refresh_Token](https://raw.githubusercontent.com/nparashar150/Google_Drive_Handler/main/assets/Generate_Refresh_Token.png)
10. Exchange Authorization code with Refresh Token and Access Token
![Authorization_Code_Exchange](https://raw.githubusercontent.com/nparashar150/Google_Drive_Handler/main/assets/Authorization_Code_Exchange.png)
11. Add the following inside your .env file which you created earlier 


   |  | KEY           |   | value            |
   |--|---------------|---|------------------|
   |  | CLIENT_ID     |   | yourClientID     |
   |  | CLIENT_SECRET |   | yourClientSecret |
   |  | REDIRECT_URI  |   | yourRedirectURI  |
   |  | REFRESH_TOKEN |   | yourRefreshToken |
   
12. Place your file at the dir
13. Install required packages
14. **Note**: To upload the file run yarn upload "fileName"
15. **Note**: To delete the file you need the files' FILEID and run it as yarn delete 'FILEID'
![Example_Code](https://raw.githubusercontent.com/nparashar150/Google_Drive_Handler/main/assets/Example_Code.png)
16. Once you are done the setup you only need to run follow Steps after Step 11 everytime.

#### Star the Repository if you like my work
