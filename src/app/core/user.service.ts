import { Injectable, Optional } from '@angular/core';

// Proves that UserService is an app-wide singleton and only instantiated once
// IFF shared.module follows the `forRoot` pattern.
//
// If it didn't, a new instance of UserService would be created
// after each lazy load and the userName would double up.

let nextId = 1;

export class UserServiceConfig {
    userName = 'Philip Marlowe';
}


/**
 * 在CoreModule中注册为全局服务
 * 在CustomerComponent中注册为组件服务
 */
@Injectable()
export class UserService {
    id = nextId++;
    private _userName = 'Sherlock Holmes';

    constructor(@Optional() config: UserServiceConfig) {
        if (config) {
            this._userName = config.userName;
        }
    }

    get userName() {
        // Demo: add a suffix if this service has been created more than once
        const suffix = this.id > 1 ? ` times ${this.id} ` : '';
        return this._userName + suffix;
    }
}
