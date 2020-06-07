import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { Tabulator } from 'tabulator-tables';



import { AppRoutingModule } from './app-routing.module';
//import { EditorModule } from '@tinymce/tinymce-angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
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
import { FormlyHorizontalWrapper } from './dpadmin/settings/general/horizontal-wrapper';
import { WritingComponent } from './dpadmin/settings/writing/writing.component';
import { ReadingComponent } from './dpadmin/settings/reading/reading.component';
import { DiscussionComponent } from './dpadmin/settings/discussion/discussion.component';
import { MediaComponent } from './dpadmin/settings/media/media.component';
import { PermalinkComponent } from './dpadmin/settings/permalink/permalink.component';
import { PrivacyComponent } from './dpadmin/settings/privacy/privacy.component';
import { ComingsoonComponent } from './dpadmin/comingsoon/comingsoon.component';
import { NewuserComponent } from './dpadmin/users/newuser/newuser.component';
import { TaxonomyComponent } from './dpadmin/taxonomy/taxonomy.component';
import { TaxtableComponent } from './dpadmin/taxtable/taxtable.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { DpeditorComponent } from './dpadmin/dpeditor/dpeditor.component';


var _formly_settings = {
    wrappers: [{ name: 'form-field-horizontal', component: FormlyHorizontalWrapper }],
    validationMessages: [
        { name: 'required', message: 'This field is required' },
    ],
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    GeneralComponent,
    FormlyHorizontalWrapper,
    WritingComponent,
    ReadingComponent,
    DiscussionComponent,
    MediaComponent,
    PermalinkComponent,
    PrivacyComponent,
    ComingsoonComponent,
    NewuserComponent,
    TaxonomyComponent,
    TaxtableComponent,
    TestcompComponent,
    DpeditorComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule, 
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(_formly_settings),
    FormlyBootstrapModule,
    EditorModule,
    
  ],
  exports: [
  ],

  providers: [
   // { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
