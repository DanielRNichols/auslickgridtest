import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Slick-Grid Test';
    config.map([
      { route: ['', 'tblview'],    name: 'tblview',     moduleId: 'tblview', nav: true, title: 'Table'},
      { route: 'slickgrid',      name: 'slickgrid', moduleId: 'slickgrid',   nav: true, title: 'SlickGrid' }
    ]);
  }
}
