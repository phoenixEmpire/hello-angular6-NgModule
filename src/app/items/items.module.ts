import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './item.component';
import { ItemsListComponent } from './items-list.component';
import { ItemsDetailComponent } from './items-detail.component';
import { ItemService } from './items.service';

@NgModule({
    imports: [CommonModule, ItemsRoutingModule],
    declarations: [ItemsComponent, ItemsListComponent, ItemsDetailComponent],
    providers: [ItemService]
})
export class ItemsModule { }
