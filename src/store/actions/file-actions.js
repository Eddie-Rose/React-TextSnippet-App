import { SAVE_TEXT, DISPLAY_TITLE, NEW_TEXT } from "../../constants/action-types";



export const saveText = (id, storedText, title, time) => ({
    type: SAVE_TEXT,

    id,
    storedText,
    title,
    time

})

export const newText = (id, storedText, title, time) => ({
    type: NEW_TEXT,

    id,
    storedText,
    title,
    time

})

export const displayTitle = (displayTitleBool) => ({
    type: DISPLAY_TITLE,

    value: displayTitleBool

})