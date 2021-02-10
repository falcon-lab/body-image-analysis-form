import { ReactNode, FunctionComponent } from 'react';

interface IContainer {
  children?: ReactNode;
}

const Container: FunctionComponent<IContainer> = ({ children }) => {
  return (
    <div className="container mx-auto px-5">
      {children}
    </div>
  );
}

export default Container;
