import { Outlet } from 'react-router-dom';
import Toast from './Toast';

interface Props {
  children?: React.ReactNode;
  classProps?: string;
}
export default function Layout({ children, classProps }: Props) {
  return (
    <div className={`${classProps} h-screen w-full pt-[150px]`}>
      {children}
      <Toast />
      <Outlet />
    </div>
  );
}