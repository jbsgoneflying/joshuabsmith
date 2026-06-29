type OperatingStackProps = {
  labels: string[];
  className?: string;
};

export default function OperatingStack({
  labels,
  className = "",
}: OperatingStackProps) {
  const rowHeight = 58;
  const gap = 26;
  const top = 16;
  const width = 300;
  const rowWidth = 232;
  const x = (width - rowWidth) / 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${top * 2 + labels.length * rowHeight + (labels.length - 1) * gap}`}
      className={className}
      role="img"
      aria-label={`Operating stack: ${labels.join(", ")}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {labels.map((label, i) => {
        const y = top + i * (rowHeight + gap);
        const cy = y + rowHeight / 2;
        const isLast = i === labels.length - 1;
        return (
          <g key={label}>
            {!isLast && (
              <line
                x1={width / 2}
                y1={y + rowHeight}
                x2={width / 2}
                y2={y + rowHeight + gap}
                stroke="#B08D57"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
            )}
            <rect
              x={x}
              y={y}
              width={rowWidth}
              height={rowHeight}
              rx="10"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(244,241,234,0.12)"
            />
            <circle cx={x + 22} cy={cy} r="3" fill="#2E5F4F" />
            <circle
              cx={x + 22}
              cy={cy}
              r="7"
              stroke="#2E5F4F"
              strokeOpacity="0.4"
            />
            <text
              x={x + 44}
              y={cy}
              dominantBaseline="middle"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              fontSize="14"
              letterSpacing="0.12em"
              fill="#F4F1EA"
            >
              {label.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
