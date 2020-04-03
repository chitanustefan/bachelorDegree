import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
imports: [MatButtonModule,
FormsModule,
MatIconModule,
ReactiveFormsModule,
MatListModule,
MatSidenavModule,
MatToolbarModule,
MatSelectModule,
MatFormFieldModule,
MatInputModule,
MatDialogModule,
TextFieldModule,
],
exports: [MatButtonModule,
FormsModule,
ReactiveFormsModule,
MatIconModule,
MatListModule,
MatSidenavModule,
MatToolbarModule,
MatSelectModule,
MatFormFieldModule,
MatInputModule,
MatDialogModule,
TextFieldModule,
],
})

export class MaterialModule { }