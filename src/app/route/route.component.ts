import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onTwo() {
    this.router.navigate(['/route-two'], { queryParams: { name: 'Patel Kano', education: 'MscIT' }, fragment: 'two' });
  }

}
