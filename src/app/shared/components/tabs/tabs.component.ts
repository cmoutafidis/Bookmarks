import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bookmarks} from '../../models/bookmarks.model';
import {Group} from '../../models/group.model';
import {Bookmark} from '../../models/bookmark.model';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    @Input() groups: Group[];
    @Input() bookmarks: Bookmarks;
    @Output() createBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() updateBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() deleteBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() createGroupEvent = new EventEmitter<Group>();
    @Output() updateGroupEvent = new EventEmitter<Group>();
    @Output() deleteGroupEvent = new EventEmitter<Group>();
    selectedGroup: string;

    constructor() {
    }

    ngOnInit() {
        console.log(this.groups);
    }

    groupSelected($event: string) {
        this.selectedGroup = $event;
    }

    createBookmark($event: Bookmark) {
        this.createBookmarkEvent.emit($event);
    }

    updateBookmark($event: Bookmark) {
        this.updateBookmarkEvent.emit($event);
    }

    deleteBookmark($event: Bookmark) {
        this.deleteBookmarkEvent.emit($event);
    }

    createGroup($event: Group) {
        this.createGroupEvent.emit($event);
    }

    updateGroup($event: Group) {
        this.updateGroupEvent.emit($event);
    }

    deleteGroup($event: Group) {
        this.deleteGroupEvent.emit($event);
    }
}
