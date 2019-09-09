const defaultConfig = {
  apiUrl: "https://api.foursquare.com/v2",
  version: "20171001",
  locale: "en"
};

const buildCreds = ({ version, clientID, clientSecret }) => ({
  v: version,
  client_id: clientID,
  client_secret: clientSecret
});

const service = {};

service.getConfig = settings => {
  const { apiUrl, version: defVersion, locale } = defaultConfig;
  const { version = defVersion, clientID, clientSecret } = settings;
  const credentials = buildCreds({
    version,
    clientID,
    clientSecret
  });
  return { apiUrl, locale, credentials };
};
export default service;
