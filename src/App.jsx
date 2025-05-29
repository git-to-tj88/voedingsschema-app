import { useState } from 'react';

const schema = {"Week 1": {"Dag 1": "\n🕖 Voor het sporten:\n- Glas water met citroen\n- 1 banaan\n\n🍳 Ontbijt:\n- Eiwitshake met spinazie, banaan en havermout (in de blender)\n\n🥗 Lunch:\n- Volkoren wrap met kipfilet, sla, tomaat, komkommer, magere kruidenkaas\n\n🍽️ Avondeten:\n- Gegrilde kip met zoete aardappel en broccoli\n\n🥛 Snack:\n- Magere kwark met een klein handje ongezouten noten\n\n⚡ Calorieën totaal: ca. 1600 kcal\n"}};

export default function App() {
  const [week, setWeek] = useState("Week 1");
  const [day, setDay] = useState("Dag 1");

  const days = Object.keys(schema[week] || {});
  const content = (schema[week] && schema[week][day]) || "Geen gegevens beschikbaar.";

  const noteKey = week + "-" + day;

  return (
    <div style={ padding: '1rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: 'auto' }>
      <h1>Voedingsschema</h1>
      <div style={ marginBottom: '1rem' }>
        {}
      </div>
      <div style={ marginBottom: '1rem' }>
        <label>📅 Kies een dag: </label>
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      <div style={
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '8px',
        whiteSpace: 'pre-wrap'
      }>
        {content}
      </div>
      <div style={ marginTop: '1rem' }>
        <h3>📝 Jouw notitie (lokaal opgeslagen)</h3>
        <textarea
          id="note"
          style={ width: '100%', height: '120px' }
          onChange={(e) => localStorage.setItem(noteKey, e.target.value)}
          value={localStorage.getItem(noteKey) || ''}
        />
      </div>
    </div>
  );
}
