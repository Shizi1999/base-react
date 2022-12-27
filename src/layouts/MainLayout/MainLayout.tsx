export type LayoutProp = {
  children: React.ReactNode;
};

const MainLayout: React.FC<LayoutProp> = (props) => {
  return <div>{props.children}</div>;
};

export default MainLayout;
