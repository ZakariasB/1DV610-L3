# Väderdata Visualisering Applikation

## Bakgrund

Mängden data som finns tillgänglig för allmänheten är enorm. Det blir därför svårt att snabbt och smidigt få en insiktsfull visualisering av denna data. Specifikt inom väderinformation kan snabba visuella insikter vara avgörande för reseplanering, eventhantering samt allmän kunskap om klimatförändringar. Denna applikation syftar till att omvandla rå väderdata till lättförståeliga diagram för en bättre användarupplevelse.


Genom att ta väderdata från en fem dagars prognos och sedan omvandla detta till linje, paj samt stapeldiagram kan användare lättare visualisera data och lättare göra resval / använda datan för eget syfte. 


## Målgrupper

De primära användarna omfattar resenärer som planerar resor baserat på kommande väder, Event Chefer, lokala invånare som är nyfikna på vädret och vill jämföra detta samt användare som vill få en överblick och jämföra data över en kort period. 

Det finns även sekundära användare som till exempel utvecklare som vill integrera eller utvidga applikationen eller utbildningsinstitutioner som undervisar i data eller väderfenomen.

## Marknad

Trots att det finns en sådan utbredd marknad för väderinformation så finns det fortfarande en marknad för denna applikation. Detta eftersom den ökade mobiliteten i samhället och det globala behovet av väderinformation ökar. Detta inkluderar inte bara Sverige utan även andra länder där liknande tjänster kan vara otillräckliga.


## Liknande System

Det finns flera välanvända väderapplikationer på marknaden såsom SMHI, Weather.com, YR och många fler. Många av dessa erbjuder grundläggande prognoser och nuvarande väderinformation. Vad som särskiljer denna applikation är fokus på att omvandla denna data till olika former av diagram för att kunna visualisera datan på ett nytt sätt. 


## Egenskaper


Användare kan välja vilka städer de är intresserade att se data för samt att användare kan välja vilken vädermätning (temperatur, nederbörd, vindhastighet) de vill visualisera. Användare kan interagera med data genom att skapa linje, paj och stapeldiagram för att jämföra data över en 5 dagars eller kortare period. 

Applikationen syftar till att låta användare skapa lättförståeliga diagram över väderdata enkelt och snabbt.


## Teknik

För att få tag på väderdata används OpenWeatherMap. För att rita upp diagrammen används diagrammodulen från L2. Som server-side ramverk används Express för routing samt för att servera statiska filer.

