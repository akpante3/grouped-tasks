import { SVGProps } from "react";

const ArrowDown = ({ width = "24", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00005 6.60871L13.3333 0.000106694L14 0.69575L7.00005 8L0 0.695643L0.666662 0L7.00005 6.60871Z"
        fill="#999999"
      />
    </svg>
  );
};

export default ArrowDown;
