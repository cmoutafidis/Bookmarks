import {Action} from '@ngrx/store';
import * as Constants from '../constants/constants';
import {Bookmark} from '../models/bookmark.model';

export class Create implements Action {
    readonly type = Constants.BOOKMARK_CREATE_ACTION;

    constructor(public payload: Bookmark) {
    }
}

export class Update implements Action {
    readonly type = Constants.BOOKMARK_UPDATE_ACTION;

    constructor(public payload: Bookmark) {
    }
}

export class Delete implements Action {
    readonly type = Constants.BOOKMARK_DELETE_ACTION;

    constructor(public payload: Bookmark) {
    }
}

export type BookmarkActions = Create | Update | Delete;
