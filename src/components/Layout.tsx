interface Props {
  children: React.ReactNode;
  classProps?: string;
}
export default function Layout({ children, classProps }: Props) {
  return <div className={`${classProps} h-screen pt-[150px]`}>{children}</div>;
}
