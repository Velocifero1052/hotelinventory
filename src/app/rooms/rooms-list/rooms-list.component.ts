import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RoomList} from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {

  @Input() roomsList: RoomList[] = [];

  @Output() selectedRoom: EventEmitter<RoomList> = new EventEmitter<RoomList>();

  selectRoom(room: RoomList): void {
    this.selectedRoom.emit(room);
  }

}
