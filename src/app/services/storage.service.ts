import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    
  }

  async setObject(key: string, object: Object){
    await Storage.set({key, value: JSON.stringify(object)});
  }

  async setData(key: string, value: string) {
    await Storage.set({ key, value });
  }
  
  async getData(key: string): Promise<string> {
    const result = await Storage.get({ key });
    const data = JSON.parse(result.value);
    return data;
  }

  async removeData(key: string) {
    await Storage.remove({key});
  }

}
