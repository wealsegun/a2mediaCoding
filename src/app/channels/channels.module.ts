import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { RouterModule } from '@angular/router';
import { LiveStreamLayoutComponent } from './live-stream-layout/live-stream-layout.component';
import { ChannelsService } from './service/channels.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LiveStreamComponent,
    LiveStreamLayoutComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    RouterModule,
  ],
  exports: [
    LiveStreamLayoutComponent
  ],
  providers: [ChannelsService]
})
export class ChannelsModule { }
