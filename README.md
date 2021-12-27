### Upload to your Google Drive with terminal itself 

#### Steps to get started with the Script
1. Clone the Repository
2. Create .env File 
3. Create a Project at [GCP](https://console.cloud.google.com/)
4. Enable Google Drive API under Enable API and Services
![Enable_API](https://user-images.githubusercontent.com/63806451/147495509-b7ded486-02b1-4e76-bb5e-81c157ad34de.png)
5. Under API and Services Generate a OAuth 2.0 Client ID
6. Pase `https://developers.google.com/oauthplayground` as Redirect URI inside the OAuth 2.0 Client ID
![Generate_OAuth_Credentials](https://user-images.githubusercontent.com/63806451/147495542-c67d2432-ba6e-4298-b04d-3de85f949d83.png)
7. Whitelist your Email Address Under OAuth Consent Screen section
![WhiteList_Email](https://user-images.githubusercontent.com/63806451/147495855-8ce816f2-3a43-40cb-9e84-384087d4aa0f.png)
8. Go to [OAuthPlayground](https://developers.google.com/oauthplayground)
9. Select Google Drive V3 and Paste your Client Id and Client Secret
![Generate_Refresh_Token](https://user-images.githubusercontent.com/63806451/147495611-b0c8a2e5-fc5f-4b48-a7ad-e908ff6bfc45.png)
10. Exchange Authorization code with Refresh Token and Access Token
![Authorization_Code_Exchange](https://user-images.githubusercontent.com/63806451/147496069-31214b2f-c816-495b-84ef-666630ea594b.png)
11. Add the following inside your .env file which you created earlier 


   |  | KEY           |   | value            |
   |--|---------------|---|------------------|
   |  | CLIENT_ID     |   | yourClientID     |
   |  | CLIENT_SECRET |   | yourClientSecret |
   |  | REDIRECT_URI  |   | yourRedirectURI  |
   |  | REFRESH_TOKEN |   | yourRefreshToken |
   
12. Place your file at the dir
13. Replace FILENAME with your files' name inside the script [eg](https://github.com/nparashar150/Google_Drive_Handler/blob/383fb4dd07f8dcf6c39d040a576fa626d8aa5854/googleDriveHandler.js#L29)
14. Install required packages
15. **Note**: To upload the file run yarn upload
16. **Note**: To delete the file you need the files' FILEID as pass it as yarn delete 'FILEID'
17. Once you are done the setup you only need to run follow Steps after Step 11 everytime.

#### Star the Repository if you like my work
