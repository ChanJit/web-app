import { TStatus, TEmployeePageData } from './TMainPage';

export interface TPageContext {
  page: TEmployeePageData;
  setPage: React.Dispatch<React.SetStateAction<TEmployeePageData>>;
}
