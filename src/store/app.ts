import { observable, action } from 'mobx';
import { Http } from '../services/Http';

namespace common {
  export const http: Http = new Http(); 
}

export class AppStore {
  @observable public text: string;

  public constructor() {
    this.text = 'Hello Word!'
  }

  @action public getData = async () => {
    var a = await common.http.Post('url',{})
  }
}