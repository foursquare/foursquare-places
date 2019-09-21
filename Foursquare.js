import Venues from "./lib/api/venues";
import Photos from "./lib/api/photos";
import Tips from "./lib/api/tips";
import List from "./lib/api/lists";

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
    this.venuesInstance = new Venues(
      { credentials, apiUrl, locale },
      "/venues"
    );
    this.photosInstance = new Photos(
      { credentials, apiUrl, locale },
      "/photos"
    );
    this.tipsInstance = new Tips({ credentials, apiUrl, locale }, "/tips");
    this.listsInstance = new Lists({ credentials, apiUrl, locale }, "/lists");
  }

  get venues() {
    return this.venuesInstance;
  }
  get photos() {
    return this.photosInstance;
  }
  get tips() {
    return this.tipsInstance;
  }
  get lists() {
    return this.listsInstance;
  }
}
