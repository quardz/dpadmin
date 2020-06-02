import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { GeneralComponent } from './dpadmin/settings/general/general.component';
import { WritingComponent } from './dpadmin/settings/writing/writing.component';
import { ReadingComponent } from './dpadmin/settings/reading/reading.component';
import { DiscussionComponent } from './dpadmin/settings/discussion/discussion.component';
import { MediaComponent } from './dpadmin/settings/media/media.component';
import { PermalinkComponent } from './dpadmin/settings/permalink/permalink.component';
import { PrivacyComponent } from './dpadmin/settings/privacy/privacy.component';
import { ComingsoonComponent } from './dpadmin/comingsoon/comingsoon.component';

import { NewuserComponent } from './dpadmin/users/newuser/newuser.component';


import { TestcompComponent } from './testcomp/testcomp.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },


  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/testcomp', component: TestcompComponent },


  //Users
  { path: 'admin/users/newuser', component: NewuserComponent },
  
  //Tool
  { path: 'admin/tools', component: ComingsoonComponent },
  { path: 'admin/tools/tools', component: ComingsoonComponent },
  { path: 'admin/tools/import', component: ComingsoonComponent },
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
