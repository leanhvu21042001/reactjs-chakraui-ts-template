import getBaseURL from './helpers/getBaseURL';

const ENV = {
  API_BASE_URL: getBaseURL(),
};

const DEBOUNCE_WAIT = 500;
export { ENV, DEBOUNCE_WAIT };
