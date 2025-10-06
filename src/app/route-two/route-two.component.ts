import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    console.log("queryParams  : ", this.route.snapshot.queryParams);
    console.log("fragment  : ", this.route.snapshot.fragment);

    this.route.queryParams.subscribe(params => {
      console.log("Query Params:", params);
    });

    this.route.fragment.subscribe(fragment => {
      console.log("Fragment:", fragment);
    });

    this.route.paramMap.subscribe(params => {
      console.log("Route Params:", params);
    });
  }

}
