import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreModule} from '@ngrx/store';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {TabsComponent} from './shared/components/tabs/tabs.component';
import {BookmarksComponent} from './shared/components/bookmarks/bookmarks.component';
import {BookmarkComponent} from './shared/components/bookmark/bookmark.component';
import {GroupComponent} from './shared/components/group/group.component';
import {groupReducer} from './shared/reducers/group.reducer';
import {bookmarkReducer} from './shared/reducers/bookmark.reducer';

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        BookmarksComponent,
        BookmarkComponent,
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
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

