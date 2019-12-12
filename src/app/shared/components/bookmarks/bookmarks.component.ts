import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bookmarks} from '../../models/bookmarks.model';
import {Bookmark} from '../../models/bookmark.model';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

    @Input() selectedGroup: string;
    @Input() bookmarks: Bookmarks;
    @Output() createBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() updateBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() deleteBookmarkEvent = new EventEmitter<Bookmark>();
    editToggle = false;
    temporaryBookmark: Bookmark;
    searchFilter = '';

    constructor() {
    }

    ngOnInit() {
    }

    onSearchChange($event) {
        this.searchFilter = $event.target.value;
    }

    createBookmark($event: Bookmark) {
        this.createBookmarkEvent.emit($event);
    }

    toggleUpdateBookmark($event: Bookmark, toggle: boolean) {
        this.editToggle = toggle;
        if ($event) {
            this.temporaryBookmark = Object.assign({}, $event);
        }
    }

    updateBookmark() {
        this.updateBookmarkEvent.emit(this.temporaryBookmark);
        this.toggleUpdateBookmark(undefined, false);
    }

    deleteBookmark($event: Bookmark) {
        this.deleteBookmarkEvent.emit($event);
    }
}
