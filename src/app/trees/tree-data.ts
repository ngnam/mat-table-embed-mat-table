export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  children?: PeriodicElement[];
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', children: [
      { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 21, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 31, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 41, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 51, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 61, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ]
  },
  {
    position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', children: [
      { position: 111, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 211, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 311, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 411, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 511, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 611, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ]
  },
  {
    position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', children: [
      { position: 112, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 212, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 312, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 412, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 512, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 612, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ]
  },
  {
    position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', children: [
      { position: 113, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 213, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 313, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 413, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 513, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 613, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ]
  },
  {
    position: 5, name: 'Boron', weight: 10.811, symbol: 'B', children: [
      { position: 114, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 214, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 314, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 414, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 514, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 614, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ]
  },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
