import types from './types';

export const setQuery = query => ({
  type: types.SET_QUERY,
  payload: query
});

export default {
  setQuery
};
