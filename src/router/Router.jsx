import { Navigate, Route, Routes } from 'react-router-dom';

import { Produtos } from '@pages';

export const Router = () => {
  return (
    <Routes>
      <Route path='/produtos' element={<Produtos />} />
      <Route path='*' element={<Navigate to={'/produtos'} replace={true} />} />
    </Routes>
  );
};