export class StreamModel {
  currentTime: string = '';
  channelIds: ChannelModel[] = [];
  events: EventModel[] = [];
}

export class ChannelModel {
  id: number = 0;
  name: string = '';
}

export class EventModel {
  name: string = '';
  start: string = '';
  end: string = '';
  tags: string[] = [];
  channelIds: number[] = [];
}
