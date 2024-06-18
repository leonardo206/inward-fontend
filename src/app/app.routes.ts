import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'contact', component: ContactComponent },
];
