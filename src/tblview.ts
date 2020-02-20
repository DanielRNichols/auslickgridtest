
export class TblView {
  public heading = 'Table';
   public tabledata: any[] = [];
 

  async activate(): Promise<void> {
    this.tabledata = 
    [
      {id: 1, name: 'Jack'}, 
      {id: 2, name: 'Arnie'}, 
      {id: 3, name: 'Gary'}
    ];
    console.log(this.tabledata);
  }
}
