import { Injectable } from '@angular/core';

  //can also use providers :iniside @Component to declare service at componen (and all its childcomponent level)
@Injectable({
  providedIn: 'root'   

})
export class BookdaoService {

  constructor() { }
}
