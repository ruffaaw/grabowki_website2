import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mieszkania, Mieszkanie } from './apartmentsData';

@Component({
  selector: 'app-houses',
  standalone: true,
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
  imports: [CommonModule],
})
export class HousesComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;

  houses: Mieszkanie[] = [];
  selectedHouse: Mieszkanie | null = null;
  selectedFloor: boolean = true;

  ngOnInit() {
    this.selectedFloor = true;
    this.getData();
  }

  getData() {
    // przypisanie danych lokalnych i sortowanie
    this.houses = mieszkania
      .filter((m) => {
        // filtrujemy mieszkania z id mniejszym niż 5
        const num = parseInt(m.id, 10);
        return num < 5;
      })
      .sort((a, b) => {
        // sortujemy najpierw po numerze (cyfry w id)
        const numA = parseInt(a.id, 10);
        const numB = parseInt(b.id, 10);
        if (numA !== numB) return numA - numB;

        // jeśli numery są takie same, sortujemy po literze
        const letterA = a.id.replace(/^\d+/, '');
        const letterB = b.id.replace(/^\d+/, '');
        return letterA.localeCompare(letterB);
      });

    // wybieramy pierwsze mieszkanie
    if (this.houses.length > 0) {
      this.selectHouse(this.houses[0], 0);
    }
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
