import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customer.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,
        children: [
            { path: '', component: CustomerListComponent },
            { path: ':id', component: CustomerDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule { }
