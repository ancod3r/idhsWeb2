import React from 'react';
import LoggedUser from './LoggedUser';
import Layout from '../../components/layout/Layout';

function UserHome() {
  return (
    <Layout>
      <LoggedUser />
    </Layout>
  );
};

export default UserHome;
