const constructUrlQuery = (baseUrl, endpoint, parameters) => {
  const urlParameters = Object.entries(parameters)
    .map(([parameter, value]) => `${parameter}=${value}`)
    .join("&");

  const url = `${baseUrl}/${endpoint}?${urlParameters}`;

  return url;
};

export default constructUrlQuery;
