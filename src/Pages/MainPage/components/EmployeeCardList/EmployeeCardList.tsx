import React, { useContext } from 'react';
import { PageContext } from '../../../PageProvider/PageProvider';

const EmployeeCardList = () => {
  const employeeData = useContext(PageContext);
  const employeeList = employeeData?.page?.employeeData;
  return (
    <div>
      {employeeList?.length > 0 &&
        employeeList.map((employee) => (
          <div>
            <p>{`${employee?.fullName} ${employee?.displaySalary} ${employee?.dateDisplayFormat}`}</p>
          </div>
        ))}
    </div>
  );
};

export default EmployeeCardList;
