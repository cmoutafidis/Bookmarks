import {Action} from '@ngrx/store';
import * as Constants from '../constants/constants';
import {Group} from '../models/group.model';

export class Create implements Action {
    readonly type = Constants.GROUP_CREATE_ACTION;

    constructor(public payload: Group) {
    }
}

export class Update implements Action {
    readonly type = Constants.GROUP_UPDATE_ACTION;

    constructor(public payload: Group) {
    }
}

export class Delete implements Action {
    readonly type = Constants.GROUP_DELETE_ACTION;

    constructor(public payload: Group) {
    }
}

export type GroupActions = Create | Update | Delete;
