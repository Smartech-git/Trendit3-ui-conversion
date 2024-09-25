import React from "react";

export const Eye = ({ className }: { className?: string }) => {
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

export const EyeOff = ({ className }: { className?: string }) => {
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

export const User01 = ({ className }: { className?: string }) => {
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

export const ChevronDown = ({ className }: { className?: string }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none'>
      <path d='M5 8.40723L10 13.4072L15 8.40723' stroke='#98A2B3' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round' className={className} />
    </svg>
  );
};

export const Check = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='28' height='27' viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M23 6.75L10.625 19.125L5 13.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' className={className} />
    </svg>
  );
};

export const InfoHexagon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='28' height='27' viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14 18V13.5M14 9H14.0113M2.75 9.58808V17.4119C2.75 17.6871 2.75 17.8247 2.78108 17.9541C2.80864 18.0689 2.8541 18.1787 2.91578 18.2793C2.98535 18.3929 3.08264 18.4901 3.27721 18.6847L8.81529 24.2228C9.00986 24.4174 9.10715 24.5146 9.22068 24.5842C9.32134 24.6459 9.43107 24.6914 9.54586 24.7189C9.67534 24.75 9.81292 24.75 10.0881 24.75H17.9119C18.1871 24.75 18.3247 24.75 18.4541 24.7189C18.5689 24.6914 18.6787 24.6459 18.7793 24.5842C18.8929 24.5146 18.9901 24.4174 19.1847 24.2228L24.7228 18.6847C24.9174 18.4901 25.0146 18.3929 25.0842 18.2793C25.1459 18.1787 25.1914 18.0689 25.2189 17.9541C25.25 17.8247 25.25 17.6871 25.25 17.4119V9.58808C25.25 9.31292 25.25 9.17534 25.2189 9.04586C25.1914 8.93107 25.1459 8.82134 25.0842 8.72068C25.0146 8.60715 24.9174 8.50986 24.7228 8.31529L19.1847 2.77721C18.9901 2.58264 18.8929 2.48535 18.7793 2.41578C18.6787 2.3541 18.5689 2.30864 18.4541 2.28108C18.3247 2.25 18.1871 2.25 17.9119 2.25H10.0881C9.81292 2.25 9.67534 2.25 9.54586 2.28108C9.43107 2.30864 9.32134 2.3541 9.22068 2.41578C9.10715 2.48535 9.00986 2.58264 8.81529 2.77721L3.27721 8.31529C3.08264 8.50986 2.98535 8.60715 2.91578 8.72068C2.8541 8.82134 2.80864 8.93107 2.78108 9.04586C2.75 9.17534 2.75 9.31292 2.75 9.58808Z'
        stroke='white'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const Search = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M17.5 18.4071L14.5834 15.4904M16.6667 10.4904C16.6667 14.4025 13.4954 17.5738 9.58333 17.5738C5.67132 17.5738 2.5 14.4025 2.5 10.4904C2.5 6.57842 5.67132 3.4071 9.58333 3.4071C13.4954 3.4071 16.6667 6.57842 16.6667 10.4904Z' stroke='#667085' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round' className={className} />
    </svg>
  );
};

export const Home_line = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 17.9072H16M11.0177 3.67123L4.23539 8.94635C3.78202 9.29897 3.55534 9.47528 3.39203 9.69608C3.24737 9.89167 3.1396 10.112 3.07403 10.3463C3 10.6107 3 10.8979 3 11.4723V18.7072C3 19.8273 3 20.3874 3.21799 20.8152C3.40973 21.1915 3.71569 21.4975 4.09202 21.6892C4.51984 21.9072 5.07989 21.9072 6.2 21.9072H17.8C18.9201 21.9072 19.4802 21.9072 19.908 21.6892C20.2843 21.4975 20.5903 21.1915 20.782 20.8152C21 20.3874 21 19.8273 21 18.7072V11.4723C21 10.8979 21 10.6107 20.926 10.3463C20.8604 10.112 20.7526 9.89167 20.608 9.69608C20.4447 9.47528 20.218 9.29897 19.7646 8.94635L12.9823 3.67123C12.631 3.39797 12.4553 3.26135 12.2613 3.20883C12.0902 3.16249 11.9098 3.16249 11.7387 3.20883C11.5447 3.26135 11.369 3.39797 11.0177 3.67123Z'
        stroke='#667085'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const Wallet_02 = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 8.90712V5.40777C16 4.57603 16 4.16016 15.8248 3.90459C15.6717 3.6813 15.4346 3.52961 15.1678 3.4842C14.8623 3.43221 14.4847 3.60649 13.7295 3.95504L4.85901 8.04911C4.18551 8.35996 3.84875 8.51538 3.60211 8.75643C3.38406 8.96953 3.21762 9.22967 3.1155 9.51695C3 9.8419 3 10.2128 3 10.9546V15.9071M16.5 15.4071H16.51M3 12.1071L3 18.7071C3 19.8272 3 20.3873 3.21799 20.8151C3.40973 21.1914 3.71569 21.4974 4.09202 21.6891C4.51984 21.9071 5.07989 21.9071 6.2 21.9071H17.8C18.9201 21.9071 19.4802 21.9071 19.908 21.6891C20.2843 21.4974 20.5903 21.1914 20.782 20.8151C21 20.3873 21 19.8272 21 18.7071V12.1071C21 10.987 21 10.427 20.782 9.99914C20.5903 9.62281 20.2843 9.31685 19.908 9.1251C19.4802 8.90712 18.9201 8.90712 17.8 8.90712L6.2 8.90712C5.0799 8.90712 4.51984 8.90712 4.09202 9.1251C3.7157 9.31685 3.40973 9.62281 3.21799 9.99913C3 10.427 3 10.987 3 12.1071ZM17 15.4071C17 15.6833 16.7761 15.9071 16.5 15.9071C16.2239 15.9071 16 15.6833 16 15.4071C16 15.131 16.2239 14.9071 16.5 14.9071C16.7761 14.9071 17 15.131 17 15.4071Z'
        stroke='#667085'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const Announcement_03 = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.5 16.9071C20.433 16.9071 22 13.997 22 10.4071C22 6.81725 20.433 3.9071 18.5 3.9071M18.5 16.9071C16.567 16.9071 15 13.997 15 10.4071C15 6.81725 16.567 3.9071 18.5 3.9071M18.5 16.9071L5.44354 14.5332C4.51605 14.3646 4.05231 14.2803 3.67733 14.0961C2.91447 13.7213 2.34636 13.0406 2.11414 12.223C2 11.8212 2 11.3498 2 10.4071C2 9.46441 2 8.99306 2.11414 8.59117C2.34636 7.77359 2.91447 7.09288 3.67733 6.71815C4.05231 6.53396 4.51605 6.44964 5.44354 6.28101L18.5 3.9071M5 14.9071L5.39386 20.4211C5.43126 20.9447 5.44996 21.2066 5.56387 21.405C5.66417 21.5797 5.81489 21.72 5.99629 21.8076C6.20232 21.9071 6.46481 21.9071 6.98979 21.9071H8.7722C9.37234 21.9071 9.67242 21.9071 9.89451 21.7874C10.0897 21.6823 10.2443 21.5152 10.3342 21.3126C10.4365 21.082 10.4135 20.7828 10.3675 20.1844L10 15.4071'
        stroke='#667085'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const BarChatSquare_02 = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 15.9071V17.9071M12 11.9071V17.9071M16 7.9071V17.9071M7.8 21.9071H16.2C17.8802 21.9071 18.7202 21.9071 19.362 21.5801C19.9265 21.2925 20.3854 20.8336 20.673 20.2691C21 19.6273 21 18.7873 21 17.1071V8.7071C21 7.02695 21 6.18687 20.673 5.54513C20.3854 4.98065 19.9265 4.52171 19.362 4.23408C18.7202 3.9071 17.8802 3.9071 16.2 3.9071H7.8C6.11984 3.9071 5.27976 3.9071 4.63803 4.23408C4.07354 4.52171 3.6146 4.98065 3.32698 5.54513C3 6.18687 3 7.02695 3 8.7071V17.1071C3 18.7873 3 19.6273 3.32698 20.2691C3.6146 20.8336 4.07354 21.2925 4.63803 21.5801C5.27976 21.9071 6.11984 21.9071 7.8 21.9071Z'
        stroke='#667085'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const Gift_02 = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 7.9071H7.5C6.83696 7.9071 6.20107 7.64371 5.73223 7.17487C5.26339 6.70603 5 6.07015 5 5.4071C5 4.74406 5.26339 4.10818 5.73223 3.63934C6.20107 3.1705 6.83696 2.9071 7.5 2.9071C11 2.9071 12 7.9071 12 7.9071ZM12 7.9071H16.5C17.163 7.9071 17.7989 7.64371 18.2678 7.17487C18.7366 6.70603 19 6.07015 19 5.4071C19 4.74406 18.7366 4.10818 18.2678 3.63934C17.7989 3.1705 17.163 2.9071 16.5 2.9071C13 2.9071 12 7.9071 12 7.9071ZM12 7.9071L12 22.9071M2 14.9071H22M2 11.1071L2 19.7071C2 20.8272 2 21.3873 2.21799 21.8151C2.40973 22.1914 2.71569 22.4974 3.09202 22.6891C3.51984 22.9071 4.07989 22.9071 5.2 22.9071L18.8 22.9071C19.9201 22.9071 20.4802 22.9071 20.908 22.6891C21.2843 22.4974 21.5903 22.1914 21.782 21.8151C22 21.3873 22 20.8272 22 19.7071V11.1071C22 9.987 22 9.42695 21.782 8.99913C21.5903 8.6228 21.2843 8.31684 20.908 8.12509C20.4802 7.90711 19.9201 7.90711 18.8 7.90711L5.2 7.9071C4.0799 7.9071 3.51984 7.9071 3.09202 8.12509C2.7157 8.31684 2.40973 8.6228 2.21799 8.99912C2 9.42695 2 9.987 2 11.1071Z'
        stroke='#667085'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const LifeBuoy_01 = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z'
        stroke='#667085'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};

export const Settings_01 = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z' stroke='#667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className={className} />
      <path
        d='M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z'
        stroke='#667085'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
      />
    </svg>
  );
};
