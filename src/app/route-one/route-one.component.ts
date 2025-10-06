import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})
export class RouteOneComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    console.log("queryParams  : ", this.route.snapshot.queryParams);
    console.log("fragment  : ", this.route.snapshot.fragment);
  }

}
