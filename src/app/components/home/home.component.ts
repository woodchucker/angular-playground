import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() { }
  today = new Date();
  users = [
    {
      name: 'Mario',
      surname: 'Rossi'
    },
    {
      name: 'Ale',
      surname: 'Del Piero'
    },
    {
      name: 'Paolo',
      surname: 'Val Verde'
    },
  ]
  ngOnInit(): void {
  }

}
