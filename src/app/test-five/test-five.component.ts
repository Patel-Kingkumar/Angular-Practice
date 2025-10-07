import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-five',
  templateUrl: './test-five.component.html',
  styleUrls: ['./test-five.component.scss'],
})
export class TestFiveComponent implements OnInit {

  employees: any;
  isDispLoader: boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isDispLoader = true;
    this.employees = [
      {
        id: 1,
        name: 'Rohan Verma',
        education: 'B.Tech Computer Science',
        address: 'Bangalore, Karnataka',
        email: 'rohan.verma@example.com',
        phone: '9876543210',
      },
      {
        id: 2,
        name: 'Neha Gupta',
        education: 'MBA Finance',
        address: 'Mumbai, Maharashtra',
        email: 'neha.gupta@example.com',
        phone: '9823456781',
      },
      {
        id: 3,
        name: 'Suresh Yadav',
        education: 'MCA',
        address: 'Delhi',
        email: 'suresh.yadav@example.com',
        phone: '9812345678',
      },
      {
        id: 4,
        name: 'Anjali Mehta',
        education: 'B.Com',
        address: 'Pune, Maharashtra',
        email: 'anjali.mehta@example.com',
        phone: '9123456789',
      },
      {
        id: 5,
        name: 'Kiran Nair',
        education: 'M.Sc IT',
        address: 'Kochi, Kerala',
        email: 'kiran.nair@example.com',
        phone: '9001234567',
      },
    ];
    this.isDispLoader = false;
  }, 5000);
  }
}
