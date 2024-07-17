import React from 'react';

import { CheckedRadioIcon } from '../../internal/icons/checked-radio-icon';
import { UncheckedRadioIcon } from '../../internal/icons/unchecked-radio-icon';

import { RadioContext } from './radio-group-item';

export interface RadioGroupIconIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  /** checked 아이콘 */
  checkedIcon?: React.ReactNode;
  /** unchecked 아이콘 */
  uncheckedIcon?: React.ReactNode;
}

const defaultCheckedIcon = <CheckedRadioIcon />;
const defaultUncheckedIcon = <UncheckedRadioIcon />;

const RadioGroupIcon = React.forwardRef<SVGSVGElement, RadioGroupIconIconProps>(
  ({ checkedIcon = defaultCheckedIcon, uncheckedIcon = defaultUncheckedIcon, ...rest }, ref) => {
    const { checked } = React.useContext(RadioContext);

    const iconProps = { ref, ...rest };

    return React.cloneElement((checked ? checkedIcon : uncheckedIcon) as React.ReactElement, {
      ...iconProps,
    });
  },
);

RadioGroupIcon.displayName = 'RadioGroup.Icon';

export default RadioGroupIcon;
