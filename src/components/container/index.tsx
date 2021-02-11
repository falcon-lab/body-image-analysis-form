import { ReactNode, FunctionComponent } from 'react';

interface IContainer {
  children?: ReactNode;
}

const Container: FunctionComponent<IContainer> = ({ children }) => {
  return (
    <div className="container px-8 max-w-7xl mx-auto">
      {children}
    </div>
  );
}

export default Container;
