export function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: import.meta.env.VITE_APP_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/youtube.readonly",
      "https://www.googleapis.com/auth/yt-analytics.readonly",
      "https://www.googleapis.com/auth/yt-analytics-monetary.readonly",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  //console.log(options);
  //console.log(import.meta.env.REACT_APP_GOOGLE_CLIENT_ID);
  const qs = new URLSearchParams(options);

  //console.log(qs);
  return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL;
