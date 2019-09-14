import venuesSingelton from './lib/api/venues'

export default class Foursquare {
  constructor(clientID, clientSecret, {version = "20171001",  apiUrl = "https://api.foursquare.com/v2",
  version = "20171001",
  locale = "en"}) {
    this.credentials = {clientID, clientSecret, version};
    this.apiUrl = apiUrl
    this.locale = locale
  }

  venues() {
    const {credentials, apiUrl, locale} = this
    venuesSingelton({credentials, apiUrl, locale}, "/venues")
  }
}
