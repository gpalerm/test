import { useState } from 'react'
import { Run } from '../types'
import './RunForm.css'

interface RunFormProps {
  onAddRun: (run: Omit<Run, 'id'>) => void
}

export default function RunForm({ onAddRun }: RunFormProps) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !distance || !duration) {
      alert('Please fill in all required fields')
      return
    }

    const distanceNum = parseFloat(distance)
    const durationNum = parseInt(duration)

    if (distanceNum <= 0 || durationNum <= 0) {
      alert('Distance and duration must be greater than 0')
      return
    }

    onAddRun({
      date,
      distance: distanceNum,
      duration: durationNum,
      notes: notes || undefined,
    })

    setDate(new Date().toISOString().split('T')[0])
    setDistance('')
    setDuration('')
    setNotes('')
  }

  return (
    <form className="run-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Date *</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="distance">Distance (miles) *</label>
        <input
          id="distance"
          type="number"
          step="0.1"
          placeholder="e.g., 3.5"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="duration">Duration (minutes) *</label>
        <input
          id="duration"
          type="number"
          placeholder="e.g., 30"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          placeholder="How did you feel? Any observations?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </div>

      <button type="submit" className="submit-button">
        Log Run
      </button>
    </form>
  )
}
