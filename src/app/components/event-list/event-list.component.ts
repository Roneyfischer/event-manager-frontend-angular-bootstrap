import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  events = [
    {
      eventName: `Evento 01`,
      eventLiteDescription: `Ipsum lorem`,
      eventCategory: `Educação`,
      eventGroup: `pastores`,
      eventDate: '25/11/2022',
    },
    {
      eventName: `Passeio no parque`,
      eventLiteDescription: `descrição do eventodescrição do eventodescrição do eventodescrição do evento descrição do evento descrição do evento`,
      eventCategory: `Confraternização`,
      eventGroup: `Umadc`,
      eventDate: '2/11/2022',
    },
    {
      eventName: `Ǹome do evento`,
      eventLiteDescription: `descrição do evento`,
      eventCategory: `Ensino`,
      eventGroup: `pastores`,
      eventDate: '25/11/2022',
    },
  ];
}
