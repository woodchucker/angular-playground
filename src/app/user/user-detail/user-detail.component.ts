import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    let id: number;
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params && params.get('id')) {
        id = parseInt(params.get('id')!, 10);
        if (!isNaN(id)) {
          // this.users[id];
        }
        // this.loadLocations();
        // this.loadCategories();

      }
    });
  }

}
