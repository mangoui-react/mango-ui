import React from 'react';

import { CheckedRadioIcon } from '../../internal/icons/CheckedRadioIcon';
import { UncheckedRadioIcon } from '../../internal/icons/UncheckedRadioIcon';

import { RadioContext } from './Radio';

export interface RadioIconIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  /** checked 아이콘 */
  checkedIcon?: React.ReactNode;
  /** unchecked 아이콘 */
  uncheckedIcon?: React.ReactNode;
}

const defaultCheckedIcon = <CheckedRadioIcon />;
const defaultUncheckedIcon = <UncheckedRadioIcon />;

const RadioIcon = React.forwardRef<SVGSVGElement, RadioIconIconProps>(
  ({ checkedIcon = defaultCheckedIcon, uncheckedIcon = defaultUncheckedIcon, ...rest }, ref) => {
    const { checked } = React.useContext(RadioContext);

    const iconProps = { ref, ...rest };

    return React.cloneElement((checked ? checkedIcon : uncheckedIcon) as React.ReactElement, {
      ...iconProps,
    });
  },
);

RadioIcon.displayName = 'Radio.Icon';

export default RadioIcon;
