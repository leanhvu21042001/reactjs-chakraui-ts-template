const getBaseURL = () => {
  const development = process.env.REACT_APP_API_BASE_URL_DEVELOPMENT;
  const test = process.env.REACT_APP_API_BASE_URL_TEST;
  const production = process.env.REACT_APP_API_BASE_URL_PRODUCTION;

  switch (process.env.NODE_ENV) {
    case 'development':
      return development;
    case 'production':
      return production;
    case 'test':
      return test;
    default:
      return development;
  }
};

export default getBaseURL;
