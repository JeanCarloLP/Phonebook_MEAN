import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

export const ROUTES: Routes = [
    { path: 'home', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
