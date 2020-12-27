import React, { useState, useEffect } from 'react';
import './MainPage.less';
import {
  TEmployeePageData,
  TStatus,
  TSortOrder,
  TSortField,
} from '../type/TMainPage';
import getEmployeeData from './mainPageHelper';
import Spinner from 'react-bootstrap/Spinner';
import PageLayout from '../../common/PageLayout/PageLayout';
import EmployeeInformation from './components/EmployeeInformation/EmployeeInformation';
import EmployeeCardList from './components/EmployeeCardList/EmployeeCardList';
import EmployeeSortHeader from './components/EmployeeSortHeader/EmployeeSortHeader';
import PageProvider from '../PageProvider/PageProvider';

const MainPage = () => {
  const defaultContextValue = {
    status: TStatus.LOADING,
    highestEarning: 'RM 0.00',
    newJoinerDate: 'dd/mm/yyy',
    employeeData: [],
    sort: {
      order: TSortOrder.DESC,
      field: TSortField.JOINED_DATE,
    },
  };

  const [page, setPage] = useState<TEmployeePageData>(defaultContextValue);
  const getData = async () => {
    const returnValue = await getEmployeeData({
      order: TSortOrder.DESC,
      field: TSortField.JOINED_DATE,
    });
    setPage(returnValue);
  };

  useEffect(() => {
    getData();
  }, []);

  if (page.status === TStatus.DONE) {
    return (
      <PageProvider value={{ page, setPage }}>
        <PageLayout>
          <EmployeeInformation />
          <EmployeeSortHeader />
          <EmployeeCardList />
        </PageLayout>
      </PageProvider>
    );
  } else if (page.status === TStatus.ERROR) {
    <PageLayout>
      <p>Error</p>
    </PageLayout>;
  }
  return (
    <PageLayout>
      <p>loading</p>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </PageLayout>
  );
};

export default MainPage;
