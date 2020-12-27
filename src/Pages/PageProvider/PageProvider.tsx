import { createContext } from 'react';
import { TStatus } from '../type/TMainPage';
import { TPageContext } from '../type/TPageProvider';

const defaultContextValue = {
  page: {
    status: TStatus.LOADING,
    highestEarning: '',
    employeeData: [],
    newJoinerDate: '',
  },
  setPage: () => {},
};

export const PageContext = createContext<TPageContext>(defaultContextValue);

export default PageContext.Provider;
