import React, { useContext } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import './EmployeeInformation.less';
import { PageContext } from '../../../PageProvider/PageProvider';

export default () => {
  const employeeData = useContext(PageContext);
  return (
    <div>
      <BsPeopleFill />
      <p>{employeeData?.page?.employeeData?.length}</p>
    </div>
  );
};
