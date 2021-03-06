import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from './typography/typography.component';


import { GeneralComponent } from './dpadmin/settings/general/general.component';
import { WritingComponent } from './dpadmin/settings/writing/writing.component';
import { ReadingComponent } from './dpadmin/settings/reading/reading.component';
import { DiscussionComponent } from './dpadmin/settings/discussion/discussion.component';
import { MediaComponent } from './dpadmin/settings/media/media.component';
import { PermalinkComponent } from './dpadmin/settings/permalink/permalink.component';
import { PrivacyComponent } from './dpadmin/settings/privacy/privacy.component';
import { ComingsoonComponent } from './dpadmin/comingsoon/comingsoon.component';

import { NewuserComponent } from './dpadmin/users/newuser/newuser.component';

import { CategoriesComponent } from './dpadmin/posts/categories/categories.component';
import { PostTagComponent } from './dpadmin/posts/post-tag/post-tag.component';
import { PostlistsComponent } from './dpadmin/posts/postlists/postlists.component';
import { PostnewComponent } from './dpadmin/posts/postnew/postnew.component';

import { TestcompComponent } from './testcomp/testcomp.component'; 


import { WpimportComponent } from './dpadmin/tools/wpimport/wpimport.component';
import { DptoolsComponent } from './dpadmin/tools/dptools/dptools.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },


  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/testcomp', component: TestcompComponent },

  //Posts
  { path: 'admin/posts/lists', component: PostlistsComponent },
  { path: 'admin/posts/new', component: PostnewComponent }, 
  { path: 'admin/posts/categories', component: CategoriesComponent },
  { path: 'admin/posts/tags', component: PostTagComponent },
  

  //Users
  { path: 'admin/users/newuser', component: NewuserComponent },
  
  //Tool
  { path: 'admin/tools', component: ComingsoonComponent },
  { path: 'admin/tools/tools', component: DptoolsComponent },
  { path: 'admin/tools/import', component: WpimportComponent },
  { path: 'admin/tools/export', component: ComingsoonComponent },
  { path: 'admin/tools/site-health', component: ComingsoonComponent },
  { path: 'admin/tools/export-personal-data', component: ComingsoonComponent },
  { path: 'admin/tools/erase-personal-data', component: ComingsoonComponent },

  //Settings
  { path: 'admin/settings/general', component: GeneralComponent },
  { path: 'admin/settings/writing', component: WritingComponent },
  { path: 'admin/settings/reading', component: ReadingComponent },
  { path: 'admin/settings/media', component: MediaComponent },
  { path: 'admin/settings/permalink', component: PermalinkComponent }, 
  { path: 'admin/settings/privacy', component: PrivacyComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
