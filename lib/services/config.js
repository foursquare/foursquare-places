const defaultConfig = {
  apiUrl: "https://api.foursquare.com/v2",
  version: "20171001",
  locale: "en"
};

const buildCreds = config => ({
  v: config.version,
  client_id: config.clientID,
  client_secret: config.clientSecret
});

const service = {};

service.getConfig = (settings, config = defaultConfig) => ({
  ...defaultConfig,
  ...settings,
  credentials: buildCreds(config)
});

export default service;
