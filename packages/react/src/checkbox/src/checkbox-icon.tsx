import React from 'react';

import { CheckedCheckboxIcon } from '../../internal/icons/checked-checkbox-icon';
import { IndeterminateCheckboxIcon } from '../../internal/icons/indeterminate-checkbox-icon';
import { UncheckedCheckboxIcon } from '../../internal/icons/unchecked-checkbox-icon';

import { CheckboxContext } from './checkbox';

export interface CheckboxIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  /** checked 아이콘 */
  checkedIcon?: React.ReactNode;
  /** unchecked 아이콘 */
  uncheckedIcon?: React.ReactNode;
  /** indeterminate 아이콘 */
  indeterminateIcon?: React.ReactNode;
}

const defaultCheckedIcon = <CheckedCheckboxIcon />;
const defaultUncheckedIcon = <UncheckedCheckboxIcon />;
const defaultIndeterminateIcon = <IndeterminateCheckboxIcon />;

const CheckboxIcon = React.forwardRef<SVGSVGElement, CheckboxIconProps>(
  (
    {
      checkedIcon = defaultCheckedIcon,
      uncheckedIcon = defaultUncheckedIcon,
      indeterminateIcon = defaultIndeterminateIcon,
      ...rest
    },
    ref,
  ) => {
    const { checked, indeterminate } = React.useContext(CheckboxContext);

    const iconProps = { ref, ...rest };

    if (indeterminate) {
      return React.cloneElement(indeterminateIcon as React.ReactElement, {
        ...iconProps,
      });
    }

    return React.cloneElement((checked ? checkedIcon : uncheckedIcon) as React.ReactElement, {
      ...iconProps,
    });
  },
);

CheckboxIcon.displayName = 'Checkbox.Icon';

export default CheckboxIcon;
