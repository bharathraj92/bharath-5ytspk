export interface Employee {
  id: number | null;
  employeeName: string;
  employeeCode: string;
  location?: string;
  Exp?: number;
}

export const employee: Employee[] = [
  {
    id: 1,
    employeeName: 'Bharath',
    employeeCode: 'CM700',
    Exp: 4.0
  },
  {
    id: 2,
    employeeName: 'Ravi',
    employeeCode: 'LK700',
    Exp: 4.1
  },
  {
    id: 3,
    employeeName: 'Raj',
    employeeCode: 'TPL700',
    Exp: 4.2
  },
  {
    id: 4,
    employeeName: 'Manoj',
    employeeCode: 'CM700',
    Exp: 4.0
  },
  {
    id: 5,
    employeeName: 'Bharath Raj',
    employeeCode: 'LK700',
    Exp: 4.1
  },
  {
    id: 6,
    employeeName: 'Pitla',
    employeeCode: 'TPL700',
    Exp: 4.2
  }
];
