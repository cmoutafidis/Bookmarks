import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bookmarks} from '../../models/bookmarks.model';
import {Bookmark} from '../../models/bookmark.model';
import {Group} from '../../models/group.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

    @Input() selectedGroup: string;
    @Input() bookmarks: Bookmarks;
    @Input() availableGroups: Group[];
    @Output() createBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() updateBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() deleteBookmarkEvent = new EventEmitter<Bookmark>();
    createToggle = false;
    editToggle = false;
    temporaryBookmark: Bookmark;
    searchFilter = '';

    createForm: FormGroup;
    editForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm = this.fb.group({
            name: ['', [Validators.required]],
            url: ['', [Validators.required]],
            group: ['', [Validators.required]]
        });
        this.editForm = this.fb.group({
            name: ['', [Validators.required]],
            url: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }

    onSearchChange($event) {
        this.searchFilter = $event.target.value;
    }

    createBookmark() {
        this.temporaryBookmark.id = Math.random().toString(36).slice(-4) + '-' + Math.random().toString(36).slice(-4)
            + '-' + Math.random().toString(36).slice(-4) + '-' + Math.random().toString(36).slice(-4);
        this.createBookmarkEvent.emit(this.temporaryBookmark);
        this.toggleCreateBookmark(false);
    }

    toggleCreateBookmark(toggle: boolean) {
        this.createToggle = toggle;
        if (toggle) {
            this.editToggle = false;
            this.temporaryBookmark = {} as Bookmark;
        }
    }

    toggleUpdateBookmark($event: Bookmark, toggle: boolean) {
        this.editToggle = toggle;
        if (toggle) {
            this.createToggle = false;
        }
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
