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
  LOADING = 'loading',
  DONE = 'done',
  ERROR = 'error',
}
export interface TEmployeePageData {
  status: TStatus;
  highestEarning: string;
  newJoinerDate: string;
  employeeData: Array<TEmployeeProcessItem | null>;
}
