import dotenv from "dotenv";
import { sheets } from "../config/sheet-config.js";

dotenv.config();

export const postFormService = async (data) => {
  const sheetName = data.event;

  try {
    // Fetch the spreadsheet dynamically to get the updated list of sheets
    // const spreadsheet = await sheets.spreadsheets.get({
    //   spreadsheetId: process.env.SPREADSHEET_ID,
    // });

    // const sheetExists = spreadsheet.data.sheets.some(
    //   (sheet) => sheet.properties.title === sheetName
    // );

    // if (!sheetExists) {
    //   await sheets.spreadsheets.batchUpdate({
    //     spreadsheetId: process.env.SPREADSHEET_ID,
    //     resource: {
    //       requests: [
    //         {
    //           addSheet: {
    //             properties: {
    //               title: sheetName,
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   });
    //   console.log(`Sheet ${sheetName} created.`);
    // }

    // Prepare the data to append
    const values = [
      [
        data.name,
        data.phone,
        data.email,
        data.branch,
        data.event,
        data.duNumber,
        data.participants,
        ...data.participantsDetails.map((participant) => participant.name),
      ],
    ];
    console.log(values);
    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${sheetName}!A2`,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: values,
      },
    });
    console.log(`Data added to sheet ${sheetName}.`);
    return { success: true, message: `Data added to sheet ${sheetName}.` };
  } catch (e) {
    console.error("Error handling Google Sheets:", e);
    throw new Error({ success: false, message: "Failed to process the form data." });
  }
};
