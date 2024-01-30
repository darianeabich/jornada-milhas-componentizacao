import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { CardDepoComponent } from './shared/card-depo/card-depo.component';
import { CardPassagemComponent } from './shared/card-passagem/card-passagem.component';
import { CardComponent } from './shared/card/card.component';
import { ContainerComponent } from './shared/container/container.component';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { HeaderComponent } from './shared/header/header.component';
import { InputCalendarComponent } from './shared/input-calendar/input-calendar.component';
import { InputTextComponent } from './shared/input-text/input-text.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoComponent,
    FormBuscaComponent,
    ModalComponent,
    InputCalendarComponent,
    DropdownUfComponent,
    LoginComponent,
    RegisterComponent,
    InputTextComponent,
    FormBaseComponent,
    FormBuscaComponent,
    PerfilComponent,
    SearchComponent,
    CardPassagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    SelectButtonModule,
    InputTextModule,
    CalendarModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    InputNumberModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AutoCompleteModule,
    VirtualScrollerModule,
    ToggleButtonModule,
    RadioButtonModule,
    DividerModule,
    CheckboxModule,
    FormsModule,
    ChipModule,
  ],
  providers: [
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
