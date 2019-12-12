import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bookmark} from '../../models/bookmark.model';

@Component({
    selector: 'app-bookmark',
    templateUrl: './bookmark.component.html',
    styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

    @Input() bookmark: Bookmark;
    @Output() updateBookmarkEvent = new EventEmitter<Bookmark>();
    @Output() deleteBookmarkEvent = new EventEmitter<Bookmark>();

    constructor() {
    }

    ngOnInit() {
    }

    updateAction($event: MouseEvent) {
        this.updateBookmarkEvent.emit(this.bookmark);
    }

    deleteAction($event: MouseEvent) {
        this.deleteBookmarkEvent.emit(this.bookmark);
    }
}
