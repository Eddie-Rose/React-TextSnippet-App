import { takeLeading, put } from "redux-saga/effects";
import { SAVE_TEXT, SAVE_TEXT_ASYNC, NEW_TEXT,NEW_TEXT_ASYNC } from "../../constants/action-types";


const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export function* watchSaveText() {
    yield takeLeading(SAVE_TEXT, saveTextAsync);
}  

export function* watchNewText() {
    yield takeLeading(NEW_TEXT, saveTextAsync);
}  

function* saveTextAsync(action) {
    console.log(action);

    let hash = yield ipfs.addJSON({title: action.title, time: action.time, storedText: action.storedText})
    let filename = "https://ipfs.infura.io/ipfs/" + hash

    if (action.type === SAVE_TEXT){
        yield put({ type: SAVE_TEXT_ASYNC, id: action.id + 1, title: action.title, time: action.time, filename: filename });
    }
    else{
        yield put({ type: NEW_TEXT_ASYNC, id: action.id, title: action.title, time: action.time, filename: filename });
    }
}

