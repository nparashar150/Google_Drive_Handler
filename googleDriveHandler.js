require("dotenv").config();
// import { google } from "googleapis";
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});
// const FILENAME = "__Enter_your_fileName_here__";
const uploadFile = async (FILENAME) => {
  const Dirpath = path.join(__dirname , FILENAME);
  try {
    const response = await drive.files.create({
      requestBody: {
        name: `${Date.now() + FILENAME}`,
        mimeType: "image/jpg",
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(Dirpath),
      },
    });
    console.log(response.data);
    generatePublicUrl(response.data.id);
  } catch (error) {
    console.log(error.message);
  }
};

const generatePublicUrl = async (fileId) => {
  try {
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = async (fileId) => {
  try {
    const response = await drive.files.delete({
      fileId,
    });
    console.log(response.data);
    console.log("Done");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadFile, generatePublicUrl, deleteFile };
