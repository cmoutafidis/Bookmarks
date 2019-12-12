import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from '../../models/group.model';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    treeControl = new NestedTreeControl<Group>(node => node.children);
    dataSource = new MatTreeNestedDataSource<Group>();
    selectedGroup: string;
    @Output() groupSelectEvent = new EventEmitter<string>();

    @Input() groups: Group[];

    constructor() {
    }

    ngOnInit() {
        this.dataSource.data = this.groups;
    }

    hasChild = (_: number, node: Group) => !!node.children && node.children.length > 0;

    groupSelect($event: string) {
        if ($event === this.selectedGroup) {
            this.selectedGroup = undefined;
        } else {
            this.selectedGroup = $event;
        }
        this.groupSelectEvent.emit(this.selectedGroup);
    }
}
