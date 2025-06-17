import React from "react";
import { IPropsSvg } from "@/lib/models";

export const IconSearch: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
      />
    </svg>
  );
};

export const IconSave: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"
      />
    </svg>
  );
};

export const IconAdd: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z" />
    </svg>
  );
};

export const IconEdit: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 21v-4.25L17.625 2.175L21.8 6.45L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
      />
    </svg>
  );
};

export const IconPreview: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.57a.5.5 0 0 0-.024-.235l-.013-.063a1.5 1.5 0 0 0-.18-.434c-.092-.15-.222-.28-.482-.54L8.711.707c-.259-.26-.389-.39-.54-.483a1.5 1.5 0 0 0-.496-.193a.5.5 0 0 0-.235-.024C7.329.004 7.194.004 7.015.004h-2.21c-1.68 0-2.52 0-3.16.327a3.02 3.02 0 0 0-1.31 1.31C.008 2.283.008 3.12.008 4.8v6.4c0 1.68 0 2.52.327 3.16a3.02 3.02 0 0 0 1.31 1.31c.642.327 1.48.327 3.16.327h2.423c.401 0 .602-.523.347-.832a.45.45 0 0 0-.345-.168H4.8c-.857 0-1.44-.001-1.89-.038c-.438-.036-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819c-.036-.45-.037-1.03-.037-1.89v-6.4c0-.857 0-1.44.037-1.89c.036-.438.101-.663.18-.819c.192-.376.498-.682.874-.874c.156-.08.381-.145.82-.18C3.36.997 3.94.997 4.8.997H7v3.5a.5.5 0 0 0 .5.5H11v.547c0 .25.207.45.456.473c.285.025.543-.188.543-.474V4.99c0-.178 0-.313-.005-.425zM8 1.41L10.59 4H8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 15c.834 0 1.61-.255 2.25-.691l1.47 1.47a.749.749 0 1 0 1.06-1.06l-1.47-1.47c.436-.641.691-1.41.691-2.25c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-1c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const IconCancel: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18L6 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export const IconDelete: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10 12V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconRemove: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m16.075 17.475l-3.25 3.25q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l3.25-3.25l-3.25-3.25q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.25 3.25l3.25-3.25q.275-.275.7-.275t.7.275t.275.7t-.275.7l-3.25 3.25l3.25 3.25q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM4 5q-.425 0-.712-.288T3 4t.288-.712T4 3t.713.288T5 4t-.288.713T4 5m4 0q-.425 0-.712-.288T7 4t.288-.712T8 3t.713.288T9 4t-.288.713T8 5m4 0q-.425 0-.712-.288T11 4t.288-.712T12 3t.713.288T13 4t-.288.713T12 5m4 0q-.425 0-.712-.288T15 4t.288-.712T16 3t.713.288T17 4t-.288.713T16 5m4 0q-.425 0-.712-.288T19 4t.288-.712T20 3t.713.288T21 4t-.288.713T20 5M8 21q-.425 0-.712-.288T7 20t.288-.712T8 19t.713.288T9 20t-.288.713T8 21M4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m0 4q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17m0 4q-.425 0-.712-.288T3 20t.288-.712T4 19t.713.288T5 20t-.288.713T4 21M20 9q-.425 0-.712-.288T19 8t.288-.712T20 7t.713.288T21 8t-.288.713T20 9"
      />
    </svg>
  );
};

export const IconReset: React.FC<IPropsSvg> = (props) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 1920 1920"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const IconHome: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
      />
    </svg>
  );
};

export const IconHomeOutline: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75"
      />
    </svg>
  );
};

export const IconCalendarDay: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V10h16zm0-13H4V5h16z"
      ></path>
    </svg>
  );
};

export const IconFolder: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
      />
    </svg>
  );
};

export const IconWarning: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M11 14V5h2v9zm0 5v-2h2v2z" />
    </svg>
  );
};

export const IconError: React.FC<IPropsSvg> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export const IconInfo: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      />
    </svg>
  );
};

export const IconSuccess: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
      />
    </svg>
  );
};

export const IconQuestion: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M14.6 8.075q0-1.075-.712-1.725T12 5.7q-.725 0-1.312.313t-1.013.912q-.4.575-1.088.663T7.4 7.225q-.35-.325-.387-.8t.237-.9q.8-1.2 2.038-1.862T12 3q2.425 0 3.938 1.375t1.512 3.6q0 1.125-.475 2.025t-1.75 2.125q-.925.875-1.25 1.363T13.55 14.6q-.1.6-.513 1t-.987.4t-.987-.387t-.413-.963q0-.975.425-1.787T12.5 11.15q1.275-1.125 1.688-1.737t.412-1.338M12 22q-.825 0-1.412-.587T10 20t.588-1.412T12 18t1.413.588T14 20t-.587 1.413T12 22"
      />
    </svg>
  );
};

export const IconPay: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22 6v12q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6M4 8h16V6H4zm0 4v6h16v-6zm0 6V6z"
      />
    </svg>
  );
};

export const IconEye: React.FC<IPropsSvg> = (props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export const IconSlash: React.FC<IPropsSvg> = (props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};

export const IconOpen: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
      />
    </svg>
  );
};

export const IconLoginCircle: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" {...props}>
      <defs>
        <style />
      </defs>
      <path d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z" />
    </svg>
  );
};

export const IconTimes: React.FC<IPropsSvg> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" />
    </svg>
  );
};

export const IconChevronLeft: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z" />
    </svg>
  );
};

export const IconChevronRight: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z" />
    </svg>
  );
};

export const IconChevronUp: React.FC<IPropsSvg> = (props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export const IconChevronDown: React.FC<IPropsSvg> = (props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export const IconChevronFirst: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6 18V6h2v12zm11 0l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"
      />
    </svg>
  );
};

export const IconChevronLast: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m7 18l-1.4-1.4l4.6-4.6l-4.6-4.6L7 6l6 6zm9 0V6h2v12z"
      />
    </svg>
  );
};

export const IconUser: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"
      />
    </svg>
  );
};

export const IconUsersGroupOutline: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M1 20v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20zm18 0v-3q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v3zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8M3 18h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T9 15t-2.775.338T3.5 16.35q-.225.125-.363.35T3 17.2zm6-8q.825 0 1.413-.587T11 8t-.587-1.412T9 6t-1.412.588T7 8t.588 1.413T9 10m0-2"
      />
    </svg>
  );
};

export const IconAccount: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m17 21.25l-4.5-2.625V13.4l4.5-2.625l4.5 2.625v5.2zm-2.35-7.4L17 15.225l2.35-1.375L17 12.5zm3.1 5.2l2.25-1.3V15l-2.25 1.325zM14 17.75l2.25 1.325V16.35L14 15.025zM10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13h.35q.15 0 .3.05q-.2.45-.337.938T10.1 15H10q-1.775 0-3.187.45t-2.313.9q-.225.125-.363.35T4 17.2v.8h6.3q.15.525.4 1.038t.55.962zm8-10q.825 0 1.413-.587T12 8t-.587-1.412T10 6t-1.412.588T8 8t.588 1.413T10 10m.3 8"
      />
    </svg>
  );
};

export const IconReport: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 21h6m-6 0v-5m0 5H3.6a.6.6 0 0 1-.6-.6v-3.8a.6.6 0 0 1 .6-.6H9m6 5V9m0 12h5.4a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6h-4.8a.6.6 0 0 0-.6.6V9m0 0H9.6a.6.6 0 0 0-.6.6V16"
      />
    </svg>
  );
};

export const IconThumb: React.FC<IPropsSvg> = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 8q.8 0 1.4.6T23 10v2q0 .175-.05.375t-.1.375l-3 7.05q-.225.5-.75.85T18 21H7V8l6-5.95q.375-.375.888-.437t.987.187t.7.7t.1.925L14.55 8zM9 8.85V19h9l3-7v-2h-9l1.35-5.5zM4 21q-.825 0-1.412-.587T2 19v-9q0-.825.588-1.412T4 8h3v2H4v9h3v2zm5-2V8.85z"
      />
    </svg>
  );
};
