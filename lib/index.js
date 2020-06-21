import { Lists, Tips, Photos, Venues } from "./api";

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
      v: version,
    };
    this.venuesInstance = new Venues({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/venues",
    });
    this.photosInstance = new Photos({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/photos",
    });
    this.tipsInstance = new Tips({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/tips",
    });
    this.listsInstance = new Lists({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/lists",
    });
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
