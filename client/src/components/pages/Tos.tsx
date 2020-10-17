import React from 'react';
import Layout from '../templates/Layout';

interface Props {
  currentUser: PartialUserType;
}

const Tos: React.FC<Props> = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>About</Layout>;
};

export default Tos;
