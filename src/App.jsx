import { useState } from 'react';

const schema = {"Week 1": {"Dag 1": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 2": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 3": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 4": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 5": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 6": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 7": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal"}, "Week 2": {"Dag 1": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 2": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 3": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 4": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 5": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 6": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 7": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal"}, "Week 3": {"Dag 1": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 2": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 3": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 4": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 5": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 6": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal", "Dag 7": "🕖 Voor het sporten:\n- Water en banaan\n\n🍳 Ontbijt:\n- Shake met spinazie, banaan en havermout\n\n🥗 Lunch:\n- Wrap met kipfilet, sla en tomaat\n\n🍽️ Avondeten:\n- Rijst met groenten en kip\n\n🥛 Snack:\n- Magere kwark\n\n⚡ Calorieën totaal: 1600 kcal"}};

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
        {Object.keys(schema).map(w => (
          <button
            key={w}
            onClick={() => { setWeek(w); setDay('Dag 1'); } }
            style={
              marginRight: 8,
              padding: '0.4rem 1rem',
              backgroundColor: w === week ? '#cce5ff' : '#eee',
              border: '1px solid #aaa',
              borderRadius: '6px'
            }
          >
            {w}
          </button>
        ))}
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