import { useState } from 'react';

const schema = {
  "Week 1": {
    "Intro": `<h2>Belangrijke Notities:</h2>
<strong>Hydratatie:</strong> 
Drink minimaal 2-3 liter water per dag.

<strong>Kruiden:</strong> 
Gebruik naar smaak diverse kruiden en specerijen (zoutloos indien mogelijk) om smaak toe te voegen aan je maaltijden.

<strong>Olie:</strong> 
Gebruik voor het bakken en stomen een kleine hoeveelheid gezonde olie zoals olijfolie of kokosolie.

<strong>Variatie in groenten:</strong> 
Hoewel ik variatie heb ingebouwd, voel je vrij om binnen de toegestane groenten te wisselen als je iets anders in huis hebt.

<strong>Luister naar je lichaam:</strong> 
Dit is een richtlijn. Als je merkt dat je structureel honger hebt, kun je een kleine aanvulling doen met extra groenten, een handje noten (ongezouten) of een stuk fruit.

<h2>Persoonlijke Voorkeuren:</h2>
Geen vis
Geen zure zuivel zoals yoghurt
Geen eigeel (alleen eiwit)
Geen hummus, avocado, cottage cheese, pistachenoten, couscous, bulgur, champignons, radijs, rauwe wortel, augurk, courgette
Pompoen alleen in soep
Havermout en granola alleen verwerkt (in smoothies)`,
    "Boodschappenlijst": `
Kipfilet
Mager rundergehakt
Komkommer
Ui
Bloemkool
Sperziebonen
Rijstwafels
Specerijen (paprikapoeder, komijn, kaneel)
Magere melk of amandelmelk
Eiwitpoeder
Zilvervliesrijst
Aardappelen
Sojasaus
    `,

    "Dag 1": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Halve banaan

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml amandelmelk (ongezoet)
- 1 banaan
- 1 el havermout
- Handje spinazie
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥙 LUNCH (±450 kcal)</strong>
Wrap met kipfilet:
- 100g gegrilde kipfilet (in reepjes, gekruid en gebakken)
- IJsbergsla
- Tomaat
- 1 el light mayonaise
<strong>Bereidingswijze:</strong> Beleg de wrap met alle ingrediënten, rol op en serveer.

<strong>🍏 TUSSENDOOR (±100 kcal)</strong>
• 1 appel

<strong>🥦 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g mager rundergehakt (gebakken en gekruid)
- 200g broccoli
- 75g zilvervliesrijst
<strong>Bereidingswijze:</strong>
1. Breng een laagje water aan de kook in een pan met deksel.
2. Plaats de broccoli in een stoommandje boven het kokende water. Zorg dat de groenten het water niet raken.
3. Sluit de pan af met de deksel en stoom de broccoli in 5-8 minuten beetgaar.
4. Kook de rijst volgens de instructie op de verpakking.
5. Bak het gehakt in een koekenpan met een klein beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk met een snufje kaneel`,

    "Dag 2": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Handje rozijnen

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1 kiwi
- 1 el havermout
- Handje boerenkool
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Salade:
- 150g gerookte kipfilet
- Gemengde sla
- Komkommer
- Paprika
- Dressing van olijfolie en azijn
<strong>Bereidingswijze:</strong> Snijd alles in stukjes en meng met de dressing.

<strong>🍐 TUSSENDOOR (±100 kcal)</strong>
• 1 peer

<strong>🍗 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g kalkoenfilet (gebakken)
- 200g sperziebonen
- 150g zoete aardappel (uit de oven)
<strong>Bereidingswijze:</strong>
1. Sperziebonen: Breng water aan de kook en kook ze in 8–10 minuten beetgaar, of stoom ze zoals hierboven uitgelegd.
2. Zoete aardappel: Schil en snijd in blokjes of frieten. Besprenkel met een beetje olijfolie en kruiden zoals paprikapoeder en knoflookpoeder. Verspreid over een bakplaat bekleed met bakpapier en bak in een voorverwarmde oven op 200°C gedurende 20–30 minuten.
3. Bak de kalkoenfilet gaar in een pan met een beetje olie.

<strong>🍘 AVONDSNACK (±100 kcal)</strong>
• 1 rijstwafel met 1 el 100% pindakaas`,

    "Dag 3": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Kleine appel

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml havermelk (ongezoet)
- 1/2 banaan
- 1 el havermout
- 1 el lijnzaad
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🍞 LUNCH (±450 kcal)</strong>
Volkoren brood met kipfilet:
- 2 sneetjes volkoren brood
- 100g kipfilet (broodbeleg)
- Sla
- Plakjes tomaat
<strong>Bereidingswijze:</strong> Beleg het brood simpelweg.

<strong>🥜 TUSSENDOOR (±100 kcal)</strong>
• Handje ongezouten amandelen

<strong>🍝 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g kippendijfilet (gebakken en gekruid)
- 200g bloemkoolroosjes
- 75g volkoren pasta
<strong>Bereidingswijze:</strong>
1. Bloemkool: Stoom de bloemkoolroosjes in 5-8 minuten beetgaar (zie Dag 1 voor stoominstructies).
2. Pasta: Kook de volkoren pasta volgens de verpakking.
3. Kippendijfilet: Bak de kippendijfilet gaar in een pan met een beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 100g magere kwark (natuur) met een klein beetje stevia/honing (max 1 theelepel) en een snufje kaneel`,

    "Dag 4": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Dadel (2-3 stuks)

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1/2 mango (bevroren is ook lekker)
- 1 el havermout
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Salade met kikkererwten:
- 150g kikkererwten (uit blik, afgespoeld)
- Komkommer
- Paprika
- Bladspinazie
- Lichte vinaigrette (olijfolie en azijn)
<strong>Bereidingswijze:</strong> Meng alle ingrediënten tot een frisse salade.

<strong>🍊 TUSSENDOOR (±100 kcal)</strong>
• 1 sinaasappel

<strong>🥔 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g tartaar (gebakken)
- 200g spruitjes
- 150g aardappels (gekookt of gestoomd)
<strong>Bereidingswijze:</strong>
1. Spruitjes: Was de spruitjes en snijd het kontje eraf. Kook in een pan met water in 8-12 minuten gaar.
2. Aardappels: Schil de aardappels en snijd in gelijke stukken. Kook in een pan met water en een snufje zout voor 15-20 minuten (of tot gaar). Voor stomen, zie Dag 1 methode, stoom voor 15-20 minuten.
3. Tartaar: Bak de tartaar gaar in een pan met een beetje olie en kruiden.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk`,

    "Dag 5": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Een paar slokken sportdrank (isotone)

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml rijstmelk (ongezoet)
- 1 banaan
- 1 el havermout
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🌯 LUNCH (±450 kcal)</strong>
Wrap met gekookte kipfilet:
- 100g gekookte kipfilet (in reepjes)
- Rucola
- Tomaat
- Een klein beetje (light) kruidenkaas
<strong>Bereidingswijze:</strong> Beleg de wrap met de ingrediënten en rol op.

<strong>🌰 TUSSENDOOR (±100 kcal)</strong>
• Handje walnoten (ongezouten)

<strong>🍜 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Geroerbakte kipfilet (150g)
- 200g paksoi
- Paprika
- 75g basmatirijst
<strong>Bereidingswijze:</strong>
1. Rijst: Kook de basmatirijst volgens de verpakking.
2. Roerbakken: Verhit een wok of grote koekenpan met een beetje olie. Voeg de in stukjes gesneden kipfilet toe en roerbak gaar. Voeg vervolgens de in stukjes gesneden paksoi en paprika toe en roerbak tot ze beetgaar zijn. Kruid naar smaak.

<strong>🍚 AVONDSNACK (±100 kcal)</strong>
• 1 eiwit (gekookt) en 1 rijstwafel
<strong>Bereidingswijze:</strong> Kook een ei hard (ca. 8-10 minuten), pel het en verwijder het eigeel.`,

    "Dag 6": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Rijstwafel met beetje jam

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1/2 peer
- 1 el havermout
- 1 el chiazaad
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Komkommer- en tomatensalade:
- Groot komkommer- en tomatensalade
- 100g magere ham (in blokjes)
- Wat zwarte olijven
<strong>Bereidingswijze:</strong> Snijd de komkommer en tomaat in stukjes, meng met de ham en olijven.

<strong>🥝 TUSSENDOOR (±100 kcal)</strong>
• 1 kiwi

<strong>🍚 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Kipgehaktballetjes (150g kipgehakt) in tomatensaus
- 200g haricots verts
- 150g quinoa
<strong>Bereidingswijze:</strong>
1. Kipgehaktballetjes: Meng kipgehakt met kruiden en eventueel een eiwit. Draai er kleine balletjes van. Bak gaar in een pan. Voeg tomatensaus toe en laat even sudderen.
2. Haricots verts: Stoom de haricots verts (zie Dag 1 voor stoominstructies).
3. Quinoa: Kook quinoa volgens de verpakking (meestal 1 deel quinoa op 2 delen water, koken tot water is opgenomen).

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml amandelmelk (ongezoet)`,

    "Dag 7": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Kleine portie gedroogd fruit (bijv. abrikozen)

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml sojamelk (ongezoet)
- 1/2 banaan
- 1 el havermout
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥪 LUNCH (±450 kcal)</strong>
Volkoren crackers met kipfilet:
- 2 volkoren crackers
- 100g kipfilet (broodbeleg)
- Plakjes komkommer
<strong>Bereidingswijze:</strong> Beleg de crackers.

<strong>🌰 TUSSENDOOR (±100 kcal)</strong>
• Handje walnoten

<strong>🥣 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Pompoensoep (zelfgemaakt, 250ml)
- 100g kipreepjes
- 1 volkoren broodje
<strong>Bereidingswijze:</strong> Snijd pompoen in stukken en kook gaar met wat bouillon en ui/knoflook. Pureer de soep glad. Voeg de gebakken kipreepjes toe.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 100g magere kwark (natuur) met een paar blauwe bessen`
  },
  "Week 2": {
    "Intro": `<h2>Belangrijke Notities:</h2>
<strong>Hydratatie:</strong> 
Drink minimaal 2-3 liter water per dag.

<strong>Kruiden:</strong> 
Gebruik naar smaak diverse kruiden en specerijen (zoutloos indien mogelijk) om smaak toe te voegen aan je maaltijden.

<strong>Olie:</strong> 
Gebruik voor het bakken en stomen een kleine hoeveelheid gezonde olie zoals olijfolie of kokosolie.

<strong>Variatie in groenten:</strong> 
Hoewel ik variatie heb ingebouwd, voel je vrij om binnen de toegestane groenten te wisselen als je iets anders in huis hebt.

<strong>Luister naar je lichaam:</strong> 
Dit is een richtlijn. Als je merkt dat je structureel honger hebt, kun je een kleine aanvulling doen met extra groenten, een handje noten (ongezouten) of een stuk fruit.

<h2>Persoonlijke Voorkeuren:</h2>
Geen vis
Geen zure zuivel zoals yoghurt
Geen eigeel (alleen eiwit)
Geen hummus, avocado, cottage cheese, pistachenoten, couscous, bulgur, champignons, radijs, rauwe wortel, augurk, courgette
Pompoen alleen in soep
Havermout en granola alleen verwerkt (in smoothies)`,
    "Boodschappenlijst": `
Kipfilet
Mager rundergehakt
Komkommer
Ui
Bloemkool
Sperziebonen
Rijstwafels
Specerijen (paprikapoeder, komijn, kaneel)
Magere melk of amandelmelk
Eiwitpoeder
Zilvervliesrijst
Aardappelen
Sojasaus
    `,

    "Dag 1": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Halve banaan

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1 appel
- 1 el havermout
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🍞 LUNCH (±450 kcal)</strong>
Volkoren brood met gekookte kipfilet:
- 2 sneetjes volkoren brood
- 100g gekookte kipfilet
- Sla
- Tomaat
<strong>Bereidingswijze:</strong> Beleg het brood.

<strong>🍊 TUSSENDOOR (±100 kcal)</strong>
• 1 sinaasappel

<strong>🥦 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g mager rundergehakt (gebakken)
- 200g doperwten
- 75g zilvervliesrijst
<strong>Bereidingswijze:</strong>
1. Doperwten: Kook de doperwten in een pan met een beetje water voor 3-5 minuten.
2. Rijst en gehakt: Zie Dag 1 voor instructies.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk met een snufje cacao`,

    "Dag 2": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Rijstwafel

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml amandelmelk
- 1 kiwi
- 1 el havermout
- Handje spinazie
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Salade met kalkoenfilet:
- Grote salade
- 150g kalkoenfilet (broodbeleg)
- Gemengde sla
- Komkommer
- Paprika
- Dressing van olijfolie en azijn
<strong>Bereidingswijze:</strong> Snijd alle ingrediënten en meng met de dressing.

<strong>🍊 TUSSENDOOR (±100 kcal)</strong>
• 1 mandarijn

<strong>🍗 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g kipfilet (gebakken)
- 200g sperziebonen
- 150g aardappels (gekookt of gestoomd)
<strong>Bereidingswijze:</strong>
1. Sperziebonen: Stoom de sperziebonen (zie Dag 1 voor stoominstructies).
2. Aardappels: Zie Dag 4 (Week 1) voor aardappelbereiding.
3. Kipfilet: Bak de kipfilet gaar in een pan met een beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 100g magere kwark (natuur) met een klein beetje stevia/honing`,

    "Dag 3": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Kleine portie gedroogd fruit (bijv. pruimen)

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml havermelk
- 1/2 banaan
- 1 el havermout
- 1 el pompoenpitten
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🌯 LUNCH (±450 kcal)</strong>
Volkoren wrap met kipgehakt:
- 100g kipgehakt (gebakken met kruiden)
- IJsbergsla
- Een klein beetje tomatensalsa (suikervrij)
<strong>Bereidingswijze:</strong> Bak het kipgehakt gaar, beleg de wrap met gehakt, sla en salsa. Rol op.

<strong>🥜 TUSSENDOOR (±100 kcal)</strong>
• Handje ongezouten cashewnoten

<strong>🍝 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g tartaar (gebakken)
- 200g broccoli
- 75g volkoren macaroni
<strong>Bereidingswijze:</strong>
1. Broccoli: Stoom de broccoli (zie Dag 1 voor stoominstructies).
2. Macaroni: Kook de macaroni volgens de verpakking.
3. Tartaar: Bak de tartaar gaar in een pan met een beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 1 eiwit (gekookt) en 200 ml magere melk
<strong>Bereidingswijze:</strong> Zie Dag 5 (Week 1) voor bereiding eiwit.`,

    "Dag 4": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Banaan (halve)

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1/2 mango
- 1 el havermout
- Handje spinazie
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Salade met gekookte kikkererwten:
- Grote salade
- 150g gekookte kikkererwten
- Komkommer
- Tomaat
- Bladspinazie
- Dressing van olijfolie en citroensap
<strong>Bereidingswijze:</strong> Meng alle ingrediënten tot een frisse salade.

<strong>🍏 TUSSENDOOR (±100 kcal)</strong>
• 1 appel

<strong>🍗 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g kipfilet (gebakken)
- 200g bloemkoolroosjes
- 150g zoete aardappel (uit de oven)
<strong>Bereidingswijze:</strong>
1. Bloemkool: Stoom de bloemkool (zie Dag 1 voor stoominstructies).
2. Zoete aardappel: Zie Dag 2 (Week 1) voor bereiding zoete aardappel.
3. Kipfilet: Bak de kipfilet gaar in een pan met een beetje olie.

<strong>🍘 AVONDSNACK (±100 kcal)</strong>
• 1 rijstwafel met 1 el 100% pindakaas`,

    "Dag 5": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Kleine portie gedroogd fruit

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml rijstmelk
- 1/2 banaan
- 1 el havermout
- 1 el lijnzaad
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🍞 LUNCH (±450 kcal)</strong>
Volkoren brood met kalkoenfilet:
- 2 sneetjes volkoren brood
- 100g kalkoenfilet (broodbeleg)
- Sla
- Plakjes komkommer
<strong>Bereidingswijze:</strong> Beleg het brood.

<strong>🍐 TUSSENDOOR (±100 kcal)</strong>
• 1 peer

<strong>🍜 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Geroerbakte tartaar (150g) met 200g broccoli en paprika
- 75g zilvervliesrijst
<strong>Bereidingswijze:</strong>
1. Roerbakken: Verhit een wok of grote koekenpan met een beetje olie. Voeg de tartaar toe en roerbak gaar. Voeg vervolgens de in stukjes gesneden broccoli en paprika toe en roerbak tot ze beetgaar zijn. Kruid naar smaak.
2. Rijst: Kook de zilvervliesrijst (zie Dag 1 voor instructies).

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk`,

    "Dag 6": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Dadel (2-3 stuks)

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1 kiwi
- 1 el havermout
- Handje boerenkool
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Gemengde salade met gerookte kipfilet:
- Groot gemengde salade
- 100g gerookte kipfilet
- Tomaat
- Komkommer
- Lichte dressing
<strong>Bereidingswijze:</strong> Meng alle ingrediënten.

<strong>🍏 TUSSENDOOR (±100 kcal)</strong>
• 1 appel

<strong>🍗 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Gebakken kipdijfilet (150g)
- 200g groene kool (gestoomd)
- 150g quinoa
<strong>Bereidingswijze:</strong>
1. Groene kool: Stoom de groene kool (zie Dag 1 voor stoominstructies).
2. Quinoa: Zie Dag 6 (Week 1) voor bereiding quinoa.
3. Kipdijfilet: Bak de kipdijfilet gaar in een pan met een beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 100g magere kwark (natuur) met een snufje kaneel`,

    "Dag 7": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Rijstwafel met beetje appelstroop

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml sojamelk
- 1/2 banaan
- 1 el havermout
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥪 LUNCH (±450 kcal)</strong>
Volkoren crackers met kipfilet:
- 2 volkoren crackers
- 100g kipfilet (broodbeleg)
- Plakjes tomaat
<strong>Bereidingswijze:</strong> Beleg de crackers.

<strong>🥜 TUSSENDOOR (±100 kcal)</strong>
• Handje ongezouten amandelen

<strong>🥣 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Pompoensoep (zelfgemaakt, 250ml)
- 100g rundergehaktballetjes
- 1 volkoren broodje
<strong>Bereidingswijze:</strong>
1. Pompoensoep: Zie Dag 7 (Week 1) voor pompoensoep bereiding.
2. Rundergehaktballetjes: Draai balletjes van rundergehakt, bak ze gaar en voeg toe aan de soep.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk`
  },
  "Week 3": {
    "Intro": `<h2>Belangrijke Notities:</h2>
<strong>Hydratatie:</strong> 
Drink minimaal 2-3 liter water per dag.

<strong>Kruiden:</strong> 
Gebruik naar smaak diverse kruiden en specerijen (zoutloos indien mogelijk) om smaak toe te voegen aan je maaltijden.

<strong>Olie:</strong> 
Gebruik voor het bakken en stomen een kleine hoeveelheid gezonde olie zoals olijfolie of kokosolie.

<strong>Variatie in groenten:</strong> 
Hoewel ik variatie heb ingebouwd, voel je vrij om binnen de toegestane groenten te wisselen als je iets anders in huis hebt.

<strong>Luister naar je lichaam:</strong> 
Dit is een richtlijn. Als je merkt dat je structureel honger hebt, kun je een kleine aanvulling doen met extra groenten, een handje noten (ongezouten) of een stuk fruit.

<h2>Persoonlijke Voorkeuren:</h2>
Geen vis
Geen zure zuivel zoals yoghurt
Geen eigeel (alleen eiwit)
Geen hummus, avocado, cottage cheese, pistachenoten, couscous, bulgur, champignons, radijs, rauwe wortel, augurk, courgette
Pompoen alleen in soep
Havermout en granola alleen verwerkt (in smoothies)`,
    "Boodschappenlijst": `
Kipfilet
Mager rundergehakt
Komkommer
Ui
Bloemkool
Sperziebonen
Rijstwafels
Specerijen (paprikapoeder, komijn, kaneel)
Magere melk of amandelmelk
Eiwitpoeder
Zilvervliesrijst
Aardappelen
Sojasaus
    `,

    "Dag 1": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Halve banaan

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1 peer
- 1 el havermout
- Handje boerenkool
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🌯 LUNCH (±450 kcal)</strong>
Volkoren wrap met kalkoenfilet:
- 100g kalkoenfilet (broodbeleg)
- IJsbergsla
- Tomaat
- Een klein beetje light mayonaise
<strong>Bereidingswijze:</strong> Beleg de wrap en rol op.

<strong>🥝 TUSSENDOOR (±100 kcal)</strong>
• 1 kiwi

<strong>🥦 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g kipgehakt (gebakken)
- 200g broccoli
- 75g zilvervliesrijst
<strong>Bereidingswijze:</strong>
1. Broccoli: Stoom de broccoli (zie Dag 1 voor stoominstructies).
2. Rijst en gehakt: Zie Dag 1 voor instructies.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 100g magere kwark (natuur) met een paar frambozen`,

    "Dag 2": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Rijstwafel

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml amandelmelk
- 1 sinaasappel
- 1 el havermout
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Salade met gerookte kipfilet:
- Grote salade
- 150g gerookte kipfilet
- Komkommer
- Paprika
- Lichte vinaigrette
<strong>Bereidingswijze:</strong> Snijd alle ingrediënten en meng met de dressing.

<strong>🌰 TUSSENDOOR (±100 kcal)</strong>
• Handje walnoten (ongezouten)

<strong>🥔 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g tartaar (gebakken)
- 200g sperziebonen
- 150g aardappels (gekookt of gestoomd)
<strong>Bereidingswijze:</strong>
1. Sperziebonen: Stoom de sperziebonen (zie Dag 1 voor stoominstructies).
2. Aardappels: Zie Dag 4 (Week 1) voor aardappelbereiding.
3. Tartaar: Bak de tartaar gaar in een pan met een beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk`,

    "Dag 3": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Kleine appel

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml havermelk
- 1 banaan
- 1 el havermout
- 1 el chiazaad
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🍞 LUNCH (±450 kcal)</strong>
Volkoren brood met kalkoenfilet:
- 2 sneetjes volkoren brood
- 100g kalkoenfilet (broodbeleg)
- Sla
- Plakjes tomaat
<strong>Bereidingswijze:</strong> Beleg het brood.

<strong>🍏 TUSSENDOOR (±100 kcal)</strong>
• 1 appel

<strong>🍝 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Geroerbakte kipfilet (150g) met 200g bloemkoolroosjes en wortel (zachte delen, gestoomd)
- 75g volkoren pasta
<strong>Bereidingswijze:</strong>
1. Roerbakken: Zie Dag 5 (Week 1) voor roerbakken, voeg de wortel toe (let op, geen rauwe wortel).
2. Stomen: Stoom de bloemkool en wortel (zie Dag 1 voor stoominstructies).
3. Pasta: Kook de volkoren pasta (zie Dag 3 voor instructies).

<strong>🍘 AVONDSNACK (±100 kcal)</strong>
• 1 rijstwafel met 1 el 100% pindakaas`,

    "Dag 4": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Rijstwafel met beetje jam

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1/2 mango
- 1 el havermout
- Handje spinazie
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Salade met gekookte kipfilet:
- Grote salade
- 150g gekookte kipfilet (in reepjes)
- Komkommer
- Bladspinazie
- Lichte dressing
<strong>Bereidingswijze:</strong> Meng alle ingrediënten tot een frisse salade.

<strong>🍐 TUSSENDOOR (±100 kcal)</strong>
• 1 peer

<strong>🥔 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- 150g mager rundergehakt (gebakken)
- 200g haricots verts
- 150g zoete aardappel (uit de oven)
<strong>Bereidingswijze:</strong>
1. Haricots verts: Stoom de haricots verts (zie Dag 1 voor stoominstructies).
2. Zoete aardappel: Zie Dag 2 (Week 1) voor bereiding zoete aardappel.
3. Gehakt: Bak het gehakt gaar in een pan met een beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk met snufje kaneel`,

    "Dag 5": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Dadel (2-3 stuks)

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml rijstmelk
- 1 kiwi
- 1 el havermout
- 1 el lijnzaad
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🌯 LUNCH (±450 kcal)</strong>
Volkoren wrap met mager rundergehakt:
- 100g mager rundergehakt (gebakken)
- IJsbergsla
- Een klein beetje tomatensalsa
<strong>Bereidingswijze:</strong> Bak het gehakt gaar, beleg de wrap met gehakt, sla en salsa. Rol op.

<strong>🥜 TUSSENDOOR (±100 kcal)</strong>
• Handje ongezouten amandelen

<strong>🍚 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Kipgehaktballetjes (150g kipgehakt) in tomatensaus
- 200g broccoli
- 75g zilvervliesrijst
<strong>Bereidingswijze:</strong>
1. Kipgehaktballetjes: Zie Dag 6 (Week 1) voor bereiding gehaktballetjes.
2. Broccoli: Stoom de broccoli (zie Dag 1 voor stoominstructies).
3. Rijst: Kook de zilvervliesrijst (zie Dag 1 voor instructies).

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 1 eiwit (gekookt) en 200 ml magere melk
<strong>Bereidingswijze:</strong> Zie Dag 5 (Week 1) voor bereiding eiwit.`,

    "Dag 6": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Kleine portie gedroogd fruit

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml magere melk
- 1/2 banaan
- 1 el havermout
- Handje spinazie
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥗 LUNCH (±450 kcal)</strong>
Komkommer- en tomatensalade met gekookte kipfilet:
- Groot komkommer- en tomatensalade
- 100g gekookte kipfilet (in blokjes)
- Een paar zwarte olijven
<strong>Bereidingswijze:</strong> Snijd de komkommer en tomaat, meng met de kipfilet en olijven.

<strong>🍊 TUSSENDOOR (±100 kcal)</strong>
• 1 sinaasappel

<strong>🍗 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Gebakken kalkoenfilet (150g)
- 200g spruitjes
- 150g quinoa
<strong>Bereidingswijze:</strong>
1. Spruitjes: Zie Dag 4 (Week 1) voor spruitjes bereiding.
2. Quinoa: Zie Dag 6 (Week 1) voor bereiding quinoa.
3. Kalkoenfilet: Bak de kalkoenfilet gaar in een pan met een beetje olie.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 100g magere kwark (natuur) met een paar blauwe bessen`,

    "Dag 7": `<strong>🕒 Pre-workout (±100 kcal)</strong>
• Halve banaan

<strong>🍳 ONTBIJT NA SPORTEN (±350 kcal)</strong>
Smoothie:
- 1 scoop whey proteïne
- 200 ml sojamelk
- 1 appel
- 1 el havermout
<strong>Bereidingswijze:</strong> Doe alles in een blender en mix tot een glad geheel.

<strong>🥪 LUNCH (±450 kcal)</strong>
Volkoren crackers met kalkoenfilet:
- 2 volkoren crackers
- 100g kalkoenfilet (broodbeleg)
- Plakjes komkommer
<strong>Bereidingswijze:</strong> Beleg de crackers.

<strong>🥜 TUSSENDOOR (±100 kcal)</strong>
• Handje ongezouten cashewnoten

<strong>🥣 AVONDETEN (±550 kcal)</strong>
Warme maaltijd:
- Pompoensoep (zelfgemaakt, 250ml)
- 100g kipreepjes
- 1 volkoren broodje
<strong>Bereidingswijze:</strong> Zie Dag 7 (Week 1) voor pompoensoep bereiding.

<strong>🥛 AVONDSNACK (±100 kcal)</strong>
• 200 ml magere melk`
  }
};

export default function App() {
  const [week, setWeek] = useState("Week 1");
  const [day, setDay] = useState("Intro"); // Start met de Intro

  const days = Object.keys(schema[week] || {});
  const content = (schema[week] && schema[week][day]) || "Geen gegevens beschikbaar.";
  const noteKey = week + "-" + day;

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: 'auto' }}>
      <h1>Voedingsschema</h1>
      <p><strong>Doel:</strong> Afvallen, spiermassa opbouwen en conditie verbeteren.</p>
      <p><strong>Sportmoment:</strong> Ochtend (inclusief pre-/post-workout voeding).</p>
      <p><strong>Gemiddelde dagelijkse calorie-inname:</strong> Ongeveer 1650 kcal.</p>

      <div style={{ marginBottom: '1rem', marginTop: '2rem' }}>
        {Object.keys(schema).map(w => (
          <button
            key={w}
            onClick={() => { setWeek(w); setDay('Intro'); }} // ← Intro wordt nu standaard geselecteerd
            style={{
              marginRight: 8,
              padding: '0.4rem 1rem',
              backgroundColor: w === week ? '#cce5ff' : '#eee',
              border: '1px solid #aaa',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {w}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>📅 Kies een dag: </label>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={{ padding: '0.4rem', borderRadius: '4px', border: '1px solid #aaa' }}
        >
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div style={{
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '8px',
        whiteSpace: 'pre-wrap',
        lineHeight: '1.8',
        fontSize: '1.05rem'
      }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h3>📝 Jouw notitie (lokaal opgeslagen)</h3>
        <textarea
          id="note"
          style={{ width: '100%', height: '120px', border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem' }}
          onChange={(e) => localStorage.setItem(noteKey, e.target.value)}
          value={localStorage.getItem(noteKey) || ''}
        />
      </div>
    </div>
  );
}
