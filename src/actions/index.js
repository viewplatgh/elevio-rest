export const SEARCH_ELEV = 'SEARCH_ELEV';
export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';

export function searchELEV(keyword) {
  return {
    type: SEARCH_ELEV,
    keyword
  };
}

export function updateSearchResult(result) {
  return {
    type: UPDATE_SEARCH_RESULT,
    result
  };
}
