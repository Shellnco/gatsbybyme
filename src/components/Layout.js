import React from 'react';
import Analytics from './Analytics';

/**
 * Layout component for the entire Gatsby site
 * This wraps all pages and includes the Vercel Analytics component
 */
export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
};

export default Layout;
