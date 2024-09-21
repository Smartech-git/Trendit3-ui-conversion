import React from "react";

export const Eye = ({ className }: { className: string }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
      <path d='M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className={className} />
    </svg>
  );
};

export const EyeOff = ({ className }: { className: string }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const User01 = ({ className }: { className: string }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='28' height='29' viewBox='0 0 28 29' fill='none'>
      <path
        d='M23.3332 25.4072C23.3332 23.7791 23.3332 22.965 23.1322 22.3026C22.6798 20.8111 21.5126 19.6439 20.0212 19.1915C19.3587 18.9906 18.5447 18.9906 16.9165 18.9906H11.0832C9.45502 18.9906 8.64093 18.9906 7.97851 19.1915C6.48704 19.6439 5.31988 20.8111 4.86745 22.3026C4.6665 22.965 4.6665 23.7791 4.6665 25.4072M19.2498 9.65723C19.2498 12.5567 16.8993 14.9072 13.9998 14.9072C11.1003 14.9072 8.74984 12.5567 8.74984 9.65723C8.74984 6.75773 11.1003 4.40723 13.9998 4.40723C16.8993 4.40723 19.2498 6.75773 19.2498 9.65723Z'
        stroke='#475467'
        stroke-width='2.33333'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const ChevronDown = ({ className }: { className: string }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
      <path d='M5 8.40723L10 13.4072L15 8.40723' stroke='#98A2B3' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round' className={className} />
    </svg>
  );
};
