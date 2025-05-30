import { useState, useEffect } from 'react';

// --- DATA: Intro, Boodschappenlijst & Dag 1–21 per week ---
// Ik heb de ruwe tekst geparsed en omgezet naar een gestructureerd object.
// Dit is essentieel voor de zoekfunctionaliteit en de individuele notitievelden.
const schema = {
  "Week 1": {
    "Intro": {
      "content": `
        <h2>Week 1: Focus op Balans</h2>
        <p>Deze week is afgestemd op jouw voorkeuren, bevat vaste maaltijden per dag zonder keuzes, en ondersteunt vetverbranding, spieropbouw en herstel rond je sportmomenten in de ochtend.</p>
        <h3>Belangrijke Notities:</h3>
        <ul>
          <li><strong>Hydratatie:</strong> Drink minimaal 2-3 liter water per dag.</li>
          <li><strong>Kruiden:</strong> Gebruik naar smaak diverse kruiden en specerijen (zoutloos indien mogelijk) om smaak toe te voegen aan je maaltijden.</li>
          <li><strong>Olie:</strong> Gebruik voor het bakken en stomen een kleine hoeveelheid gezonde olie zoals olijfolie of kokosolie.</li>
          <li><strong>Variatie in groenten:</strong> Hoewel ik variatie heb ingebouwd, voel je vrij om binnen de toegestane groenten te wisselen als je iets anders in huis hebt.</li>
          <li><strong>Luister naar je lichaam:</strong> Dit is een richtlijn. Als je merkt dat je structureel honger hebt, kun je een kleine aanvulling doen met extra groenten, een handje noten (ongezouten) of een stuk fruit.</li>
        </ul>
        <h3>Persoonlijke Voorkeuren:</h3>
        <ul>
          <li>Geen vis</li>
          <li>Geen zure zuivel zoals yoghurt</li>
          <li>Geen eigeel (alleen eiwit)</li>
          <li>Geen hummus, avocado, cottage cheese, pistachenoten, couscous, bulgur, champignons, radijs, rauwe wortel, augurk, courgette</li>
          <li>Pompoen alleen in soep</li>
          <li>Havermout en granola alleen verwerkt (in smoothies)</li>
        </ul>
      `
    },
    "Boodschappenlijst": {
      "content": `
        <h3>Boodschappenlijst Week 1:</h3>
        <ul>
          <li>Banaan</li>
          <li>Whey proteïne</li>
          <li>Amandelmelk (ongezoet)</li>
          <li>Havermout</li>
          <li>Spinazie</li>
          <li>Kipfilet (vers en gerookt)</li>
          <li>IJsbergsla</li>
          <li>Tomaat</li>
          <li>Light mayonaise</li>
          <li>Mager rundergehakt</li>
          <li>Broccoli</li>
          <li>Zilvervliesrijst</li>
          <li>Magere melk</li>
          <li>Kaneel</li>
          <li>Rozijnen</li>
          <li>Kiwi</li>
          <li>Boerenkool</li>
          <li>Peer</li>
          <li>Kalkoenfilet</li>
          <li>Sperziebonen</li>
          <li>Zoete aardappel</li>
          <li>100% pindakaas</li>
          <li>Appel</li>
          <li>Lijnzaad</li>
          <li>Bloemkool</li>
          <li>Volkoren pasta</li>
          <li>Magere kwark (natuur)</li>
          <li>Stevia/honing</li>
          <li>Dadel</li>
          <li>Mango</li>
          <li>Kikkererwten (blik)</li>
          <li>Sinaasappel</li>
          <li>Tartaar</li>
          <li>Spruitjes</li>
          <li>Aardappels</li>
          <li>Sportdrank (isotone)</li>
          <li>Rijstmelk (ongezoet)</li>
          <li>Rucola</li>
          <li>Light kruidenkaas</li>
          <li>Walnoten (ongezouten)</li>
          <li>Paksoi</li>
          <li>Paprika</li>
          <li>Basmatirijst</li>
          <li>Eieren (voor eiwit)</li>
          <li>Jam</li>
          <li>Chiazaad</li>
          <li>Magere ham</li>
          <li>Zwarte olijven</li>
          <li>Kipgehakt</li>
          <li>Tomatensaus (suikervrij)</li>
          <li>Haricots verts</li>
          <li>Quinoa</li>
          <li>Gedroogd fruit (abrikozen/pruimen)</li>
          <li>Sojamelk (ongezoet)</li>
          <li>Volkoren crackers</li>
          <li>Blauwe bessen</li>
        </ul>
      `
    },
    "Dag 1": {
      "Pre-workout": {
        description: "Halve banaan.",
        instructions: "",
        ingredients: ["Banaan"]
      },
      "Ontbijt": {
        description: "Smoothie: 1 scoop whey proteïne, 200 ml amandelmelk (ongezoet), 1 banaan, 1 el havermout, handje spinazie.",
        instructions: "Doe alle ingrediënten in een blender en mix tot een gladde massa.",
        ingredients: ["Whey proteïne", "Amandelmelk", "Banaan", "Havermout", "Spinazie"]
      },
      "Lunch": {
        description: "Volkoren wrap met 100g gegrilde kipfilet, ijsbergsla, tomaat en 1 el light mayonaise.",
        instructions: "Snijd de kipfilet in reepjes en bak deze gaar. Beleg de wrap met de kip, sla, tomaat en mayonaise. Rol op.",
        ingredients: ["Volkoren wrap", "Kipfilet", "IJsbergsla", "Tomaat", "Light mayonaise"]
      },
      "Tussendoor": {
        description: "1 appel.",
        instructions: "",
        ingredients: ["Appel"]
      },
      "Avondeten": {
        description: "150g mager rundergehakt (kruiden naar smaak), 200g broccoli (gestoomd) en 75g zilvervliesrijst.",
        instructions: "Bereidingswijze stomen: Breng een laagje water aan de kook in een pan met deksel. Plaats de broccoli in een stoommandje boven het kokende water. Zorg dat de groenten het water niet raken. Sluit de pan af met de deksel en stoom de broccoli in 5-8 minuten beetgaar. Kook de rijst volgens de verpakking en bak het gehakt gaar.",
        ingredients: ["Mager rundergehakt", "Broccoli", "Zilvervliesrijst"]
      },
      "Avondsnack": {
        description: "200 ml magere melk met een snufje kaneel.",
        instructions: "",
        ingredients: ["Magere melk", "Kaneel"]
      }
    },
    "Dag 2": {
      "Pre-workout": {
        description: "Handje rozijnen.",
        instructions: "",
        ingredients: ["Rozijnen"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1 kiwi, 1 el havermout, handje boerenkool.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Kiwi", "Havermout", "Boerenkool"]
      },
      "Lunch": {
        description: "Grote salade met 150g gerookte kipfilet, gemengde sla, komkommer, paprika (geen rauwe wortel) en een dressing van olijfolie en azijn.",
        instructions: "",
        ingredients: ["Gerookte kipfilet", "Gemengde sla", "Komkommer", "Paprika", "Olijfolie", "Azijn"]
      },
      "Tussendoor": {
        description: "1 peer.",
        instructions: "",
        ingredients: ["Peer"]
      },
      "Avondeten": {
        description: "150g kalkoenfilet (gebakken), 200g sperziebonen (gestoomd) en 150g zoete aardappel uit de oven.",
        instructions: "Bereidingswijze stomen: Zie dag 1. Bereidingswijze zoete aardappel uit de oven: Schil en snijd de zoete aardappel in blokjes of frieten. Besprenkel met een beetje olijfolie en kruiden (bijv. paprikapoeder, knoflookpoeder). Verspreid over een bakplaat bekleed met bakpapier en bak in een voorverwarmde oven op 200°C voor 20-30 minuten, of tot ze gaar en lichtbruin zijn.",
        ingredients: ["Kalkoenfilet", "Sperziebonen", "Zoete aardappel"]
      },
      "Avondsnack": {
        description: "1 rijstwafel met 1 el 100% pindakaas.",
        instructions: "",
        ingredients: ["Rijstwafel", "Pindakaas"]
      }
    },
    "Dag 3": {
      "Pre-workout": {
        description: "Kleine appel.",
        instructions: "",
        ingredients: ["Appel"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml havermelk (ongezoet), 1/2 banaan, 1 el havermout, 1 el lijnzaad.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Havermelk", "Banaan", "Havermout", "Lijnzaad"]
      },
      "Lunch": {
        description: "Volkoren brood (2 sneetjes) met 100g kipfilet (broodbeleg), sla en plakjes tomaat.",
        instructions: "",
        ingredients: ["Volkoren brood", "Kipfilet", "Sla", "Tomaat"]
      },
      "Tussendoor": {
        description: "Handje ongezouten amandelen.",
        instructions: "",
        ingredients: ["Amandelen"]
      },
      "Avondeten": {
        description: "150g kippendijfilet (gebakken), 200g bloemkoolroosjes (gestoomd) en 75g volkoren pasta.",
        instructions: "Bereidingswijze stomen: Zie dag 1. Kook de pasta volgens de verpakking.",
        ingredients: ["Kippendijfilet", "Bloemkool", "Volkoren pasta"]
      },
      "Avondsnack": {
        description: "100g magere kwark (natuur) met een klein beetje stevia/honing (max 1 theelepel) en een snufje kaneel.",
        instructions: "",
        ingredients: ["Magere kwark", "Stevia/honing", "Kaneel"]
      }
    },
    "Dag 4": {
      "Pre-workout": {
        description: "Dadel (2-3 stuks).",
        instructions: "",
        ingredients: ["Dadel"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 mango (bevroren is ook lekker), 1 el havermout.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Mango", "Havermout"]
      },
      "Lunch": {
        description: "Salade met 150g kikkererwten (uit blik, afgespoeld), komkommer, paprika, bladspinazie en een lichte vinaigrette.",
        instructions: "",
        ingredients: ["Kikkererwten", "Komkommer", "Paprika", "Bladspinazie", "Vinaigrette"]
      },
      "Tussendoor": {
        description: "1 sinaasappel.",
        instructions: "",
        ingredients: ["Sinaasappel"]
      },
      "Avondeten": {
        description: "150g tartaar (gebakken), 200g spruitjes (gekookt) en 150g aardappels (gekookt of gestoomd).",
        instructions: "Bereidingswijze spruitjes koken: Was de spruitjes en snijd het kontje eraf. Kook in een pan met water in 8-12 minuten gaar.",
        ingredients: ["Tartaar", "Spruitjes", "Aardappels"]
      },
      "Avondsnack": {
        description: "200 ml magere melk.",
        instructions: "",
        ingredients: ["Magere melk"]
      }
    },
    "Dag 5": {
      "Pre-workout": {
        description: "Een paar slokken sportdrank (isotone).",
        instructions: "",
        ingredients: ["Sportdrank"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml rijstmelk (ongezoet), 1 banaan, 1 el havermout.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Rijstmelk", "Banaan", "Havermout"]
      },
      "Lunch": {
        description: "Volkoren wrap met 100g gekookte kipfilet (in reepjes), rucola, tomaat en een klein beetje (light) kruidenkaas.",
        instructions: "",
        ingredients: ["Volkoren wrap", "Kipfilet", "Rucola", "Tomaat", "Kruidenkaas"]
      },
      "Tussendoor": {
        description: "Handje walnoten (ongezouten).",
        instructions: "",
        ingredients: ["Walnoten"]
      },
      "Avondeten": {
        description: "Geroerbakte kipfilet (150g) met 200g paksoi en paprika, geserveerd met 75g basmatirijst.",
        instructions: "Kook rijst. Roerbak de kipfilet met paksoi en paprika.",
        ingredients: ["Kipfilet", "Paksoi", "Paprika", "Basmatirijst"]
      },
      "Avondsnack": {
        description: "1 eiwit (gekookt) en 1 rijstwafel.",
        instructions: "",
        ingredients: ["Ei", "Rijstwafel"]
      }
    },
    "Dag 6": {
      "Pre-workout": {
        description: "Rijstwafel met beetje jam.",
        instructions: "",
        ingredients: ["Rijstwafel", "Jam"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 peer, 1 el havermout, 1 el chiazaad.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Peer", "Havermout", "Chiazaad"]
      },
      "Lunch": {
        description: "Groot komkommer- en tomatensalade met 100g magere ham (in blokjes) en wat olijven (zwart).",
        instructions: "",
        ingredients: ["Komkommer", "Tomaat", "Magere ham", "Olijven"]
      },
      "Tussendoor": {
        description: "1 kiwi.",
        instructions: "",
        ingredients: ["Kiwi"]
      },
      "Avondeten": {
        description: "Kipgehaktballetjes (150g kipgehakt) in tomatensaus met 200g haricots verts (gestoomd) en 150g quinoa.",
        instructions: "Bereidingswijze stomen: Zie dag 1. Bak de balletjes en serveer met tomatensaus. Kook de quinoa.",
        ingredients: ["Kipgehakt", "Tomatensaus", "Haricots verts", "Quinoa"]
      },
      "Avondsnack": {
        description: "200 ml amandelmelk (ongezoet).",
        instructions: "",
        ingredients: ["Amandelmelk"]
      }
    },
    "Dag 7": {
      "Pre-workout": {
        description: "Kleine portie gedroogd fruit (bijv. abrikozen).",
        instructions: "",
        ingredients: ["Gedroogd fruit"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml sojamelk (ongezoet), 1/2 banaan, 1 el havermout.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Sojamelk", "Banaan", "Havermout"]
      },
      "Lunch": {
        description: "2 volkoren crackers met 100g kipfilet (broodbeleg), en plakjes komkommer.",
        instructions: "",
        ingredients: ["Volkoren crackers", "Kipfilet", "Komkommer"]
      },
      "Tussendoor": {
        description: "Handje walnoten.",
        instructions: "",
        ingredients: ["Walnoten"]
      },
      "Avondeten": {
        description: "Pompoensoep (zelfgemaakt, 250ml) met 100g kipreepjes en 1 volkoren broodje.",
        instructions: "Bereidingswijze pompoensoep: Snijd pompoen in stukken en kook gaar met wat bouillon en ui/knoflook. Pureer de soep glad. Voeg de gebakken kipreepjes toe.",
        ingredients: ["Pompoensoep", "Kipreepjes", "Volkoren broodje"]
      },
      "Avondsnack": {
        description: "100g magere kwark (natuur) met een paar blauwe bessen.",
        instructions: "",
        ingredients: ["Magere kwark", "Blauwe bessen"]
      }
    }
  },

  "Week 2": {
    "Intro": {
      "content": `
        <h2>Week 2: Variatie en Energie</h2>
        <p>Deze week bouwt voort op de principes van Week 1, met nieuwe combinaties van voedingsmiddelen om je energie op peil te houden en te blijven voldoen aan je doelstellingen.</p>
        <h3>Belangrijke Notities:</h3>
        <ul>
          <li><strong>Hydratatie:</strong> Blijf minimaal 2-3 liter water per dag drinken.</li>
          <li><strong>Kruiden:</strong> Experimenteer met verschillende kruiden om variatie in smaak te brengen.</li>
          <li><strong>Portiecontrole:</strong> Houd je aan de aangegeven porties voor optimale resultaten.</li>
        </ul>
        <h3>Persoonlijke Voorkeuren:</h3>
        <ul>
          <li>Geen vis</li>
          <li>Geen zure zuivel zoals yoghurt</li>
          <li>Geen eigeel (alleen eiwit)</li>
          <li>Geen hummus, avocado, cottage cheese, pistachenoten, couscous, bulgur, champignons, radijs, rauwe wortel, augurk, courgette</li>
          <li>Pompoen alleen in soep</li>
          <li>Havermout en granola alleen verwerkt (in smoothies)</li>
        </ul>
      `
    },
    "Boodschappenlijst": {
      "content": `
        <h3>Boodschappenlijst Week 2:</h3>
        <ul>
          <li>Banaan</li>
          <li>Whey proteïne</li>
          <li>Magere melk</li>
          <li>Appel</li>
          <li>Havermout</li>
          <li>Volkoren brood</li>
          <li>Sinaasappel</li>
          <li>Mager rundergehakt</li>
          <li>Doperwten</li>
          <li>Zilvervliesrijst</li>
          <li>Cacao</li>
          <li>Rijstwafel</li>
          <li>Amandelmelk</li>
          <li>Kiwi</li>
          <li>Spinazie</li>
          <li>Kalkoenfilet (broodbeleg)</li>
          <li>Gemengde sla</li>
          <li>Komkommer</li>
          <li>Paprika</li>
          <li>Olijfolie</li>
          <li>Azijn</li>
          <li>Mandarijn</li>
          <li>Kipfilet (vers)</li>
          <li>Sperziebonen</li>
          <li>Aardappels</li>
          <li>Magere kwark (natuur)</li>
          <li>Stevia/honing</li>
          <li>Gedroogd fruit (pruimen)</li>
          <li>Havermelk (ongezoet)</li>
          <li>Pompoenpitten</li>
          <li>Kipgehakt</li>
          <li>Tomatensalsa (suikervrij)</li>
          <li>Cashewnoten (ongezouten)</li>
          <li>Tartaar</li>
          <li>Broccoli</li>
          <li>Volkoren macaroni</li>
          <li>Ei (voor eiwit)</li>
          <li>Mango</li>
          <li>Kikkererwten (blik)</li>
          <li>Citroensap</li>
          <li>Bloemkool</li>
          <li>Zoete aardappel</li>
          <li>Rijstmelk (ongezoet)</li>
          <li>Lijnzaad</li>
          <li>Peer</li>
          <li>Walnoten</li>
          <li>Groene kool</li>
          <li>Quinoa</li>
          <li>Appelstroop</li>
        </ul>
      `
    },
    "Dag 8": {
      "Pre-workout": {
        description: "Halve banaan.",
        instructions: "",
        ingredients: ["Banaan"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1 appel, 1 el havermout.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Appel", "Havermout"]
      },
      "Lunch": {
        description: "Volkoren brood (2 sneetjes) met 100g gekookte kipfilet, sla en tomaat.",
        instructions: "",
        ingredients: ["Volkoren brood", "Kipfilet", "Sla", "Tomaat"]
      },
      "Tussendoor": {
        description: "1 sinaasappel.",
        instructions: "",
        ingredients: ["Sinaasappel"]
      },
      "Avondeten": {
        description: "150g mager rundergehakt (gebakken), 200g doperwten (gekookt) en 75g zilvervliesrijst.",
        instructions: "",
        ingredients: ["Mager rundergehakt", "Doperwten", "Zilvervliesrijst"]
      },
      "Avondsnack": {
        description: "200 ml magere melk met een snufje cacao.",
        instructions: "",
        ingredients: ["Magere melk", "Cacao"]
      }
    },
    "Dag 9": {
      "Pre-workout": {
        description: "Rijstwafel.",
        instructions: "",
        ingredients: ["Rijstwafel"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml amandelmelk, 1 kiwi, 1 el havermout, handje spinazie.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Amandelmelk", "Kiwi", "Havermout", "Spinazie"]
      },
      "Lunch": {
        description: "Grote salade met 150g kalkoenfilet (broodbeleg), gemengde sla, komkommer, paprika en een dressing van olijfolie en azijn.",
        instructions: "",
        ingredients: ["Kalkoenfilet", "Gemengde sla", "Komkommer", "Paprika", "Olijfolie", "Azijn"]
      },
      "Tussendoor": {
        description: "1 mandarijn.",
        instructions: "",
        ingredients: ["Mandarijn"]
      },
      "Avondeten": {
        description: "150g kipfilet (gebakken), 200g sperziebonen (gestoomd) en 150g aardappels (gekookt of gestoomd).",
        instructions: "Bereidingswijze stomen: Zie dag 1.",
        ingredients: ["Kipfilet", "Sperziebonen", "Aardappels"]
      },
      "Avondsnack": {
        description: "100g magere kwark (natuur) met een klein beetje stevia/honing.",
        instructions: "",
        ingredients: ["Magere kwark", "Stevia/honing"]
      }
    },
    "Dag 10": {
      "Pre-workout": {
        description: "Kleine portie gedroogd fruit (bijv. pruimen).",
        instructions: "",
        ingredients: ["Gedroogd fruit"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml havermelk, 1/2 banaan, 1 el havermout, 1 el pompoenpitten.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Havermelk", "Banaan", "Havermout", "Pompoenpitten"]
      },
      "Lunch": {
        description: "Volkoren wrap met 100g kipgehakt (gebakken met kruiden), ijsbergsla en een klein beetje tomatensalsa (suikervrij).",
        instructions: "",
        ingredients: ["Volkoren wrap", "Kipgehakt", "IJsbergsla", "Tomatensalsa"]
      },
      "Tussendoor": {
        description: "Handje ongezouten cashewnoten.",
        instructions: "",
        ingredients: ["Cashewnoten"]
      },
      "Avondeten": {
        description: "150g tartaar (gebakken), 200g broccoli (gestoomd) en 75g volkoren macaroni.",
        instructions: "Bereidingswijze stomen: Zie dag 1.",
        ingredients: ["Tartaar", "Broccoli", "Volkoren macaroni"]
      },
      "Avondsnack": {
        description: "1 eiwit (gekookt) en 200 ml magere melk.",
        instructions: "",
        ingredients: ["Ei", "Magere melk"]
      }
    },
    "Dag 11": {
      "Pre-workout": {
        description: "Banaan (halve).",
        instructions: "",
        ingredients: ["Banaan"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 mango, 1 el havermout, handje spinazie.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Mango", "Havermout", "Spinazie"]
      },
      "Lunch": {
        description: "Grote salade met 150g gekookte kikkererwten, komkommer, tomaat, bladspinazie en een dressing van olijfolie en citroensap.",
        instructions: "",
        ingredients: ["Kikkererwten", "Komkommer", "Tomaat", "Bladspinazie", "Olijfolie", "Citroensap"]
      },
      "Tussendoor": {
        description: "1 appel.",
        instructions: "",
        ingredients: ["Appel"]
      },
      "Avondeten": {
        description: "150g kipfilet (gebakken), 200g bloemkoolroosjes (gestoomd) en 150g zoete aardappel uit de oven.",
        instructions: "Bereidingswijze stomen: Zie dag 1. Bereidingswijze zoete aardappel uit de oven: Zie dag 2.",
        ingredients: ["Kipfilet", "Bloemkool", "Zoete aardappel"]
      },
      "Avondsnack": {
        description: "1 rijstwafel met 1 el 100% pindakaas.",
        instructions: "",
        ingredients: ["Rijstwafel", "Pindakaas"]
      }
    },
    "Dag 12": {
      "Pre-workout": {
        description: "Kleine portie gedroogd fruit.",
        instructions: "",
        ingredients: ["Gedroogd fruit"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml rijstmelk, 1/2 banaan, 1 el havermout, 1 el lijnzaad.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Rijstmelk", "Banaan", "Havermout", "Lijnzaad"]
      },
      "Lunch": {
        description: "Volkoren brood (2 sneetjes) met 100g kalkoenfilet (broodbeleg), sla en plakjes komkommer.",
        instructions: "",
        ingredients: ["Volkoren brood", "Kalkoenfilet", "Sla", "Komkommer"]
      },
      "Tussendoor": {
        description: "1 peer.",
        instructions: "",
        ingredients: ["Peer"]
      },
      "Avondeten": {
        description: "Geroerbakte tartaar (150g) met 200g broccoli en paprika, geserveerd met 75g zilvervliesrijst.",
        instructions: "",
        ingredients: ["Tartaar", "Broccoli", "Paprika", "Zilvervliesrijst"]
      },
      "Avondsnack": {
        description: "200 ml magere melk.",
        instructions: "",
        ingredients: ["Magere melk"]
      }
    },
    "Dag 13": {
      "Pre-workout": {
        description: "Dadel (2-3 stuks).",
        instructions: "",
        ingredients: ["Dadel"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1 kiwi, 1 el havermout, handje boerenkool.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Kiwi", "Havermout", "Boerenkool"]
      },
      "Lunch": {
        description: "Groot gemengde salade met 100g gerookte kipfilet, tomaat, komkommer, en een lichte dressing.",
        instructions: "",
        ingredients: ["Gerookte kipfilet", "Tomaat", "Komkommer", "Dressing"]
      },
      "Tussendoor": {
        description: "1 appel.",
        instructions: "",
        ingredients: ["Appel"]
      },
      "Avondeten": {
        description: "Gebakken kipdijfilet (150g) met 200g groene kool (gestoomd) en 150g quinoa.",
        instructions: "Bereidingswijze stomen: Zie dag 1.",
        ingredients: ["Kipdijfilet", "Groene kool", "Quinoa"]
      },
      "Avondsnack": {
        description: "100g magere kwark (natuur) met een snufje kaneel.",
        instructions: "",
        ingredients: ["Magere kwark", "Kaneel"]
      }
    },
    "Dag 14": {
      "Pre-workout": {
        description: "Rijstwafel met beetje appelstroop.",
        instructions: "",
        ingredients: ["Rijstwafel", "Appelstroop"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml sojamelk, 1/2 banaan, 1 el havermout.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Sojamelk", "Banaan", "Havermout"]
      },
      "Lunch": {
        description: "2 volkoren crackers met 100g kipfilet (broodbeleg) en plakjes tomaat.",
        instructions: "",
        ingredients: ["Volkoren crackers", "Kipfilet", "Tomaat"]
      },
      "Tussendoor": {
        description: "Handje ongezouten amandelen.",
        instructions: "",
        ingredients: ["Amandelen"]
      },
      "Avondeten": {
        description: "Pompoensoep (zelfgemaakt, 250ml) met 100g rundergehaktballetjes en 1 volkoren broodje.",
        instructions: "Bereidingswijze pompoensoep: Zie dag 7.",
        ingredients: ["Pompoensoep", "Rundergehakt", "Volkoren broodje"]
      },
      "Avondsnack": {
        description: "200 ml magere melk.",
        instructions: "",
        ingredients: ["Magere melk"]
      }
    }
  },

  "Week 3": {
    "Intro": {
      "content": `
        <h2>Week 3: Optimalisatie en Onderhoud</h2>
        <p>De laatste week richt zich op het optimaliseren van je voedingspatroon en het aanleren van duurzame gewoontes voor de lange termijn.</p>
        <h3>Belangrijke Notities:</h3>
        <ul>
          <li><strong>Hydratatie:</strong> Blijf minimaal 2-3 liter water per dag drinken.</li>
          <li><strong>Variatie:</strong> Blijf variëren met je groenten en eiwitbronnen om alle voedingsstoffen binnen te krijgen.</li>
          <li><strong>Mindful eten:</strong> Let op honger- en verzadigingssignalen.</li>
        </ul>
        <h3>Persoonlijke Voorkeuren:</h3>
        <ul>
          <li>Geen vis</li>
          <li>Geen zure zuivel zoals yoghurt</li>
          <li>Geen eigeel (alleen eiwit)</li>
          <li>Geen hummus, avocado, cottage cheese, pistachenoten, couscous, bulgur, champignons, radijs, rauwe wortel, augurk, courgette</li>
          <li>Pompoen alleen in soep</li>
          <li>Havermout en granola alleen verwerkt (in smoothies)</li>
        </ul>
      `
    },
    "Boodschappenlijst": {
      "content": `
        <h3>Boodschappenlijst Week 3:</h3>
        <ul>
          <li>Banaan</li>
          <li>Whey proteïne</li>
          <li>Magere melk</li>
          <li>Peer</li>
          <li>Havermout</li>
          <li>Boerenkool</li>
          <li>Kalkoenfilet (broodbeleg)</li>
          <li>IJsbergsla</li>
          <li>Tomaat</li>
          <li>Light mayonaise</li>
          <li>Kiwi</li>
          <li>Kipgehakt</li>
          <li>Broccoli</li>
          <li>Zilvervliesrijst</li>
          <li>Frambozen</li>
          <li>Rijstwafel</li>
          <li>Amandelmelk</li>
          <li>Sinaasappel</li>
          <li>Gemengde sla</li>
          <li>Komkommer</li>
          <li>Paprika</li>
          <li>Vinaigrette</li>
          <li>Tartaar</li>
          <li>Sperziebonen</li>
          <li>Aardappels</li>
          <li>Appel</li>
          <li>Havermelk</li>
          <li>Chiazaad</li>
          <li>Wortel</li>
          <li>Volkoren pasta</li>
          <li>Pindakaas</li>
          <li>Mango</li>
          <li>Spinazie</li>
          <li>Haricots verts</li>
          <li>Zoete aardappel</li>
          <li>Kaneel</li>
          <li>Lijnzaad</li>
          <li>Ei (voor eiwit)</li>
          <li>Amandelen</li>
          <li>Tomatensalsa</li>
          <li>Bloemkool</li>
          <li>Kipfilet (vers)</li>
          <li>Groene kool</li>
          <li>Quinoa</li>
          <li>Appelstroop</li>
        </ul>
      `
    },
    "Dag 15": {
      "Pre-workout": {
        description: "Halve banaan.",
        instructions: "",
        ingredients: ["Banaan"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1 peer, 1 el havermout, handje boerenkool.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Peer", "Havermout", "Boerenkool"]
      },
      "Lunch": {
        description: "Volkoren wrap met 100g kalkoenfilet (broodbeleg), ijsbergsla, tomaat en een klein beetje light mayonaise.",
        instructions: "",
        ingredients: ["Volkoren wrap", "Kalkoenfilet", "IJsbergsla", "Tomaat", "Light mayonaise"]
      },
      "Tussendoor": {
        description: "1 kiwi.",
        instructions: "",
        ingredients: ["Kiwi"]
      },
      "Avondeten": {
        description: "150g kipgehakt (gebakken), 200g broccoli (gestoomd) en 75g zilvervliesrijst.",
        instructions: "Bereidingswijze stomen: Zie dag 1.",
        ingredients: ["Kipgehakt", "Broccoli", "Zilvervliesrijst"]
      },
      "Avondsnack": {
        description: "100g magere kwark (natuur) met een paar frambozen.",
        instructions: "",
        ingredients: ["Magere kwark", "Frambozen"]
      }
    },
    "Dag 16": {
      "Pre-workout": {
        description: "Rijstwafel.",
        instructions: "",
        ingredients: ["Rijstwafel"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml amandelmelk, 1 sinaasappel, 1 el havermout.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Amandelmelk", "Sinaasappel", "Havermout"]
      },
      "Lunch": {
        description: "Grote salade met 150g gerookte kipfilet, komkommer, paprika, en een lichte vinaigrette.",
        instructions: "",
        ingredients: ["Gerookte kipfilet", "Komkommer", "Paprika", "Vinaigrette"]
      },
      "Tussendoor": {
        description: "Handje walnoten (ongezouten).",
        instructions: "",
        ingredients: ["Walnoten"]
      },
      "Avondeten": {
        description: "150g tartaar (gebakken), 200g sperziebonen (gestoomd) en 150g aardappels (gekookt of gestoomd).",
        instructions: "Bereidingswijze stomen: Zie dag 1.",
        ingredients: ["Tartaar", "Sperziebonen", "Aardappels"]
      },
      "Avondsnack": {
        description: "200 ml magere melk.",
        instructions: "",
        ingredients: ["Magere melk"]
      }
    },
    "Dag 17": {
      "Pre-workout": {
        description: "Kleine appel.",
        instructions: "",
        ingredients: ["Appel"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml havermelk, 1 banaan, 1 el havermout, 1 el chiazaad.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Havermelk", "Banaan", "Havermout", "Chiazaad"]
      },
      "Lunch": {
        description: "Volkoren brood (2 sneetjes) met 100g kalkoenfilet (broodbeleg), sla en plakjes tomaat.",
        instructions: "",
        ingredients: ["Volkoren brood", "Kalkoenfilet", "Sla", "Tomaat"]
      },
      "Tussendoor": {
        description: "1 appel.",
        instructions: "",
        ingredients: ["Appel"]
      },
      "Avondeten": {
        description: "Geroerbakte kipfilet (150g) met 200g bloemkoolroosjes en wortel (alleen de zachte delen, gestoomd), geserveerd met 75g volkoren pasta.",
        instructions: "Bereidingswijze stomen: Zie dag 1.",
        ingredients: ["Kipfilet", "Bloemkool", "Wortel", "Volkoren pasta"]
      },
      "Avondsnack": {
        description: "1 rijstwafel met 1 el 100% pindakaas.",
        instructions: "",
        ingredients: ["Rijstwafel", "Pindakaas"]
      }
    },
    "Dag 18": {
      "Pre-workout": {
        description: "Rijstwafel met beetje jam.",
        instructions: "",
        ingredients: ["Rijstwafel", "Jam"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 mango, 1 el havermout, handje spinazie.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Mango", "Havermout", "Spinazie"]
      },
      "Lunch": {
        description: "Salade met 150g gekookte kipfilet (in reepjes), komkommer, bladspinazie en een lichte dressing.",
        instructions: "",
        ingredients: ["Kipfilet", "Komkommer", "Bladspinazie", "Dressing"]
      },
      "Tussendoor": {
        description: "1 peer.",
        instructions: "",
        ingredients: ["Peer"]
      },
      "Avondeten": {
        description: "150g mager rundergehakt (gebakken), 200g haricots verts (gestoomd) en 150g zoete aardappel uit de oven.",
        instructions: "Bereidingswijze stomen: Zie dag 1. Bereidingswijze zoete aardappel uit de oven: Zie dag 2.",
        ingredients: ["Mager rundergehakt", "Haricots verts", "Zoete aardappel"]
      },
      "Avondsnack": {
        description: "200 ml magere melk met snufje kaneel.",
        instructions: "",
        ingredients: ["Magere melk", "Kaneel"]
      }
    },
    "Dag 19": {
      "Pre-workout": {
        description: "Dadel (2-3 stuks).",
        instructions: "",
        ingredients: ["Dadel"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml rijstmelk, 1 kiwi, 1 el havermout, 1 el lijnzaad.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Rijstmelk", "Kiwi", "Havermout", "Lijnzaad"]
      },
      "Lunch": {
        description: "Volkoren wrap met 100g mager rundergehakt (gebakken), ijsbergsla en een klein beetje tomatensalsa.",
        instructions: "",
        ingredients: ["Volkoren wrap", "Mager rundergehakt", "IJsbergsla", "Tomatensalsa"]
      },
      "Tussendoor": {
        description: "Handje ongezouten amandelen.",
        instructions: "",
        ingredients: ["Amandelen"]
      },
      "Avondeten": {
        description: "Kipgehaktballetjes (150g kipgehakt) in tomatensaus met 200g broccoli (gestoomd) en 75g zilvervliesrijst.",
        instructions: "Bereidingswijze stomen: Zie dag 1.",
        ingredients: ["Kipgehakt", "Tomatensaus", "Broccoli", "Zilvervliesrijst"]
      },
      "Avondsnack": {
        description: "1 eiwit (gekookt) en 200 ml magere melk.",
        instructions: "",
        ingredients: ["Ei", "Magere melk"]
      }
    },
    "Dag 20": {
      "Pre-workout": {
        description: "Kleine portie gedroogd fruit.",
        instructions: "",
        ingredients: ["Gedroogd fruit"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml magere melk, 1/2 banaan, 1 el havermout, handje spinazie.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Magere melk", "Banaan", "Havermout", "Spinazie"]
      },
      "Lunch": {
        description: "Groot komkommer- en tomatensalade met 100g gekookte kipfilet (in blokjes) en een paar olijven (zwart).",
        instructions: "",
        ingredients: ["Komkommer", "Tomaat", "Kipfilet", "Olijven"]
      },
      "Tussendoor": {
        description: "1 sinaasappel.",
        instructions: "",
        ingredients: ["Sinaasappel"]
      },
      "Avondeten": {
        description: "Gebakken kalkoenfilet (150g) met 200g spruitjes (gekookt) en 150g quinoa.",
        instructions: "Bereidingswijze spruitjes koken: Zie dag 4.",
        ingredients: ["Kalkoenfilet", "Spruitjes", "Quinoa"]
      },
      "Avondsnack": {
        description: "100g magere kwark (natuur) met een paar blauwe bessen.",
        instructions: "",
        ingredients: ["Magere kwark", "Blauwe bessen"]
      }
    },
    "Dag 21": {
      "Pre-workout": {
        description: "Halve banaan.",
        instructions: "",
        ingredients: ["Banaan"]
      },
      "Ontbijt": {
        description: "Smoothie met 1 scoop whey proteïne, 200 ml sojamelk, 1 appel, 1 el havermout.",
        instructions: "Bereidingswijze smoothie: Zie dag 1.",
        ingredients: ["Whey proteïne", "Sojamelk", "Appel", "Havermout"]
      },
      "Lunch": {
        description: "2 volkoren crackers met 100g kalkoenfilet (broodbeleg) en plakjes komkommer.",
        instructions: "",
        ingredients: ["Volkoren crackers", "Kalkoenfilet", "Komkommer"]
      },
      "Tussendoor": {
        description: "Handje ongezouten cashewnoten.",
        instructions: "",
        ingredients: ["Cashewnoten"]
      },
      "Avondeten": {
        description: "Pompoensoep (zelfgemaakt, 250ml) met 100g kipreepjes en 1 volkoren broodje.",
        instructions: "Bereidingswijze pompoensoep: Zie dag 7.",
        ingredients: ["Pompoensoep", "Kipreepjes", "Volkoren broodje"]
      },
      "Avondsnack": {
        description: "200 ml magere melk.",
        instructions: "",
        ingredients: ["Magere melk"]
      }
    }
  }
};

// Maaltijd-definities. Deze worden gebruikt om te itereren over de maaltijden per dag.
const mealTypes = [
  "Pre-workout",
  "Ontbijt",
  "Lunch",
  "Tussendoor",
  "Avondeten",
  "Avondsnack"
];

function MealNote({ week, day, mealType }) {
  // Gebruik een unieke sleutel voor elke notitie, zodat deze lokaal wordt opgeslagen
  const key = `note-${week}-${day}-${mealType}`;
  const [value, setValue] = useState(() => localStorage.getItem(key) || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return (
    <div style={{ marginTop: '0.5rem' }}>
      <label><strong>📝 Notitie bij {mealType}</strong></label>
      <textarea
        value={value}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '80px',
          marginTop: '0.3rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '0.5rem'
        }}
      />
    </div>
  );
}

export default function App() {
  const [currentWeek, setCurrentWeek] = useState('Week 1');
  const [currentDay, setCurrentDay] = useState('Intro'); // Start altijd met Intro
  const [searchTerm, setSearchTerm] = useState('');

  // Zorg ervoor dat bij het wisselen van week, de "Intro" pagina wordt getoond
  useEffect(() => {
    setCurrentDay('Intro');
  }, [currentWeek]);

  // Bepaal de dagen voor de dropdown op basis van de geselecteerde week
  const daysInCurrentWeek = Object.keys(schema[currentWeek]);

  // Filter maaltijden op basis van zoekterm
  const filteredMeals = [];
  if (searchTerm.trim()) {
    // Loop door alle weken en dagen om te zoeken
    for (const weekKey in schema) {
      if (Object.prototype.hasOwnProperty.call(schema, weekKey)) {
        for (const dayKey in schema[weekKey]) {
          if (Object.prototype.hasOwnProperty.call(schema[weekKey], dayKey) && dayKey.startsWith('Dag')) {
            const dayData = schema[weekKey][dayKey];
            mealTypes.forEach(mealType => {
              const meal = dayData[mealType];
              if (meal && meal.ingredients) {
                const foundIngredient = meal.ingredients.some(ingredient =>
                  ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                );
                if (foundIngredient) {
                  filteredMeals.push({
                    week: weekKey,
                    day: dayKey,
                    mealType: mealType,
                    description: meal.description,
                    instructions: meal.instructions,
                    ingredients: meal.ingredients
                  });
                }
              }
            });
          }
        }
      }
    }
  }

  // Bepaal de content die getoond moet worden
  let contentToDisplay;
  if (searchTerm.trim()) {
    // Als er een zoekterm is, toon zoekresultaten
    contentToDisplay = (
      <>
        <h2>Zoekresultaten voor "{searchTerm}"</h2>
        <button onClick={() => setSearchTerm('')} style={{ marginBottom: '1rem' }}>← Terug naar schema</button>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal, index) => (
            <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#fff' }}>
              <h3>{meal.week} - {meal.day} - {meal.mealType}</h3>
              <p><strong>Ingrediënten:</strong> {meal.description}</p>
              {meal.instructions && <p><strong>Bereidingswijze:</strong> {meal.instructions}</p>}
              <MealNote week={meal.week} day={meal.day} mealType={meal.mealType} />
            </div>
          ))
        ) : (
          <p>Geen maaltijden gevonden met "{searchTerm}".</p>
        )}
      </>
    );
  } else {
    // Normale weergave van dag of intro/boodschappenlijst
    const currentContent = schema[currentWeek][currentDay];

    if (currentDay === 'Intro' || currentDay === 'Boodschappenlijst') {
      contentToDisplay = <div dangerouslySetInnerHTML={{ __html: currentContent.content }} />;
    } else {
      // Dit is een dag met maaltijden
      contentToDisplay = (
        <>
          <h2>{currentWeek} - {currentDay}</h2>
          {mealTypes.map(mealType => {
            const meal = currentContent[mealType];
            if (meal) {
              return (
                <div key={mealType} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#fff' }}>
                  <h3>{mealType}</h3>
                  <p><strong>Ingrediënten:</strong> {meal.description}</p>
                  {meal.instructions && <p><strong>Bereidingswijze:</strong> {meal.instructions}</p>}
                  <MealNote week={currentWeek} day={currentDay} mealType={mealType} />
                </div>
              );
            }
            return null;
          })}
        </>
      );
    }
  }


  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: 'auto' }}>
      <h1>Voedingsschema</h1>
      <p><strong>Doel:</strong> Afvallen, spiermassa opbouwen en conditie verbeteren.</p>
      <p><strong>Sportmoment:</strong> Ochtend (pre/post-workout voeding).</p>
      <p><strong>Calorie-inname:</strong> ±1750 kcal/dag.</p>

      {/* Week-knoppen */}
      <div style={{ margin: '1rem 0' }}>
        {Object.keys(schema).map(weekKey => (
          <button
            key={weekKey}
            onClick={() => { setCurrentWeek(weekKey); setSearchTerm(''); }} // Zet zoekterm terug bij weekwissel
            style={{
              marginRight: 8, padding: '0.4rem 1rem',
              backgroundColor: weekKey === currentWeek ? '#cce5ff' : '#eee',
              border: '1px solid #aaa', borderRadius: '6px', cursor: 'pointer'
            }}
          >{weekKey}</button>
        ))}
      </div>

      {/* Zoek-veld */}
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="search-input" style={{ marginRight: '0.5rem' }}>🔍 Zoek ingrediënt:</label>
        <input
          id="search-input"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="bijv. broccoli"
          style={{
            padding: '0.4rem',
            border: '1px solid #aaa', borderRadius: '4px', width: 'calc(100% - 140px)'
          }}
        />
      </div>

      {/* Dag-dropdown - Alleen zichtbaar als er geen zoekresultaten zijn */}
      {!searchTerm.trim() && (
        <div style={{ margin: '1rem 0' }}>
          <label htmlFor="day-select" style={{ marginRight: '0.5rem' }}>📅 Kies pagina:</label>
          <select
            id="day-select"
            value={currentDay}
            onChange={e => setCurrentDay(e.target.value)}
            style={{
              padding: '0.4rem',
              border: '1px solid #aaa', borderRadius: '4px'
            }}
          >
            {daysInCurrentWeek.map(dayKey => (
              <option key={dayKey} value={dayKey}>{dayKey}</option>
            ))}
          </select>
        </div>
      )}

      {/* Content & notities */}
      <div style={{
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '8px',
        whiteSpace: 'pre-wrap', // Behoudt witregels
        lineHeight: '1.6'
      }}>
        {contentToDisplay}
      </div>
    </div>
  );
}