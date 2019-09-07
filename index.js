import configService from "./lib/services/config";
// API Features
import venues from "./lib/api/venues";

export default settings => {
  const config = configService.getConfig(settings);
  const foursquare = {
    venues: venues(config)
  };
  return foursquare;
};
