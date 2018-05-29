import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customer.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomersService } from './customers.service';

@NgModule({
    imports: [SharedModule, CustomersRoutingModule],
    declarations: [
        CustomersComponent, CustomerListComponent, CustomerDetailComponent
    ],
    providers: [CustomersService]
})
export class CustomersModule { }
