import React from 'react';
import { ActiveSkeleton } from 'components/loading-skeletons';

const WebhookLoadingSkeleton = () => (
  <div>
    <ActiveSkeleton paragraph={false} />
    <ActiveSkeleton />
    <ActiveSkeleton />
    <ActiveSkeleton />
    <ActiveSkeleton paragraph={false} />
  </div>
);

export default WebhookLoadingSkeleton;
