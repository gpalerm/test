import { Run } from '../types'
import './RunList.css'

interface RunListProps {
  runs: Run[]
  onDeleteRun: (id: string) => void
}

export default function RunList({ runs, onDeleteRun }: RunListProps) {
  if (runs.length === 0) {
    return (
      <div className="empty-state">
        <p>No runs logged yet. Start tracking your runs above!</p>
      </div>
    )
  }

  return (
    <div className="run-list">
      {runs.map((run) => {
        const pace = (run.duration / run.distance).toFixed(2)
        const runDate = new Date(run.date)
        const formattedDate = runDate.toLocaleDateString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })

        return (
          <div key={run.id} className="run-card">
            <div className="run-header">
              <div className="run-date-distance">
                <h3>{formattedDate}</h3>
                <span className="distance-badge">{run.distance} mi</span>
              </div>
              <button
                className="delete-button"
                onClick={() => onDeleteRun(run.id)}
                title="Delete run"
              >
                ✕
              </button>
            </div>

            <div className="run-details">
              <div className="detail-item">
                <span className="detail-label">Duration</span>
                <span className="detail-value">{run.duration} min</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pace</span>
                <span className="detail-value">{pace} min/mi</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Speed</span>
                <span className="detail-value">
                  {(60 / parseFloat(pace)).toFixed(2)} mph
                </span>
              </div>
            </div>

            {run.notes && (
              <div className="run-notes">
                <p>{run.notes}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
