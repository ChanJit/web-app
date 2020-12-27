import React from 'react';
import './PageLayout.less';

interface TPageLayout {
  children: React.ReactNode;
}

const PageLayout = ({ children }: TPageLayout) => {
  return (
    <div className="backdrop">
      <div className="app">{children}</div>
    </div>
  );
};

export default PageLayout;
