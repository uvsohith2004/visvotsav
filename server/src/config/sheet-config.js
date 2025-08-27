import { google } from 'googleapis'
import dotenv from 'dotenv'
dotenv.config();
export const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
const client = await auth.getClient();
export const sheets = google.sheets({ version: 'v4', auth: client });