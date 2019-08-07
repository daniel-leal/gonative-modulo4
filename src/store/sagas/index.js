import { all, takeLatest } from 'redux-saga/effects';

import { PlayerTypes } from '~/store/ducks/player';
import { PodcastsTypes } from '~/store/ducks/podcasts';

import { load } from '~/store/sagas/podcasts';

import {
  init, setPodcast, play, pause,
} from '~/store/sagas/player';

export default function* rootSaga() {
  yield all([
    init(),

    takeLatest(PodcastsTypes.LOAD_REQUEST, load),

    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
  ]);
}
