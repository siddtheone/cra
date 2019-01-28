import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import Incident from './Incident';
import APP_CONFIG from '../constants';

const Incidents = (props) => {
  const {
    incidents,
    page, onPageChange
  } = props;
  const start = (page-1)*APP_CONFIG.RECORDS_PER_PAGE;

  return (
    <div>
      <div className="text-right">Total: {incidents.length}</div>
      {incidents.length > 0
        ? incidents.slice(start, start + APP_CONFIG.RECORDS_PER_PAGE).map(ele => <Incident key={ele.id} {...ele} />)
        : <div>No results found</div>}
      {incidents.length > APP_CONFIG.RECORDS_PER_PAGE
        ?  <Pagination
              className="ant-pagination"
              onChange={onPageChange}
              current={page}
              total={incidents.length}
            />
        : null}
    </div>
  );
}

export default Incidents;
