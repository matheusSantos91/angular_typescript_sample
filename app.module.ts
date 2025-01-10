import { CoursesComponent } from './couses.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    providers: [
        CoursesService
    ]
})