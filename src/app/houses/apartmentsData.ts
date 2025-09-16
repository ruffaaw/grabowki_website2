export type Mieszkanie = {
  id: string;
  nazwa: string;
  status: number;
  cena: number;
  metraz: number;
  pokoje: number | string;
  ogrodek?: number | string;
  taras?: number | string;
  xD?: number;
  yD?: number;
  xM?: number;
  yM?: number;
  showTooltip?: boolean;
  obrazek?: string;
  obrazekPoddasze?: string;
  cena30?: number | string;
};

export const mieszkania: Mieszkanie[] = [
  {
    id: '1a',
    nazwa: 'Mieszkanie 1a',
    status: 1,
    cena: 1,
    metraz: 62.2,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '1b',
    nazwa: 'Mieszkanie 1b',
    status: 1,
    cena: 1,
    metraz: 104.92,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
  {
    id: '2a',
    nazwa: 'Mieszkanie 2a',
    status: 1,
    cena: 1,
    metraz: 61.98,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '2b',
    nazwa: 'Mieszkanie 2b',
    status: 1,
    cena: 1,
    metraz: 104.92,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
  {
    id: '3a',
    nazwa: 'Mieszkanie 3b',
    status: 1,
    cena: 62.2,
    metraz: 1,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '3b',
    nazwa: 'Mieszkanie 3b',
    status: 1,
    cena: 1,
    metraz: 104.92,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
  {
    id: '4a',
    nazwa: 'Mieszkanie 4b',
    status: 1,
    cena: 1,
    metraz: 61.98,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '4b',
    nazwa: 'Mieszkanie 4b',
    status: 1,
    cena: 1,
    metraz: 104.92,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
  {
    id: '5a',
    nazwa: 'Mieszkanie 5a',
    status: 1,
    cena: 1,
    metraz: 61.98,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '5b',
    nazwa: 'Mieszkanie 5b',
    status: 1,
    cena: 1,
    metraz: 104.92,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
  {
    id: '6a',
    nazwa: 'Mieszkanie 6a',
    status: 1,
    cena: 1,
    metraz: 62.2,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '6b',
    nazwa: 'Mieszkanie 6b',
    status: 1,
    cena: 1,
    metraz: 104.92,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
  {
    id: '7a',
    nazwa: 'Mieszkanie 7b',
    status: 1,
    cena: 1,
    metraz: 61.98,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '7b',
    nazwa: 'Mieszkanie 7b',
    status: 1,
    cena: 104.92,
    metraz: 1,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
  {
    id: '8a',
    nazwa: 'Mieszkanie 8b',
    status: 1,
    cena: 62.2,
    metraz: 1,
    pokoje: '-',
    ogrodek: '-',
    cena30: 1,
  },
  {
    id: '8b',
    nazwa: 'Mieszkanie 8b',
    status: 1,
    cena: 1,
    metraz: 104.92,
    pokoje: '-',
    cena30: 1,
    taras: '12.4',
  },
];
