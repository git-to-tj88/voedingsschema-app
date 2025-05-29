import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState("Week 1");

  const tabs = {
    "Week 1": `Hier komt het schema van Week 1`,
    "Week 2": `Hier komt het schema van Week 2`,
    "Week 3": `Hier komt het schema van Week 3`
  };

  return (
    <div style={ padding: '2rem', fontFamily: 'sans-serif' }>
      <h1>Voedingsschema</h1>
      <div style={ marginBottom: '1rem' }>
        {Object.keys(tabs).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={
              marginRight: 10,
              padding: '0.5rem 1rem',
              backgroundColor: tab === activeTab ? '#ccc' : '#eee'
            }
          >
            {tab}
          </button>
        ))}
      </div>
      <pre style={
        whiteSpace: 'pre-wrap',
        background: '#f9f9f9',
        padding: '1rem',
        borderRadius: '8px'
      }>
        {tabs[activeTab]}
      </pre>
    </div>
  );
}
