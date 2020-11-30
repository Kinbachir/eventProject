import { Injectable } from '@angular/core';
import {EventGestionModel} from "../modele/event";

@Injectable()
export class EventServiceService {
  eventList:Array<EventGestionModel>=new Array<EventGestionModel>() ;
  constructor() { }
  getAll(): Array<EventGestionModel> {
    return this.eventList;
  }

  get(index): EventGestionModel {
    return this.eventList[index];
  }

  create(data) {
    return this.eventList.push(data);
  }

  update(index, data){
    return this.eventList[index] = data;
  }

  delete(index){
    return this.eventList.splice(index, 1);;
  }
}
