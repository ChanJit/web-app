import React, { useState, useEffect } from 'react';
import './MainPage.less';
import { TEmployeePageData, TStatus } from '../type/TMainPage';
import getEmployeeData from './mainPageHelper';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import PageLayout from '../../common/PageLayout/PageLayout';
import EmployeeInformation from './components/EmployeeInformation/EmployeeInformation';
import PageProvider from '../PageProvider/PageProvider';

const MainPage = () => {
  const defaultContextValue = {
    status: TStatus.LOADING,
    highestEarning: 'RM 0.00',
    newJoinerDate: 'dd/mm/yyy',
    employeeData: [],
  };

  const [page, setPage] = useState<TEmployeePageData>(defaultContextValue);
  const getData = async () => {
    const returnValue = await getEmployeeData();
    setPage(returnValue);
  };

  useEffect(() => {
    getData();
  }, []);

  if (page.status === TStatus.DONE) {
    return (
      <PageProvider value={{ page, setPage }}>
        <PageLayout>
          <div>
            <EmployeeInformation />
            <p>data recieved</p>
            <Button>testing</Button>
          </div>
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
      <div>
        <p>loading</p>
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    </PageLayout>
  );
};

export default MainPage;
