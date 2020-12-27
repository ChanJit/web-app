import React from 'react';
import './PageLayout.less';

interface TPageLayout{
    children: React.ReactNode
}

export default ({children}: TPageLayout) => {
  return (
    <div className="backdrop">
      <div className="app">{children}</div>
    </div>
  );
};
