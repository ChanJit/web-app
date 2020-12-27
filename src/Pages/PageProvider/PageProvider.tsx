import { createContext } from 'react';
import { TStatus, TSortOrder, TSortField } from '../type/TMainPage';
import { TPageContext } from '../type/TPageProvider';

const defaultContextValue = {
  page: {
    status: TStatus.LOADING,
    highestEarning: '',
    employeeData: [],
    newJoinerDate: '',
    sort: {
      order: TSortOrder.DESC,
      field: TSortField.JOINED_DATE,
    },
  },
  setPage: () => {},
};

export const PageContext = createContext<TPageContext>(defaultContextValue);

export default PageContext.Provider;
