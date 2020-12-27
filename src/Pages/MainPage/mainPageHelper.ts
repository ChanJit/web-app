import fetch from 'node-fetch';
import dayjs from 'dayjs';
import {
  TDateFormat,
  TEmployeeData,
  TEmployeePageData,
  TEmployeeProcessItem,
  TStatus,
} from '../type/TMainPage';

const getCurrencyFormat = (salary: number): string => {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'MYR',
  }).format(salary);
};

const getDateFormat = (date: number | string): string => {
  return dayjs(date).format('DD-MM-YYYY');
};

const convertDateFormat = (isoDateFormat: string): TDateFormat => {
  return {
    dateISOFromat: new Date(isoDateFormat).toISOString(),
    dateDisplayFormat: getDateFormat(isoDateFormat),
    dateValue: new Date(isoDateFormat).valueOf(),
  };
};
export const convertDateFormatForTest = convertDateFormat;

const mapEmplyeeData = (employee: TEmployeeData): TEmployeeProcessItem => {
  const dateFromat = convertDateFormat(employee.dateJoined);
  const fullName = `${employee.firstname} ${employee.lastname}`;
  const displaySalary = getCurrencyFormat(employee.salary);
  return {
    ...employee,
    fullName,
    searchText: `${fullName} ${dateFromat.dateDisplayFormat} ${displaySalary}`,
    displaySalary,
    ...dateFromat,
  };
};

const getHighestEarning = (
  employeeData: Array<TEmployeeProcessItem>,
): string => {
  const highestEarning = Math.max.apply(
    Math,
    employeeData.map((o: TEmployeeProcessItem) => o.salary),
  );
  return getCurrencyFormat(highestEarning);
};

const getNewJoinerDate = (
  employeeData: Array<TEmployeeProcessItem>,
): string => {
  const newJoinerDate = Math.max.apply(
    Math,
    employeeData.map((o: TEmployeeProcessItem) => o.dateValue),
  );
  return getDateFormat(newJoinerDate);
};

const getEmployeeData = async (): Promise<TEmployeePageData> => {
  const employeeDataUrl =
    'https://gist.githubusercontent.com/yousifalraheem/354fb07f27f3c145b78d7a5cc1f0da0b/raw/7561f6827775c6a002a93b6b99b12c3c9454a617/data.json';
  try {
    const result = await fetch(employeeDataUrl);
    const employeeData: Array<TEmployeeData> = await result.json();
    const processedData: Array<TEmployeeProcessItem> = employeeData.map(
      mapEmplyeeData,
    );

    return {
      status: TStatus.DONE,
      highestEarning: getHighestEarning(processedData),
      newJoinerDate: getNewJoinerDate(processedData),
      employeeData: processedData,
    };
  } catch (e) {
    console.error('Error ', e);
    return {
      status: TStatus.ERROR,
      highestEarning: 'RM 0.00',
      newJoinerDate: 'dd/mm/yyyy',
      employeeData: [],
    };
  }
};

export default getEmployeeData;
