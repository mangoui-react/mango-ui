const Calendar = {
  sunday: '일',
  monday: '월',
  tuesday: '화',
  wednesday: '수',
  thursday: '목',
  friday: '금',
  saturday: '토',
  ok: '승인',
  today: '오늘',
  yesterday: '어제',
  hours: '시간',
  minutes: '분',
  seconds: '초',
};

export default {
  lang: 'ko',
  common: {
    loading: '로딩...',
    search: '검색',
  },
  Form: {
    required: '필수 입력 항목입니다.',
    maxLength: (value: number): string => `${value} 문자수 이하로 입력하세요.`,
    minLength: (value: number): string => `${value} 문자수 이상으로 입력하세요.`,
    max: (value: number): string => `${value} 이하의 값을 입력하세요.`,
    min: (value: number): string => `${value} 이상의 값을 입력하세요.`,
    pattern: '올바른 입력패턴이 아닙니다.',
    email: 'E-MAIL 형식으로 입력하세요.',
    password: '영문(대소문자 구분)과 숫자, 특수문자를 조합하여 8~16자 이내로 입력하세요.',
    number: '숫자 형식으로 입력하세요.',
    emailInput: 'E-MAIL을 입력하세요',
    passwordInput: '비밀번호를 입력하세요',
    searchInput: '검색어를 입력하세요.',
  },
  Calendar,
  DatePicker: {
    ...Calendar,
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: '지난 7 일',
  },
  Dialog: {
    okText: '확인',
    cancelText: '취소',
  },
  Pagination: {
    more: '더',
    prev: '이전',
    next: '다음',
    first: '첫 페이지',
    last: '마지막',
  },
  TimePicker: {
    placeholder: '시간선택',
    okText: '확인',
    cancelText: '취소',
  },
};
