const { google } = require("googleapis");

async function getAuthSheets() {
    const auth = new google.auth.GoogleAuth({
      keyFile: "credencial.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
  
    const client = await auth.getClient();
  
    const googleSheets = google.sheets({
      version: "v4",
      auth: client,
    });
  
    const spreadsheetId = "1d_9RxEwFUXZs24irheX8MQPZt94Og2F-IGleZza1-xQ";
  
    return {
      auth,
      client,
      googleSheets,
      spreadsheetId,
    };
  }
  

 async function getRouts(){

        try {
            const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
            const getRows = await googleSheets.spreadsheets.values.get({
                auth, spreadsheetId, range: "Credito"
            })
            
            return getRows.data.values
        } catch (error) {
          return(error)
        }

 }

module.exports = {getRouts}