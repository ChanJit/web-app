export interface TDateFormat {
  dateISOFromat: string;
  dateDisplayFormat: string;
  dateValue: number;
}
export interface TEmployeeData {
  id: number;
  employeeId: string;
  firstname: string;
  lastname: string;
  dateJoined: string;
  salary: number;
}
export interface TEmployeeProcessItem extends TEmployeeData, TDateFormat {
  searchText: string;
  fullName: string;
  displaySalary: string;
}
export enum TStatus {
  LOADING = 'LOADING',
  DONE = 'DONE',
  ERROR = 'ERROR',
}
export enum TSortOrder {
  ACS = 'ACS',
  DESC = 'DESC',
}
export enum TSortField {
  JOINED_DATE = 'JOINED_DATE',
  FULL_NAME = 'FULL_NAME',
  SALARY = 'SALARY',
}

export interface TSort {
  order: TSortOrder;
  field: TSortField;
}

export interface TEmployeePageData {
  status: TStatus;
  highestEarning: string;
  newJoinerDate: string;
  employeeData: Array<TEmployeeProcessItem>;
  sort?: TSort;
}
