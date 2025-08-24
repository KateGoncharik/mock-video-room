import { Route, Routes } from 'react-router-dom';
import App from './App';
import { Room } from './Room';
import { NotFound } from './404';

export const AppRouter = () => (
  <Routes>
    <Route path={'/'} element={<App />} />
    <Route path={'/room/:id'} element={<Room />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
