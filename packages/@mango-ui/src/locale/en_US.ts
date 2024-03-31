const Calendar = {
  sunday: 'Su',
  monday: 'Mo',
  tuesday: 'Tu',
  wednesday: 'We',
  thursday: 'Th',
  friday: 'Fr',
  saturday: 'Sa',
  ok: 'OK',
  today: 'Today',
  yesterday: 'Yesterday',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
};

export default {
  lang: 'en',
  common: {
    loading: 'Loading...',
    search: 'Search',
  },
  Calendar,
  DatePicker: {
    ...Calendar,
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: 'Last 7 Days',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
  Pagination: {
    more: 'More',
    prev: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
  },
  TimePicker: {
    placeholder: 'Choose the time',
    okText: 'OK',
    cancelText: 'Cancel',
  },
};
