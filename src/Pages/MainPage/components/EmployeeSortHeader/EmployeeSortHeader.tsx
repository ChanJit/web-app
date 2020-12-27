import React, { useContext } from 'react';
import { PageContext } from '../../../PageProvider/PageProvider';
import './EmployeeSortHeader.less';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import { TSortField, TSortOrder } from '../../../type/TMainPage';
import { sortFunction, mappingField } from '../../mainPageHelper';

const SortIcon = ({ currentField }: { currentField: TSortField }) => {
  const {
    page: { sort },
  } = useContext(PageContext);
  if (currentField === sort?.field) {
    return sort.order === TSortOrder.DESC ? (
      <BsCaretUpFill />
    ) : (
      <BsCaretDownFill />
    );
  }
  return null;
};

const EmployeeSortHeader = () => {
  const { page, setPage } = useContext(PageContext);
  const sortTrigger = (sortField: TSortField): void => {
    if (sortField === page?.sort?.field && page?.employeeData.length > 0) {
      const newOrder: TSortOrder =
        page?.sort?.order === TSortOrder.DESC
          ? TSortOrder.ACS
          : TSortOrder.DESC;
      const result = sortFunction[newOrder](
        page?.employeeData,
        mappingField[page?.sort?.field],
      );
      setPage({
        ...page,
        employeeData: result,
        sort: {
          field: sortField,
          order: newOrder,
        },
      });
    } else {
      const newOrder: TSortOrder = TSortOrder.ACS;
      const result = sortFunction[newOrder](
        page?.employeeData,
        mappingField[sortField],
      );
      setPage({
        ...page,
        employeeData: result,
        sort: {
          field: sortField,
          order: newOrder,
        },
      });
    }
  };
  return (
    <div>
      <div className="employeeSortItem">
        <div
          className="employeeSortInfo"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.FULL_NAME);
          }}
        >
          Full Name <SortIcon currentField={TSortField.FULL_NAME} />
        </div>
        <div
          className="employeeSortInfo"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.JOINED_DATE);
          }}
        >
          Joined Date <SortIcon currentField={TSortField.JOINED_DATE} />
        </div>
        <div
          className="employeeSortInfo"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.SALARY);
          }}
        >
          Salary <SortIcon currentField={TSortField.SALARY} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeSortHeader;
