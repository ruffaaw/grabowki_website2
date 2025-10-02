import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mieszkanie } from './apartmentsData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-houses',
  standalone: true,
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  imports: [CommonModule],
})
export class HousesComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;

  constructor(private http: HttpClient) {}
  houses: any[] = [];
  selectedHouse: any = null;
  selectedFloor: boolean = true;

  ngOnInit() {
    this.selectedFloor = true;
    this.getData();
  }

  getData() {
    const url =
      'https://oku1rgj6kg.execute-api.eu-central-1.amazonaws.com/prod/get-items';
    this.http.get<{ body: any[] }>(url).subscribe(
      (response) => {
        this.houses = response.body.sort((a, b) => {
          const numA = parseInt(a.id, 10);
          const numB = parseInt(b.id, 10);

          if (numA !== numB) {
            return numA - numB;
          }

          const letterA = a.id.replace(/^\d+/, '');
          const letterB = b.id.replace(/^\d+/, '');

          return letterA.localeCompare(letterB);
        });
        this.selectHouse(this.houses[0], 0);
      },
      (error) => {
        console.error('Error in fetching houses from DynamoDB!', error);
      }
    );
  }

  toggleTooltip(house: Mieszkanie) {
    (house as any).showTooltip = !(house as any).showTooltip;
  }

  selectHouse(selectedHouse: Mieszkanie, index: number) {
    this.selectedHouse = selectedHouse;

    setTimeout(() => {
      const house = document.getElementById('house-' + index);
      const tableContainer = document.querySelector(
        '.table-container'
      ) as HTMLElement;

      if (house && tableContainer) {
        const elementPosition =
          house.getBoundingClientRect().top -
          tableContainer.getBoundingClientRect().top;
        tableContainer.scrollTo({
          top: elementPosition + tableContainer.scrollTop,
          behavior: 'smooth',
        });
      }
    }, 0);
  }

  downloadPDF(houseNumber: string) {
    const link = document.createElement('a');
    link.href = 'assets/jpgs/' + houseNumber + '.jpg';
    link.download = houseNumber + '.jpg';
    link.click();
  }

  getImageURL(imagePath: string) {
    return 'assets/rzuty/' + imagePath;
  }

  parseInt(houseNumber: string): number {
    return parseInt(houseNumber, 10);
  }

  getIEtapHouses(): Mieszkanie[] {
    return this.houses;
  }
}
