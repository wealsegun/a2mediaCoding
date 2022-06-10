import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseApi } from 'src/app/shared-model/base-api';
import { Observable } from 'rxjs';
import { StreamModel } from '../models/channel.model';
const stream = '82416402-1fb2-4b2b-adae-a21661b4c31a';
@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private httpClient: HttpClient) { }

  getStreaming(): Observable<any> {
    let url = baseApi + stream;
    return this.httpClient.get<StreamModel>(url);
  }
}
