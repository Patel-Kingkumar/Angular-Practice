import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss'],
})
export class TestTwoComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.filteredData = [...this.students];
  }

  filteredData: any = [];
  filterText: any
  students = [
    {
      id: 1,
      name: 'Ravi Patel',
      class: '10A',
      address: 'Ahmedabad, Gujarat',
      email: 'ravi.patel@example.com',
      phone: '9876543210',
    },
    {
      id: 2,
      name: 'Sneha Sharma',
      class: '10B',
      address: 'Jaipur, Rajasthan',
      email: 'sneha.sharma@example.com',
      phone: '9123456780',
    },
    {
      id: 3,
      name: 'Amit Kumar',
      class: '9A',
      address: 'Patna, Bihar',
      email: 'amit.kumar@example.com',
      phone: '9998887776',
    },
    {
      id: 4,
      name: 'Priya Singh',
      class: '8C',
      address: 'Lucknow, Uttar Pradesh',
      email: 'priya.singh@example.com',
      phone: '9812345678',
    },
    {
      id: 5,
      name: 'Rahul Mehta',
      class: '9B',
      address: 'Surat, Gujarat',
      email: 'rahul.mehta@example.com',
      phone: '9823456781',
    },
    {
      id: 6,
      name: 'Kavya Reddy',
      class: '10C',
      address: 'Hyderabad, Telangana',
      email: 'kavya.reddy@example.com',
      phone: '9845123456',
    },
    {
      id: 7,
      name: 'Arjun Das',
      class: '8B',
      address: 'Kolkata, West Bengal',
      email: 'arjun.das@example.com',
      phone: '9876012345',
    },
    {
      id: 8,
      name: 'Meena Joshi',
      class: '9A',
      address: 'Pune, Maharashtra',
      email: 'meena.joshi@example.com',
      phone: '9123409876',
    },
    {
      id: 9,
      name: 'Vikram Nair',
      class: '10A',
      address: 'Kochi, Kerala',
      email: 'vikram.nair@example.com',
      phone: '9012345678',
    },
    {
      id: 10,
      name: 'Tina Kapoor',
      class: '8A',
      address: 'Delhi',
      email: 'tina.kapoor@example.com',
      phone: '9991234567',
    },
  ];

  onChange() {
    console.log('ran');
    this.filteredData = this.students.filter(
      datum => (datum.name.indexOf(this.filterText) > -1 || datum.name.indexOf(this.filterText) > -1));

    console.log(this.filteredData);

  }

}
