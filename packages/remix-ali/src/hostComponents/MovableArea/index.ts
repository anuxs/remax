import * as React from 'react';
import { createHostComponent } from '@alipay/remix-shared';

export interface MovableAreaProps {
  readonly dataset?: DOMStringMap;
  style?: React.CSSProperties;
  width: number;
  height: number;
}

export const MovableArea = createHostComponent<MovableAreaProps>('movable-area');