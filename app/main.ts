import {bootstrap}    from 'angular2/platform/browser';
import {CoreComponent} from './core/core.component';
import {enableProdMode} from 'angular2/core';
var prodMode =false;
if(prodMode) {
  enableProdMode();
}

bootstrap(CoreComponent);
