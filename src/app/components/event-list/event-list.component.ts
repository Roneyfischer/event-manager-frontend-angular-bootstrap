import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {


  events = [
    {
      name: `Evento 01`,
      liteDescription: `Ipsum lorem`,
      category: `Educação`,
      group: `pastores`,
      date: '25/11/2022',
      createDate: '25/11/2022',
      status: `aguardando`,
      link: `https://google.com`,
    },
    {
      name: `Evento 01`,
      liteDescription: `Ipsum lorem`,
      category: `Educação`,
      group: `pastores`,
      date: '25/11/2022',
      createDate: '25/11/2022',
      status: `aguardando`,
      link: `https://google.com`,
    },
    {
      name: `Evento 01`,
      liteDescription: `Ipsum lorem`,
      category: `Educação`,
      group: `pastores`,
      date: '25/11/2022',
      createDate: '25/11/2022',
      status: `aguardando`,
      link: `https://google.com`,
    },
  ];
}
