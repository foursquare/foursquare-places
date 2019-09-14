import venuesSingelton from "./lib/api/venues";

export default class Foursquare {
  constructor(
    clientID,
    clientSecret,
    version = "20171001",
    apiUrl = "https://api.foursquare.com/v2",
    locale = "en"
  ) {
    this.credentials = {
      client_id: clientID,
      client_secret: clientSecret,
      v: version
    };
    this.apiUrl = apiUrl;
    this.locale = locale;
    this.venuesSingelton = venuesSingelton(
      { credentials: this.credentials, apiUrl, locale },
      "/venues"
    );
  }

  get venues() {
    return this.venuesSingelton;
  }
}
