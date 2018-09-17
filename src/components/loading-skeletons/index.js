import React from 'react';
import { Skeleton } from 'antd';

export const ActiveSkeleton = (props) => {
  return (
    <Skeleton active {...props} />
  );
};
