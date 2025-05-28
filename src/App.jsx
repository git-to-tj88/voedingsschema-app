
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const days = [
  "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"
];

const weeks = [1, 2, 3];

const schema = {
  1: {
    Maandag: [
      {
        maaltijd: "Ontbijt",
        omschrijving: "Smoothie met banaan, havermout en eiwitpoeder",
        ingredienten: ["1 banaan", "30g havermout", "200ml amandelmelk", "1 scoop eiwitpoeder"],
        bereiding: "Alles in de blender tot een gladde smoothie.",
        calorieen: 350,
      },
      {
        maaltijd: "Lunch",
        omschrijving: "Volkoren wrap met kipfilet en groenten",
        ingredienten: ["1 volkoren wrap", "75g kipfilet", "spinazie", "tomaat"],
        bereiding: "Wrap beleggen met ingrediënten en oprollen.",
        calorieen: 450,
      },
    ],
    Dinsdag: [],
    Woensdag: [],
    Donderdag: [],
    Vrijdag: [],
    Zaterdag: [],
    Zondag: [],
  },
  2: {
    Maandag: [], Dinsdag: [], Woensdag: [], Donderdag: [], Vrijdag: [], Zaterdag: [], Zondag: [],
  },
  3: {
    Maandag: [], Dinsdag: [], Woensdag: [], Donderdag: [], Vrijdag: [], Zaterdag: [], Zondag: [],
  },
};

export default function VoedingsschemaApp() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Voedingsschema</h1>
      <Tabs defaultValue="1" className="w-full">
        <TabsList>
          {weeks.map((week) => (
            <TabsTrigger key={week} value={week.toString()}>
              Week {week}
            </TabsTrigger>
          ))}
        </TabsList>

        {weeks.map((week) => (
          <TabsContent key={week} value={week.toString()}>
            {days.map((day) => (
              <div key={day} className="mt-6">
                <h2 className="text-xl font-semibold mb-2">{day}</h2>
                {schema[week][day]?.length ? (
                  schema[week][day].map((meal, i) => (
                    <Card key={i} className="mb-4">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-1">{meal.maaltijd}</h3>
                        <p><strong>Omschrijving:</strong> {meal.omschrijving}</p>
                        <p><strong>Ingrediënten:</strong> {meal.ingredienten.join(", ")}</p>
                        <p><strong>Bereiding:</strong> {meal.bereiding}</p>
                        <p><strong>Calorieën:</strong> {meal.calorieen} kcal</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-muted-foreground">Nog geen maaltijden ingevoerd voor {day.toLowerCase()}.</p>
                )}
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
