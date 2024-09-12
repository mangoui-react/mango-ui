import { style } from '@vanilla-extract/css';

export const content = style({
  backgroundColor: 'var(--tooltip-bg)',
  color: 'var(--tooltip-text)',
  wordWrap: 'break-word',
  padding: '0.25rem 0.625rem',
  borderRadius: '0.25rem',
  maxWidth: '18.75rem',
});

export const arrow = style({
  fill: 'var(--tooltip-bg)',
  // position: 'absolute',
  // width: '0.5rem',
  // height: '0.5rem',
  // backgroundColor: 'inherit',
  // transform: 'rotate(45deg)',

  // '::before': {
  //   content: '',
  // },

  // selectors: {
  //   [`${content}[data-popper-placement="top"] &`]: {
  //     left: '50%',
  //     marginLeft: '-0.3125rem',
  //   },
  //   [`${content}[data-popper-placement="top-end"] &`]: {
  //     right: '0.625rem',
  //   },
  //   [`${content}[data-popper-placement="right-start"] &`]: {
  //     marginTop: '-0.25rem',
  //     left: '-0.25rem',
  //     top: '0.6875rem',
  //   },
  //   [`${content}[data-popper-placement="right"] &`]: {
  //     marginTop: '-0.25rem',
  //     left: '-0.25rem',
  //     top: '50%',
  //   },
  //   [`${content}[data-popper-placement="right-end"] &`]: {
  //     marginTop: '-0.25rem',
  //     left: '-0.25rem',
  //     bottom: '0.375rem',
  //   },
  //   [`${content}[data-popper-placement="bottom-start"] &`]: {
  //     top: '-0.25rem',
  //   },
  //   [`${content}[data-popper-placement="bottom"] &`]: {
  //     top: '-0.25rem',
  //     left: '50%',
  //     marginLeft: '-0.3125rem',
  //   },
  //   [`${content}[data-popper-placement="bottom-end"] &`]: {
  //     top: '-0.25rem',
  //     right: '0.625rem',
  //   },
  //   [`${content}[data-popper-placement="left-start"] &`]: {
  //     marginTop: '-0.25rem',
  //     right: '-0.25rem',
  //     top: '0.6875rem',
  //   },
  //   [`${content}[data-popper-placement="left"] &`]: {
  //     marginTop: '-0.25rem',
  //     right: '-0.25rem',
  //     top: '50%',
  //   },
  //   [`${content}[data-popper-placement="left-end"] &`]: {
  //     marginTop: '-0.25rem',
  //     right: '-0.25rem',
  //     bottom: '0.375rem',
  //   },
  // },
});
