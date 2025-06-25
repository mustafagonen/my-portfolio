import { Routes } from '@angular/router';
import { MgHomePageComponent } from './components/home-page/home-page.component';
import { MgProjectDetailComponent } from './components/project-detail/project-detail.component';
import { MgProjectListComponent } from './components/project-list/project-list.component';

export const routes: Routes = [

  { path: '', title: "MG Portfolio", component: MgHomePageComponent },
  { path: 'project/detail/:id', title: "Project Detail", component: MgProjectDetailComponent },
  { path: 'project/list', title: "Project List", component: MgProjectListComponent },
];
