import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from '../../models/group.model';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
    @Output() selectEvent = new EventEmitter<string>();
    @Input() group: Group;
    @Input() selected: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    groupSelect($event) {
        this.selectEvent.emit(this.group.id);
    }
}
