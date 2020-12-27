
export interface TDateFormat {
    dateISOFromat: string,
    dateDisplayFormat: string
  }
  export interface TEmployeeData {
    id: number,
    employeeId: string,
    firstname: string,
    lastname: string,
    dateJoined: string,
    salary: number,
  }
  export interface TEmployeePageData extends TEmployeeData, TDateFormat{
    searchText: string,
    fullName: string,
  }
