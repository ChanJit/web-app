import { createContext, useState } from 'react';
import { TEmployeePageData, TStatus } from '../type/TMainPage';
import { TPageContext } from '../type/TPageProvider';

const defaultContextValue = {
  page: { status: TStatus.LOADING, highestEarning: 0, employeeData: [] },
  setPage: () => {},
};

export const PageContext = createContext<TPageContext>(defaultContextValue);

export default PageContext.Provider;
