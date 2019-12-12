import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as Constants from './shared/constants/constants';
import * as GroupActions from './shared/actions/group.action';
import * as BookmarkActions from './shared/actions/bookmark.action';
import {Groups} from './shared/models/groups.model';
import {Group} from './shared/models/group.model';
import {Bookmarks} from './shared/models/bookmarks.model';
import {Bookmark} from './shared/models/bookmark.model';

interface AppState {
    groups: Groups;
    bookmarks: Bookmarks;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    groups$: Observable<Groups>;
    bookmarks$: Observable<Bookmarks>;

    constructor(private store: Store<AppState>) {
        this.groups$ = this.store.select('groups');
        this.bookmarks$ = this.store.select('bookmarks');
    }

    groupAction(payload: Group, action: number) {
        switch (action) {
            case Constants.GROUP_ACTIONS.CREATE:
                this.store.dispatch(new GroupActions.Create(payload));
                break;
            case Constants.GROUP_ACTIONS.UPDATE:
                this.store.dispatch(new GroupActions.Update(payload));
                break;
            case Constants.GROUP_ACTIONS.DELETE:
                this.store.dispatch(new GroupActions.Delete(payload));
                break;
        }
    }

    bookmarkAction(payload: Bookmark, action: number) {
        switch (action) {
            case Constants.BOOKMARK_ACTIONS.CREATE:
                this.store.dispatch(new BookmarkActions.Create(payload));
                break;
            case Constants.BOOKMARK_ACTIONS.UPDATE:
                this.store.dispatch(new BookmarkActions.Update(payload));
                break;
            case Constants.BOOKMARK_ACTIONS.DELETE:
                this.store.dispatch(new BookmarkActions.Delete(payload));
                break;
        }
    }
}
