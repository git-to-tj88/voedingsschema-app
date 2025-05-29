import { useState } from 'react';

// START VAN HET VOEDINGSSCHEMA DATA BLOK
// Dit is het gedetailleerde voedingsschema in JSON-formaat
const schema = {
  "title": "3-Weken Voedingsschema",
  "goal": "Afvallen, spiermassa opbouwen en conditie verbeteren.",
  "sportTime": "Ochtend (inclusief pre-/post-workout voeding).",
  "dailyCalories": "Ongeveer 1750 kcal.",
  "importantNotes": [
    "Hydratatie: Drink minimaal 2-3 liter water per dag.",
    "Kruiden: Gebruik naar smaak diverse kruiden en specerijen (zoutloos indien mogelijk) om smaak toe te voegen aan je maaltijden.",
    "Olie: Gebruik voor het bakken en stomen een kleine hoeveelheid gezonde olie zoals olijfolie of kokosolie.",
    "Variatie in groenten: Hoewel ik variatie heb ingebouwd, voel je vrij om binnen de toegestane groenten te wisselen als je iets anders in huis hebt.",
    "Luister naar je lichaam: Dit is een richtlijn. Als je merkt dat je structureel honger hebt, kun je een kleine aanvulling doen met extra groenten, een handje noten (ongezouten) of een stuk fruit."
  ],
  "personalPreferences": [
    "Geen vis",
    "Geen zure zuivel zoals yoghurt",
    "Geen eigeel (alleen eiwit)",
    "Geen hummus, avocado, cottage cheese, pistachenoten, couscous, bulgur, champignons, radijs, rauwe wortel, augurk, courgette",
    "Pompoen alleen in soep",
    "Havermout en granola alleen verwerkt (in smoothies)"
  ],
  "weeks": [
    {
      "weekNumber": 1,
      "days": [
        {
          "dayNumber": 1,
          "name": "Eiwitrijke start",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Halve banaan.",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml amandelmelk (ongezoet), 1 banaan, 1 el havermout, handje spinazie.",
              "instructions": "Bereidingswijze smoothie: Doe alle ingrediënten in een blender en mix tot een gladde massa."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Volkoren wrap met 100g gegrilde kipfilet, ijsbergsla, tomaat en 1 el light mayonaise.",
              "instructions": "Bereidingswijze: Snijd de kipfilet in reepjes en bak deze gaar. Beleg de wrap met de kip, sla, tomaat en mayonaise. Rol op."
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 appel.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g mager rundergehakt (kruiden naar smaak), 200g broccoli (gestoomd) en 75g zilvervliesrijst.",
              "instructions": "Bereidingswijze stomen: Breng een laagje water aan de kook in een pan met deksel. Plaats de broccoli in een stoommandje boven het kokende water. Zorg dat de groenten het water niet raken. Sluit de pan af met de deksel en stoom de broccoli in 5-8 minuten beetgaar. Kook de rijst volgens de verpakking en bak het gehakt gaar."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "200 ml magere melk met een snufje kaneel.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 2,
          "name": "Groenten en Vlees",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Handje rozijnen.",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1 kiwi, 1 el havermout, handje boerenkool.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Grote salade met 150g gerookte kipfilet, gemengde sla, komkommer, paprika en een dressing van olijfolie en azijn.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 peer.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g kalkoenfilet (gebakken), 200g sperziebonen (gestoomd) en 150g zoete aardappel uit de oven.",
              "instructions": "Bereidingswijze stomen: Zie Dag 1. Bereidingswijze zoete aardappel uit de oven: Schil en snijd de zoete aardappel in blokjes of frieten. Besprenkel met een beetje olijfolie en kruiden (bijv. paprikapoeder, knoflookpoeder). Verspreid over een bakplaat bekleed met bakpapier en bak in een voorverwarmde oven op 200°C voor 20-30 minuten, of tot ze gaar en lichtbruin zijn."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "1 rijstwafel met 1 el 100% pindakaas.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 3,
          "name": "Koolhydraten en Eiwitten",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Kleine appel.",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml havermelk (ongezoet), 1/2 banaan, 1 el havermout, 1 el lijnzaad.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Volkoren brood (2 sneetjes) met 100g kipfilet (broodbeleg), sla en plakjes tomaat.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "Handje ongezouten amandelen.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g kippendijfilet (gebakken), 200g bloemkoolroosjes (gestoomd) en 75g volkoren pasta.",
              "instructions": "Bereidingswijze stomen: Zie Dag 1. Kook de pasta volgens de verpakking."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "100g magere kwark (natuur) met een klein beetje stevia/honing (max 1 theelepel) en een snufje kaneel.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 4,
          "name": "Herstel en Energie",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Dadel (2-3 stuks).",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 mango (bevroren is ook lekker), 1 el havermout.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Salade met 150g kikkererwten (uit blik, afgespoeld), komkommer, paprika, bladspinazie en een lichte vinaigrette.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 sinaasappel.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g tartaar (gebakken), 200g spruitjes (gekookt) en 150g aardappels (gekookt of gestoomd).",
              "instructions": "Bereidingswijze spruitjes koken: Was de spruitjes en snijd het kontje eraf. Kook in een pan met water in 8-12 minuten gaar. Bereidingswijze aardappels koken/stomen: Schil de aardappels en snijd in gelijke stukken. Kook in een pan met water en een snufje zout voor 15-20 minuten (of tot gaar). Voor stomen, zie Dag 1 methode, stoom voor 15-20 minuten."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "200 ml magere melk.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 5,
          "name": "Lichte Maaltijden",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Een paar slokken sportdrank (isotone).",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml rijstmelk (ongezoet), 1 banaan, 1 el havermout.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Volkoren wrap met 100g gekookte kipfilet (in reepjes), rucola, tomaat en een klein beetje (light) kruidenkaas.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "Handje walnoten (ongezouten).",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "Geroerbakte kipfilet (150g) met 200g paksoi en paprika, geserveerd met 75g basmatirijst.",
              "instructions": "Bereidingswijze roerbakken: Verhit een wok of grote koekenpan met een beetje olie. Voeg de in stukjes gesneden kipfilet toe en roerbak gaar. Voeg vervolgens de in stukjes gesneden paksoi en paprika toe en roerbak tot ze beetgaar zijn. Kruid naar smaak. Kook de rijst volgens de verpakking."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "1 eiwit (gekookt) en 1 rijstwafel.",
              "instructions": "Bereidingswijze gekookt eiwit: Kook een ei hard (ca. 8-10 minuten), pel het en verwijder het eigeel."
            }
          ]
        },
        {
          "dayNumber": 6,
          "name": "Vulling en Voeding",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Rijstwafel met beetje jam.",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 peer, 1 el havermout, 1 el chiazaad.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Groot komkommer- en tomatensalade met 100g magere ham (in blokjes) en wat olijven (zwart).",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 kiwi.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "Kipgehaktballetjes (150g kipgehakt) in tomatensaus met 200g haricots verts (gestoomd) en 150g quinoa.",
              "instructions": "Bereidingswijze kipgehaktballetjes: Meng kipgehakt met kruiden en eventueel een eiwit. Draai er kleine balletjes van. Bak gaar in een pan. Voeg tomatensaus toe en laat even sudderen. Bereidingswijze stomen: Zie Dag 1. Bereidingswijze quinoa: Kook quinoa volgens de verpakking (meestal 1 deel quinoa op 2 delen water, koken tot water is opgenomen)."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "200 ml amandelmelk (ongezoet).",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 7,
          "name": "Rust en Herstel",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Kleine portie gedroogd fruit (bijv. abrikozen).",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml sojamelk (ongezoet), 1/2 banaan, 1 el havermout.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "2 volkoren crackers met 100g kipfilet (broodbeleg), en plakjes komkommer.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "Handje walnoten.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "Pompoensoep (zelfgemaakt, 250ml) met 100g kipreepjes en 1 volkoren broodje.",
              "instructions": "Bereidingswijze pompoensoep: Snijd pompoen in stukken en kook gaar met wat bouillon en ui/knoflook. Pureer de soep glad. Voeg de gebakken kipreepjes toe."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "100g magere kwark (natuur) met een paar blauwe bessen.",
              "instructions": ""
            }
          ]
        }
      ]
    },
    {
      "weekNumber": 2,
      "days": [
        {
          "dayNumber": 8,
          "name": "Eiwitrijke start",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Halve banaan.",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1 appel, 1 el havermout.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Volkoren brood (2 sneetjes) met 100g gekookte kipfilet, sla en tomaat.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 sinaasappel.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g mager rundergehakt (gebakken), 200g doperwten (gekookt) en 75g zilvervliesrijst.",
              "instructions": "Bereidingswijze doperwten koken: Kook de doperwten in een pan met een beetje water voor 3-5 minuten. Bereidingswijze rijst en gehakt: Zie Dag 1."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "200 ml magere melk met een snufje cacao.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 9,
          "name": "Groenten en Vlees",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Rijstwafel.",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml amandelmelk, 1 kiwi, 1 el havermout, handje spinazie.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Grote salade met 150g kalkoenfilet (broodbeleg), gemengde sla, komkommer, paprika en een dressing van olijfolie en azijn.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 mandarijn.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g kipfilet (gebakken), 200g sperziebonen (gestoomd) en 150g aardappels (gekookt of gestoomd).",
              "instructions": "Bereidingswijze stomen: Zie Dag 1. Bereidingswijze aardappels koken/stomen: Zie Dag 4."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "100g magere kwark (natuur) met een klein beetje stevia/honing.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 10,
          "name": "Koolhydraten en Eiwitten",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Kleine portie gedroogd fruit (bijv. pruimen).",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml havermelk, 1/2 banaan, 1 el havermout, 1 el pompoenpitten.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Volkoren wrap met 100g kipgehakt (gebakken met kruiden), ijsbergsla en een klein beetje tomatensalsa (suikervrij).",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "Handje ongezouten cashewnoten.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g tartaar (gebakken), 200g broccoli (gestoomd) en 75g volkoren macaroni.",
              "instructions": "Bereidingswijze stomen: Zie Dag 1. Kook de macaroni volgens de verpakking."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "1 eiwit (gekookt) en 200 ml magere melk.",
              "instructions": "Bereidingswijze gekookt eiwit: Zie Dag 5."
            }
          ]
        },
        {
          "dayNumber": 11,
          "name": "Herstel en Energie",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Banaan (halve).",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 mango, 1 el havermout, handje spinazie.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Grote salade met 150g gekookte kikkererwten, komkommer, tomaat, bladspinazie en een dressing van olijfolie en citroensap.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 appel.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "150g kipfilet (gebakken), 200g bloemkoolroosjes (gestoomd) en 150g zoete aardappel uit de oven.",
              "instructions": "Bereidingswijze stomen: Zie Dag 1. Bereidingswijze zoete aardappel uit de oven: Zie Dag 2."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "1 rijstwafel met 1 el 100% pindakaas.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 12,
          "name": "Lichte Maaltijden",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Kleine portie gedroogd fruit.",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml rijstmelk, 1/2 banaan, 1 el havermout, 1 el lijnzaad.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Volkoren brood (2 sneetjes) met 100g kalkoenfilet (broodbeleg), sla en plakjes komkommer.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal",
              "description": "1 peer.",
              "instructions": ""
            },
            {
              "time": "Avondeten",
              "calories": "±550 kcal",
              "description": "Geroerbakte tartaar (150g) met 200g broccoli en paprika, geserveerd met 75g zilvervliesrijst.",
              "instructions": "Bereidingswijze roerbakken: Zie Dag 5, maar dan met tartaar in plaats van kipfilet. Bereidingswijze rijst: Zie Dag 1."
            },
            {
              "time": "Avondsnack",
              "calories": "±100 kcal",
              "description": "200 ml magere melk.",
              "instructions": ""
            }
          ]
        },
        {
          "dayNumber": 13,
          "name": "Vulling en Voeding",
          "meals": [
            {
              "time": "Pre-workout",
              "calories": "±100 kcal",
              "description": "Dadel (2-3 stuks).",
              "instructions": ""
            },
            {
              "time": "Ontbijt (na sporten)",
              "calories": "±350 kcal",
              "description": "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1 kiwi, 1 el havermout, handje boerenkool.",
              "instructions": "Bereidingswijze smoothie: Zie Dag 1."
            },
            {
              "time": "Lunch",
              "calories": "±450 kcal",
              "description": "Groot gemengde salade met 100g gerookte kipfilet, tomaat, komkommer, en een lichte dressing.",
              "instructions": ""
            },
            {
              "time": "Tussendoor",
              "calories": "±100 kcal