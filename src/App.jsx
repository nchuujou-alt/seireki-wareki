import { useMemo, useState } from 'react'
import { ERAS, MIN_YEAR, toWareki, daysInYear } from './eras.js'
import { getPopulation } from './population.js'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  const { result, error, days, population } = useMemo(() => {
    if (input.trim() === '') return { result: null, error: null, days: null, population: null }

    if (!/^\d+$/.test(input.trim())) {
      return { result: null, error: '半角数字で西暦を入力してください', days: null, population: null }
    }

    const year = Number(input.trim())
    if (year < MIN_YEAR) {
      return { result: null, error: `${MIN_YEAR}年以降の西暦を入力してください`, days: null, population: null }
    }

    return {
      result: toWareki(year),
      error: null,
      days: daysInYear(year),
      population: getPopulation(year),
    }
  }, [input])

  return (
    <div className="app">
      <h1>西暦・和暦早見表</h1>

      <div className="converter">
        <label htmlFor="year-input">西暦</label>
        <div className="converter-row">
          <input
            id="year-input"
            type="text"
            inputMode="numeric"
            placeholder="例: 2026"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="unit">年</span>
          <span className="arrow">➡</span>
          <span className={`result ${error ? 'result-error' : ''}`}>
            {error ? error : result ?? '―'}
          </span>
        </div>
        {days !== null && <p className="days-info">その年は{days}日です</p>}
        {days !== null && (
          <p className="population-info">日本の人口: {population ?? '不明'}</p>
        )}
      </div>

      <table className="era-table">
        <thead>
          <tr>
            <th>元号</th>
            <th>期間(目安)</th>
          </tr>
        </thead>
        <tbody>
          {ERAS.map((era, i) => {
            const end = i === 0 ? '現在' : `${ERAS[i - 1].start - 1}年`
            return (
              <tr key={era.name}>
                <td>{era.name}</td>
                <td>{era.start}年 〜 {end}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
