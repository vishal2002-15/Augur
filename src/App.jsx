import React from 'react';
import { distributors } from './data/distributors'

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Augur Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {distributors.map((d, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold">{d.name}</h2>
            <p><strong>Region:</strong> {d.region}</p>
            <p><strong>Status:</strong> {d.status}</p>
            <p><strong>Shipped Last Month:</strong> {d.lastMonthShipped}</p>
            <p><strong>Forecast Next Month:</strong> {d.forecastNextMonth}</p>
            <p><strong>YTD Average:</strong> {d.ytdAverage}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
