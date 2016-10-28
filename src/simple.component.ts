import { IComponentOptions } from 'angular';

export class SimpleComponent implements IComponentOptions {
    public bindings: any = {
        text: '@'
    };
    public controller: string = 'simpleComponentController';
    public template: string = `
        <div>{{ $ctrl.text }} </div>
    `
}