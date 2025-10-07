import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-six',
  templateUrl: './test-six.component.html',
  styleUrls: ['./test-six.component.scss'],
})
export class TestSixComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  selectedCountry: any;
  stateList: any
  countryStateList = [
    {
      country: 'India',
      states: ['Gujarat', 'Maharashtra', 'Rajasthan', 'Punjab', 'Kerala'],
    },
    {
      country: 'United States',
      states: ['California', 'Texas', 'New York', 'Florida', 'Illinois'],
    },
    {
      country: 'Canada',
      states: ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba'],
    },
    {
      country: 'Australia',
      states: [
        'New South Wales',
        'Victoria',
        'Queensland',
        'Tasmania',
        'Western Australia',
      ],
    },
    {
      country: 'Germany',
      states: ['Bavaria', 'Berlin', 'Hamburg', 'Saxony', 'Hesse'],
    },
    {
      country: 'United Kingdom',
      states: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    },
    {
      country: 'Brazil',
      states: [
        'São Paulo',
        'Rio de Janeiro',
        'Bahia',
        'Paraná',
        'Minas Gerais',
      ],
    },
    {
      country: 'France',
      states: [
        'Île-de-France',
        'Normandy',
        'Brittany',
        'Provence-Alpes-Côte d’Azur',
        'Occitanie',
      ],
    },
    {
      country: 'Japan',
      states: ['Tokyo', 'Osaka', 'Hokkaido', 'Kyoto', 'Fukuoka'],
    },
    {
      country: 'China',
      states: ['Beijing', 'Shanghai', 'Guangdong', 'Zhejiang', 'Sichuan'],
    },
    {
      country: 'Italy',
      states: ['Lombardy', 'Lazio', 'Tuscany', 'Sicily', 'Veneto'],
    },
    {
      country: 'Mexico',
      states: ['Jalisco', 'Puebla', 'Chihuahua', 'Nuevo León', 'Yucatán'],
    },
    {
      country: 'South Africa',
      states: [
        'Gauteng',
        'Western Cape',
        'KwaZulu-Natal',
        'Limpopo',
        'Mpumalanga',
      ],
    },
    {
      country: 'Russia',
      states: [
        'Moscow',
        'Saint Petersburg',
        'Krasnodar',
        'Tatarstan',
        'Sverdlovsk',
      ],
    },
    {
      country: 'Indonesia',
      states: ['Jakarta', 'Bali', 'Java', 'Sumatra', 'Sulawesi'],
    },
  ];

  onSelected(event: any) {
    this.selectedCountry = event.target.value;
    var stateList = this.countryStateList.filter((data) => {
      return data.country == this.selectedCountry;
    })
    this.stateList = stateList[0]?.states;
  }
}
