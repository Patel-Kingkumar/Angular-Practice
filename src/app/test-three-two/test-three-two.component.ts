import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-three-two',
  templateUrl: './test-three-two.component.html',
  styleUrls: ['./test-three-two.component.scss']
})
export class TestThreeTwoComponent implements OnInit {

  componentId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    var id = this.route.snapshot.paramMap.get('id');
    console.log("id  : ", id);
    this.componentId = id;
  }

}
