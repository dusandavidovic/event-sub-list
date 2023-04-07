import SHEETS from "./sheets";

const sheetAPI = {
  apiKey: "AIzaSyBPXVe9nXfFK0y7ThJJL5hyrxz82FaFzd4", // sheetAPI project
  auth: {
    username: "bhyc.rcsail@gmail.com",
    password: "gTkmMA49iN6ULp",
  },

  oAuth: {
    client_id: "731023753425-l6pu6gl60tnsvl1688oo9hbdk0e4n304.apps.googleusercontent.com",
    project_id: "sheetapi-382114",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: ["http://localhost"],
  },
};

const template = {
  uriGet: "https://sheets.googleapis.com/v4/spreadsheets/{{spreadsheetId}}/values/{{range}}",
};

export const getUri = (range: string) => {
  const uri = template.uriGet.replace("{{spreadsheetId}}", SHEETS.eventSubscriptions.id);
  return `${uri.replace("{{range}}", range)}?key=${sheetAPI.apiKey}`;
};

export const getAuth = () => {
  return sheetAPI.auth;
};
export const getApiKey = () => {
  return sheetAPI.apiKey;
};
