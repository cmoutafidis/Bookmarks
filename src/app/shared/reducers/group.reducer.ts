import * as GroupActions from '../actions/group.action';
import * as Constants from '../constants/constants';
import {Group} from '../models/group.model';

export type GroupActions = GroupActions.GroupActions;

const defaultState: Group[] = [
        {
            id: 'aaaa-bbbb-cccc-dddd',
            name: 'work',
            children: [
                {
                    id: 'aaaa-bbbb-cccc-eeee',
                    name: 'gitlab',
                    children: []
                }
            ]
        },
        {
            id: 'aaaa-bbbb-cccc-ffff',
            name: 'social',
            children: [
                {
                    id: 'aaaa-bbbb-cccc-gggg',
                    name: 'CNN',
                    children: [
                        {
                            id: 'aaaa-bbbb-cccc-iiii',
                            name: 'tech-news',
                            children: []
                        },
                        {
                            id: 'aaaa-bbbb-cccc-jjjj',
                            name: 'politics',
                            children: []
                        }
                    ]
                },
                {
                    id: 'aaaa-bbbb-cccc-hhhh',
                    name: 'Twitter',
                    children: [
                        {
                            id: 'aaaa-bbbb-cccc-kkkk',
                            name: 'tech-news',
                            children: []
                        },
                        {
                            id: 'aaaa-bbbb-cccc-llll',
                            name: 'politics',
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
;

const generateNewState = (state, newData = {}) => {
    return Object.assign({}, state, newData);
};

export function groupReducer(state: Group[] = defaultState, action: GroupActions) {
    const newState: Group[] = generateNewState(state);
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
        default:
            return defaultState;
    }
}

