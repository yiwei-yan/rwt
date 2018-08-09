import axios from 'axios';

interface IHttp {
  Get(url: string): Promise<any>;
  Post(url: string, data: any): Promise<any>;
}

export class Http implements IHttp {
  private result: any;

  constructor() {
    axios.defaults.headers['Content-Type'] = 'application/json';
  }

  public async Post(url: string, data: any): Promise<any> {
    return this.result = await axios.post(url, data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  public async Get(url: string): Promise<any> {
    return this.result = await axios.get(url)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}