import React from 'react';
import { ActiveSkeleton } from 'components/loading-skeletons';

const WebhookLoadingSkeleton = () => (
  <div>
    <ActiveSkeleton paragraph={false} />
    <ActiveSkeleton paragraph={false} />
    <ActiveSkeleton paragraph={false} />
    <ActiveSkeleton paragraph={false} />
    <ActiveSkeleton paragraph={false} />
    <ActiveSkeleton paragraph={false} />
    <ActiveSkeleton paragraph={false} />
  </div>
);

export default WebhookLoadingSkeleton;
