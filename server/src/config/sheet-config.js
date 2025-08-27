import { google } from 'googleapis'
import dotenv from 'dotenv'
dotenv.config();
const credentials = JSON.parse(process.env.GOOGLE_CRED);
export const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
// const client = await auth.getClient();
export const sheets = google.sheets({ version: 'v4', auth});