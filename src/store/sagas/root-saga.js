import{ all, fork } from "redux-saga/effects"

import {watchNewText, watchSaveText} from './saga'

export default function* rootSaga() {
    yield all ([
        fork(watchNewText),
        fork(watchSaveText)
    ]);
}