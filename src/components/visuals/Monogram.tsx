type MonogramProps = {
  className?: string;
};

export default function Monogram({ className = "" }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Joshua b. Smith monogram"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="8"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-instrument-serif), Georgia, serif"
        fontSize="15"
        letterSpacing="0.5"
        fill="currentColor"
      >
        JBS
      </text>
    </svg>
  );
}
