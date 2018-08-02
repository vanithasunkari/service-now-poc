import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { ListserviceService } from '../../shared/services/listservice.service';
import { FilterListPipe } from '../../shared/pipes/filter-list.pipe';
import { DragulaModule } from 'ng2-dragula';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragulaModule,
    InfiniteScrollModule
  ],
  declarations: [usersComponent,  FilterListPipe],
  providers: [ListserviceService]
})
export class usersModule { }
