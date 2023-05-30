interface BarsProps {
  onClick: () => void;
}

export const Bars = ({ onClick }: BarsProps) => {
  return (
    <div className="md:hidden">
      <svg
        onClick={onClick}
        width="22"
        height="8"
        viewBox="0 0 22 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 0H0V2.66667H22V0ZM0 8H22V5.33333H0V8Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
