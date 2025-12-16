import React, { useEffect } from 'react';
import { inject } from '@vercel/analytics';

/**
 * Analytics component for Gatsby
 * Uses the inject() function from @vercel/analytics which adds the tracking script
 * This component should be included in your layout or main app wrapper
 */
export const Analytics = () => {
  useEffect(() => {
    // Initialize analytics on component mount
    // This will only run once due to the useEffect dependency array
    inject();
  }, []);

  return null;
};

export default Analytics;
