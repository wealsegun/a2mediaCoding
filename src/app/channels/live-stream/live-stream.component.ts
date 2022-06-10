import { Component, OnInit } from '@angular/core';
import { ChannelModel, EventModel, StreamModel } from '../models/channel.model';
import { ChannelsService } from '../service/channels.service';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {
  streamDetails!: StreamModel;
  liveEvent: EventModel[] = [];
  channelEvents: EventModel[] = [];
  color: string = '';
  constructor(private service: ChannelsService) { }

  ngOnInit(): void {
    this.getLiveStream();
  }

  getLiveStream() {
    this.service.getStreaming().subscribe(response=> {
      this.streamDetails = response;
      const events = response.events.sort((a: any,b: any) => (b)- (a));
      this.liveEvent = events;
    })
  }

  getChannelEventFilter(channel:ChannelModel) {
    const channelEvent = this.liveEvent.filter(c=> c.channelIds.find(c =>  c === channel.id));
    if(channel.id === 1) {
      this.color = "bg-brand-aqua";
    } else if(channel.id === 2) {
      this.color = "bg-brand-lime";
    } else {
      this.color = "bg-brand-purple";
    }
    return channelEvent;
  }
}
