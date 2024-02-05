import React from 'react';
import AdminNavBar from './AdminNavbar';
import ManageComments from './ManageComments';

function PageManageComments({ review }) {
  return (
    <div style={{ paddingTop: '50px' }}>
      <AdminNavBar/>
      <ManageComments review={review}/>
    </div>
  );
}

export default PageManageComments;
