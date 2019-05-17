import { Component, OnInit } from '@angular/core';


import { EventService } from '../../services/serviceEvent/event.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  eventos: any[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventos = [];
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var evento = result[i];
          this.eventos.push(evento);
        }
      })
  }

}
