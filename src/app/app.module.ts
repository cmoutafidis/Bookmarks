import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule
} from '@angular/material';

import {StoreModule} from '@ngrx/store';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {TabsComponent} from './shared/components/tabs/tabs.component';
import {BookmarksComponent} from './shared/components/bookmarks/bookmarks.component';
import {BookmarkComponent} from './shared/components/bookmark/bookmark.component';
import {GroupComponent} from './shared/components/group/group.component';
import {groupReducer} from './shared/reducers/group.reducer';
import {bookmarkReducer} from './shared/reducers/bookmark.reducer';
import {GroupsComponent} from './shared/components/groups/groups.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        BookmarksComponent,
        BookmarkComponent,
        GroupsComponent,
        GroupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({
            groups: groupReducer,
            bookmarks: bookmarkReducer
        }),
        AngularFireModule.initializeApp(environment.firebase),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatTreeModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

