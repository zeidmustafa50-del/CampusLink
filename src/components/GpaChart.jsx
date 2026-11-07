// Small hand-written SVG line chart (no chart library needed).
export default function GpaChart({ data, min = 2.0, max = 4.0 }) {
  const W = 600
  const H = 260
  const pad = { top: 20, right: 24, bottom: 36, left: 40 }
  const innerW = W - pad.left - pad.right
  const innerH = H - pad.top - pad.bottom

  const x = (i) => pad.left + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW)
  const y = (v) => pad.top + innerH - ((v - min) / (max - min)) * innerH

  const points = data.map((d, i) => `${x(i)},${y(d.gpa)}`).join(' ')
  const area = `${pad.left},${pad.top + innerH} ${points} ${x(data.length - 1)},${pad.top + innerH}`
  const ticks = [2.0, 2.5, 3.0, 3.5, 4.0]

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="gpa-chart"
      role="img"
      aria-label="GPA by semester line chart"
    >
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.left} x2={W - pad.right} y1={y(t)} y2={y(t)} className="grid-line" />
          <text x={pad.left - 8} y={y(t) + 4} textAnchor="end" className="axis-text">
            {t.toFixed(1)}
          </text>
        </g>
      ))}
      <polygon points={area} className="chart-area" />
      <polyline points={points} className="chart-line" fill="none" />
      {data.map((d, i) => (
        <g key={d.term}>
          <circle cx={x(i)} cy={y(d.gpa)} r="5" className="chart-dot" />
          <text x={x(i)} y={y(d.gpa) - 12} textAnchor="middle" className="value-text">
            {d.gpa.toFixed(1)}
          </text>
          <text x={x(i)} y={H - 12} textAnchor="middle" className="axis-text">
            {d.term}
          </text>
        </g>
      ))}
    </svg>
  )
}
