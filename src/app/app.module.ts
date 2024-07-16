import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importer CUSTOM_ELEMENTS_SCHEMA
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CompletedTaskListComponent } from './completed-task-list/completed-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    CompletedTaskListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
