import { SVGProps } from "react";

const ArrowUp = ({ width = "24", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00005 1.39129L13.3333 7.99989L14 7.30425L7.00005 0L0 7.30436L0.666662 8L7.00005 1.39129Z"
        fill="#999999"
      />
    </svg>
  );
};

export default ArrowUp;
