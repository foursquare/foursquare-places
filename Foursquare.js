import Venues from "./lib/api/venues";

export default class Foursquare {
  constructor(
    client_id,
    client_secret,
    version = "20171001",
    apiUrl = "https://api.foursquare.com/v2",
    locale = "en"
  ) {
    const credentials = {
      client_id,
      client_secret,
      v: version
    };
    this.venuesInstances = new Venues(
      { credentials, apiUrl, locale },
      "/venues"
    );
  }

  get venues() {
    return this.venuesInstances;
  }
}
