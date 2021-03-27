import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private storageService: StorageService) { }

    public async setToken(token: string) {
        await this.storageService.setData('token', JSON.stringify(token));
    }

    public async getToken() {
        return await this.storageService.getData('token');
    }

    public async removeToken() {
        await this.storageService.removeData('token');
    }
}