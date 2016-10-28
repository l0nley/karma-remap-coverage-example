import {module, IModule}  from 'angular';
import {SimpleComponent} from './simple.component';
import {SimpleComponentController} from './simple.controller';

let app: IModule;
try {
    app = module('web.components');
} catch(e) {
    app = module('web.components', []);
}

export default app
    .component('simpleComponent', new SimpleComponent())
    .controller('simpleComponentController', SimpleComponentController)
    .name;