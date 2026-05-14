import { useState, useEffect } from 'react'
import './App.css'
import RunForm from './components/RunForm'
import RunList from './components/RunList'
import Statistics from './components/Statistics'
import { Run } from './types'

function App() {
  const [runs, setRuns] = useState<Run[]>([])

  useEffect(() => {
    const savedRuns = localStorage.getItem('runs')
    if (savedRuns) {
      try {
        setRuns(JSON.parse(savedRuns))
      } catch (error) {
        console.error('Failed to load runs from localStorage:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('runs', JSON.stringify(runs))
  }, [runs])

  const addRun = (run: Omit<Run, 'id'>) => {
    const newRun: Run = {
      ...run,
      id: Date.now().toString(),
    }
    setRuns([newRun, ...runs])
  }

  const deleteRun = (id: string) => {
    setRuns(runs.filter(run => run.id !== id))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🏃 Running Mileage Tracker</h1>
        <p>Track your running distance and monitor your progress</p>
      </header>

      <main className="container">
        <div className="content">
          <section className="section">
            <h2>Log a Run</h2>
            <RunForm onAddRun={addRun} />
          </section>

          <section className="section">
            <Statistics runs={runs} />
          </section>

          <section className="section">
            <h2>Run History</h2>
            <RunList runs={runs} onDeleteRun={deleteRun} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
