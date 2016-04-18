/* tslint:disable:no-unused-variable */
import { CoreComponent } from './core.component';

import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  inject, injectAsync, fakeAsync, TestComponentBuilder, tick
} from 'angular2/testing';

import { provide }        from 'angular2/core';
import { ViewMetadata }   from 'angular2/core';
import { PromiseWrapper } from 'angular2/src/facade/promise';

/////////// Module Preparation ///////////////////////
interface Done {
  (): void;
  fail: (err: any) => void;
}

////////  SPECS  /////////////

/// Delete this: verify can use Angular testing's DOM abstraction to access DOM
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});


describe('CoreComponent', function () {
  it('should instantiate component',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(CoreComponent).then(fixture => {
        expect(fixture.componentInstance instanceof CoreComponent).toBe(true, 'should create CoreComponent');
      });
    }));

  it('should have expected <h1> text',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(CoreComponent).then(fixture => {
        // fixture.detectChanges();  // need for a binding; we don't have one
        let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;
        expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
      });
    }));
});
