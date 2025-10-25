import React from 'react';

import { NavLink } from 'react-router-dom';

import { NativeLinksProps } from '../../types';

export const LinkButton = React.forwardRef<HTMLAnchorElement, NativeLinksProps>(
  ({ ...props }, ref) => {
    return <NavLink ref={ref} {...props} />;
  }
);

LinkButton.displayName = 'LinkButton';
