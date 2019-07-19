/*
run ng generate module app-routing --flat --module=app 

to generate this file and add to the imports.
*/

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
