import React from 'react';

import { LayoutProp } from '../layouts/MainLayout/MainLayout';

export interface RouteItem {
  path: string;
  Component: React.FC;
  Layout: React.FC<LayoutProp>;
}

export const publicRoute: RouteItem[] = [];
export const privateRoute: RouteItem[] = [];
