import {autoinject} from 'aurelia-framework';
import { Column, GridOption } from 'aurelia-slickgrid';

@autoinject
export class SlickGrid {
  public heading = 'Slick Grid';
  public gridOptions: GridOption;
  public columnDefinitions: Column[];
  public tabledata: any[];

  constructor() {
    this.defineGrids();
  }
    

  async activate(): Promise<void> {
    this.tabledata = 
    [
      {id: 1, name: 'Jack'}, 
      {id: 2, name: 'Arnie'}, 
      {id: 3, name: 'Gary'}
    ];
    console.log(this.tabledata);
  }

     /* Define grid Options and Columns */
     defineGrids() {
      this.columnDefinitions = [
        { id: 'id', name: 'Id', field: 'id', sortable: true, minWidth: 25 },
        { id: 'name', name: 'Name', field: 'name', sortable: true, minWidth: 100 }
      ];
      this.gridOptions = {
        enableAutoResize: false,
        enableSorting: true
      };
    }
  
}
