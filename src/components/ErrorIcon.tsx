type Props = {
  size?: number;
  color?: string;
};

const ErrorIcon: React.FC<Props> = ({
  size = 18,
  color = "#FF5757",
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
        stroke={color}
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ErrorIcon;
