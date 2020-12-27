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
    highestEarning: 0,
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
  // return (
  //   <PageLayout>
  //     <div>
  //       <p>loading</p>
  //       <Spinner animation="grow" />
  //       <Spinner animation="grow" />
  //       <Spinner animation="grow" />
  //       <Spinner animation="grow" />
  //       <Spinner animation="grow" />
  //     </div>
  //   </PageLayout>
  // );
};

export default MainPage;
