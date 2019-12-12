import * as BookmarkActions from '../actions/bookmark.action';
import * as Constants from '../constants/constants';
import {Bookmarks} from '../models/bookmarks.model';

export type BookmarkActions = BookmarkActions.BookmarkActions;

const defaultState: Bookmarks = {
    'bbbb-bbbb-cccc-dddd': {
        id: 'bbbb-bbbb-cccc-dddd',
        name: 'Gitlab Hapimag',
        url: 'https://gitlab.com/hapimag/web_2018',
        group: 'aaaa-bbbb-cccc-eeee'
    },
    'bbbb-bbbb-cccc-eeee': {
        id: 'bbbb-bbbb-cccc-eeee',
        name: 'Gitlab',
        url: 'https://gitlab.com/',
        group: 'aaaa-bbbb-cccc-eeee'
    },
    'bbbb-bbbb-cccc-ffff': {
        id: 'bbbb-bbbb-cccc-ffff',
        name: 'CNN Tech',
        url: 'https://edition.cnn.com/world',
        group: 'aaaa-bbbb-cccc-iiii'
    },
    'bbbb-bbbb-cccc-gggg': {
        id: 'bbbb-bbbb-cccc-gggg',
        name: 'CNN Politics',
        url: 'https://edition.cnn.com/politics',
        group: 'aaaa-bbbb-cccc-jjjj'
    },
    'bbbb-bbbb-cccc-hhhh': {
        id: 'bbbb-bbbb-cccc-hhhh',
        name: 'Twitter Tech',
        url: 'https://twitter.com/',
        group: 'aaaa-bbbb-cccc-kkkk'
    },
    'bbbb-bbbb-cccc-iiii': {
        id: 'bbbb-bbbb-cccc-iiii',
        name: 'Twitter Politics',
        url: 'https://twitter.com/signup',
        group: 'aaaa-bbbb-cccc-llll'
    }
};

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
            return newState;
        case Constants.BOOKMARK_DELETE_ACTION:
            delete newState[action.payload.id];
            return newState;
        default:
            return defaultState;
    }
}

