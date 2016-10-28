import * as angular from 'angular';

describe('Simple component', () => {
     beforeEach(() => angular.module('web.components'));

     describe('It', () => {
         it('Should work', () => {
             expect(1).toBe(1);
         })
     })
})