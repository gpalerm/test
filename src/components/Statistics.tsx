import { Run } from '../types'
import './Statistics.css'

interface StatisticsProps {
  runs: Run[]
}

export default function Statistics({ runs }: StatisticsProps) {
  const totalDistance = runs.reduce((sum, run) => sum + run.distance, 0)
  const totalDuration = runs.reduce((sum, run) => sum + run.duration, 0)
  const totalRuns = runs.length
  const averagePace =
    totalRuns > 0 ? (totalDuration / totalDistance).toFixed(2) : '0.00'
  const averageDistance = totalRuns > 0 ? (totalDistance / totalRuns).toFixed(2) : '0.00'

  const recentRunsThisWeek = runs.filter((run) => {
    const runDate = new Date(run.date)
    const today = new Date()
    const daysAgo = Math.floor(
      (today.getTime() - runDate.getTime()) / (1000 * 60 * 60 * 24)
    )
    return daysAgo < 7
  })

  const weekDistance = recentRunsThisWeek.reduce((sum, run) => sum + run.distance, 0)

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{totalRuns}</div>
          <div className="stat-label">Total Runs</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalDistance.toFixed(2)}</div>
          <div className="stat-label">Total Miles</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalDuration}</div>
          <div className="stat-label">Total Minutes</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{averageDistance}</div>
          <div className="stat-label">Avg Distance</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{averagePace}</div>
          <div className="stat-label">Avg Pace (min/mi)</div>
        </div>
        <div className="stat-card highlight">
          <div className="stat-value">{weekDistance.toFixed(2)}</div>
          <div className="stat-label">This Week</div>
        </div>
      </div>
    </div>
  )
}
