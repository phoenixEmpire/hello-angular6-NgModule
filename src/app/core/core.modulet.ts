import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { UserService, UserServiceConfig } from './user.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    imports: [CommonModule],
    declarations: [TitleComponent],
    exports: [TitleComponent],
    providers: [UserService]
})
export class CoreModule {
    constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}
