import * as BookmarkActions from '../actions/bookmark.action';
import * as Constants from '../constants/constants';
import {Bookmarks} from '../models/bookmarks.model';

export type BookmarkActions = BookmarkActions.BookmarkActions;

const defaultState: Bookmarks = {};

const generateNewState = (state, newData = {}) => {
    return Object.assign({}, state, newData);
};

export function bookmarkReducer(state: Bookmarks = defaultState, action: BookmarkActions) {
    const newState: Bookmarks = generateNewState(state);
    switch (action.type) {
        case Constants.BOOKMARK_CREATE_ACTION:
            newState[action.payload.id] = action.payload;
            return newState;
        case Constants.BOOKMARK_UPDATE_ACTION:
            newState[action.payload.id] = action.payload;
            return generateNewState(state, newState);
        case Constants.BOOKMARK_DELETE_ACTION:
            delete newState[action.payload.id];
            return generateNewState(state, newState);
    }
}

