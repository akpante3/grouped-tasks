import { SVGProps } from "react";

const CheckboxIcon = ({ width = "24", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="4" fill="#00B797" />
      <path
        d="M6.49574 10.1007L3.888 7.30201L3 8.24832L6.49574 12L13 4.94631L12.1182 4L6.49574 10.1007Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckboxIcon;
