# Testfall

## Tabell

| Testfall Namn                                | Indata       | Förväntat Utfall                           |
|----------------------------------------------|--------------|--------------------------------------------|
| Hämtning av Väderdata (korrekt indata) 1.1   | Stad: Kalmar | Väderinformation för Kalmar visas          |
| Hämtning av Väderdata (inkorrekt indata) 1.2 | Stad: 123    | Felmeddelande om att staden inte hittades. |
| Ritning av Stapeldiagram 2.1                 | Stad: Kalmar | Diagram visas se testfall 2.1              |
| Ritning av Linjediagram 2.2                  | Stad: Kalmar | Diagram visas se testfall 2.2              |
| Ritning av Pajdiagram 2.3                    | Stad: Kalmar | Diagram visas se testfall 2.3              |

## Testfall

### 1.1 Hämtning av Väderdata (korrekt indata)

Starta applikationen. Skriv in Kalmar i sökfältet. Tryck på submit knappen.

Väderinformation om kalmar bör visas.


### 1.2 Hämtning av Väderdata (inkorrekt indata)

Starta applikationen. Skriv in 123 i sökfältet. Tryck på submit knappen.

Ett felmeddelande bör visas och meddela att staden inte hittades.



### 2.1 Ritning av Stapeldiagram

Starta applikationen. Skriv in Kalmar i sökfältet. Tryck på submit knappen.

Väderinformation om kalmar bör visas.

Tryck sedan på knappen "get five day forecast"

Ett stapeldiagram bör visas (med andra diagram) det bör se ut så här:

[Stapeldiagram]()

### 2.2 Ritning av Linjediagram

Starta applikationen. Skriv in Kalmar i sökfältet. Tryck på submit knappen.

Väderinformation om kalmar bör visas.

Tryck sedan på knappen "get five day forecast"

Ett linjediagram bör visas (med andra diagram) det bör se ut så här:

[Linjediagram]()

### 2.3 Ritning av Pajdiagram

Starta applikationen. Skriv in Kalmar i sökfältet. Tryck på submit knappen.

Väderinformation om kalmar bör visas.

Tryck sedan på knappen "get five day forecast"

Ett pajdiagram bör visas (med andra diagram) det bör se ut så här:

[Pajdiagram]()