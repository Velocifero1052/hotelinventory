import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hilton Hotel';

  hidden: boolean = false;

  roomsCount: number = 20;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  toggle(): void {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioned, One seated, Fridge',
      price: 200,
      'photos': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JbhsI6d_DpTV6QnMGzvO_wHaE8%26pid%3DApi&f=1&ipt=ad5cd3822793f728d906ed0ae2bfb429232301e3379e8718c4fcf5520f42caee&ipo=images',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('20-Nov-2023')
    },
      {
        roomNumber: 2,
        roomType: 'Private Suite',
        amenities: 'Air conditioned, Two seated, Bar only',
        price: 500,
        'photos': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JbhsI6d_DpTV6QnMGzvO_wHaE8%26pid%3DApi&f=1&ipt=ad5cd3822793f728d906ed0ae2bfb429232301e3379e8718c4fcf5520f42caee&ipo=images',
        checkinTime: new Date('01-Oct-2023'),
        checkoutTime: new Date('05-Oct-2023')
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite Lux',
        amenities: 'Air conditioned, Two seated, Fridge, Bar & TV set',
        price: 1000,
        'photos': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JbhsI6d_DpTV6QnMGzvO_wHaE8%26pid%3DApi&f=1&ipt=ad5cd3822793f728d906ed0ae2bfb429232301e3379e8718c4fcf5520f42caee&ipo=images',
        checkinTime: new Date('10-May-2023'),
        checkoutTime: new Date('17-May-2023')
      }
    ];
  }

}
