import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
