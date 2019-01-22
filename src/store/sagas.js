import { takeLatest, put, call } from 'redux-saga/effects';
import { Types } from './books';
import Api from '../api';

export function* asyncFetchPodcasts({ payload }) {
  try {
    const response = yield call(Api.fetchPodcasts, payload);

    yield put({ type: Types.GET_Podcasts_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: Types.GET_Podcasts_FAILURE, payload: err });
  }
}

export function* asyncPaginatePodcasts({ payload }) {
  try {
    const response = yield call(Api.paginatePodcasts, payload.Podcasts, payload.startIndex);

    yield put({ type: Types.GET_PAGINATE_Podcasts_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: Types.GET_Podcasts_FAILURE, payload: err });
  }
}

export default function* root() {
  yield [
    takeLatest(Types.GET_Podcasts, asyncFetchPodcasts),
    takeLatest(Types.GET_PAGINATE_Podcasts, asyncPaginatePodcasts)
  ];
}
