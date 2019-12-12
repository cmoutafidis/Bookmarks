import * as GroupActions from '../actions/group.action';
import * as Constants from '../constants/constants';
import {Groups} from '../models/groups.model';

export type GroupActions = GroupActions.GroupActions;

const defaultState: Groups = {};

const generateNewState = (state, newData = {}) => {
    return Object.assign({}, state, newData);
};

export function groupReducer(state: Groups = defaultState, action: GroupActions) {
    const newState: Groups = generateNewState(state);
    switch (action.type) {
        case Constants.GROUP_CREATE_ACTION:
            newState[action.payload.id] = action.payload;
            return newState;
        case Constants.GROUP_UPDATE_ACTION:
            newState[action.payload.id] = action.payload;
            return generateNewState(state, newState);
        case Constants.GROUP_DELETE_ACTION:
            delete newState[action.payload.id];
            return generateNewState(state, newState);
    }
}

