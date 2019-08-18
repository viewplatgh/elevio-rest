import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SEARCH_ELEV } from '../actions';
import { updateSearchResult } from '../actions';

export function* fetchELEV(action) {
  const url = `https://api.elevio-staging.com/v1/search/en?query=${action.keyword}`;
  const response = yield call(fetch, url, {
    headers: {
      'x-api-key': '33541da8ea5006bf4371f7a255f3af64',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcC5lbGV2aW8tc3RhZ2luZy5jb20iLCJzdWIiOiI1ZDU5NDQ5YWQ3ZjMwIiwiZXhwIjozMTQyOTMyMDExLCJpYXQiOjE1NjYxMzIwMTEsImp0aSI6IjFqY3U3YnIxN3FuYnBmbmMzODF1dXE3aWFnOWhzN2Y5IiwKICAidXNlck5hbWUiIDogInJvYmxhb0B2aWV3cGwuY29tIiwKICAidXNlcklkIiA6IDEzMDc2LAogICJzY29wZSIgOiBbICJyZWFkOmNvbnRleHR1YWwiLCAid3JpdGU6Y29udGV4dHVhbCIsICJyZWFkOmNhcmQiLCAid3JpdGU6Y2FyZCIsICJhcHByb3ZlOmFydGljbGUiLCAicmVhZDphcnRpY2xlIiwgIndyaXRlOmFydGljbGUiIF0KfQ.GQwDHCKaQ7ikpmSop110ySF3FesXU4a4VO48S2aXDBE'
    }
  });
  const jsonData = yield response.json();
  yield put(updateSearchResult(jsonData.results));
}

export function* handleSearchELEV() {
  yield takeEvery(SEARCH_ELEV, fetchELEV);
}

export default function* rootSaga() {
  yield all([handleSearchELEV()]);
}
