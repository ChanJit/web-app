import fetch from 'node-fetch';
import dayjs from 'dayjs';
import {
  TDateFormat,
  TEmployeeData,
  TEmployeePageData,
  TEmployeeProcessItem,
  TStatus,
} from '../type/TMainPage';

const convertDateFormat = (isoDateFormat: string): TDateFormat => {
  return {
    dateISOFromat: new Date(isoDateFormat).toISOString(),
    dateDisplayFormat: dayjs(isoDateFormat).format('DD-MM-YYYY'),
  };
};
export const convertDateFormatForTest = convertDateFormat;

const mapEmplyeeData = (employee: TEmployeeData): TEmployeeProcessItem => {
  const dateFromat = convertDateFormat(employee.dateJoined);
  const fullName = `${employee.firstname} ${employee.lastname}`;
  const salaryFormat = `RM ${employee.salary}.00`;
  return {
    ...employee,
    fullName,
    searchText: `${fullName} ${dateFromat.dateDisplayFormat} ${salaryFormat}`,
    ...dateFromat,
  };
};

const getHighestEarning = (employeeData: Array<TEmployeeData>) => {
  return Math.max.apply(
    Math,
    employeeData.map((o: TEmployeeData) => o.salary),
  );
};

export default async (): Promise<TEmployeePageData> => {
  const employeeDataUrl =
    'https://gist.githubusercontent.com/yousifalraheem/354fb07f27f3c145b78d7a5cc1f0da0b/raw/7561f6827775c6a002a93b6b99b12c3c9454a617/data.json';
  try {
    const result = await fetch(employeeDataUrl);
    const employeeData: Array<TEmployeeData> = await result.json();
    return {
      status: TStatus.DONE,
      highestEarning: getHighestEarning(employeeData),
      employeeData: employeeData.map(mapEmplyeeData),
    };
  } catch (e) {
    console.error('Error ', e);
    return {
      status: TStatus.ERROR,
      highestEarning: 0,
      employeeData: [],
    };
  }
};
