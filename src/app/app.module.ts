import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankFormComponent } from './blank-form/blank-form.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DragAndDropModule } from 'angular-draggable-droppable';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BlankFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    DragAndDropModule.forRoot(),
    MatListModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
