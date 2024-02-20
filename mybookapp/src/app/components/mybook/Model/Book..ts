export class Book{


   constructor( private _bkid: number=0, private _bkname: string='bookname', private _bkprice: number=0.0){
      
   }


    public get bkprice(): number {
        return this._bkprice;
    }
    public set bkprice(value: number) {
        this._bkprice = value;
    }
    public get bkname(): string {
        return this._bkname;
    }
    public set bkname(value: string) {
        this._bkname = value;
    }
    public get bkid(): number {
        return this._bkid;
    }
    public set bkid(value: number) {
        this._bkid = value;
    }
  

 

public toString():string{
    return "bkid:"+" "+this._bkid+" "+"bkname:"+" "+this._bkname+" "+"bkprice:"+" "+this._bkprice;
   }


}