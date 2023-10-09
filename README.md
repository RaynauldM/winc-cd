Component1:
Ik heb ervoor gekozen om github secrets te gebruiken om de verbinding te beveiligen. In deze kan ik bepaalde wachtwoorden of gegevens onder een variabel plaatsen. Waar ik het wachtwoord zou moeten opschrijven, waar anderen het zouden kunnen lezen, gebruik ik dan de variabel. Sinds github actions ook van github is, vond ik dit fijn samen werken met elkaar.

Component2:
Ik heb een ssh key - pair aangemaakt. Het was even puzelen waar ik de key op de server moest plaatsen maar een kleine research maakte dit al gauw duidelijk. De andere sleutel gebruikte ik in mijn github omgeving, zodat eenieder die in de github kan komen, de veranderingen kan aanmaken op de server.

Component3:
Ik heb in pytest een simpele test gemaakt om te zien of de github actions doorkomen of niet. Omdat dit niet meteen goed ging, kreeg ik aanvankelijk veel fail meldingen. Uiteindelijk maakte dit juist dat ik goed kon achterhalen waar de problemen lagen. Soms in mijn tests (waardoor ik uiteindelijk heb besloten op een hele simple test voor het gemak) en soms in hoe ik de yml had beschreven.

Probleem1:
Het beveiligen vond ik aanvankelijk wel een probleem. Ik researchde jullie drie tips, maar vond het moeilijk, of misschien vooral spannend, om ermee aan de slag te gaan. Ik heb thuis al wel eens gewerkt met ssh en key pairen, dus besloot toch die route te nemen, ook al vond ik het spannend om de pairs te gebruiken op 2 abstracte machines ipv mijn thuiscomputer. Hierdoor heb ik uiteindelijk zoveel met de server moeten werken, dat ik dat allerminst als een abstract iets zie, maar nu meer als een andere computer ter beschikking voor mezelf.

Probleem2:
Op een gegeven moment, had ik teveel geexperimenteerd op de server dat ik niet meer wist waar alles was en hoe het zat. Vooral mijn flask programma kreeg ik er niet op, constant foutmeldingen over dubbele aanmeldingen op een port. Hoewel ik begrijp en begreep wat dit probleem inhield, had ik zoveel verschillende programmas en poorten gebruikt dat ik niet meer kon vinden welke file ik moest hebben om het te repareren. Uiteindelijk heb ik op digital ocean de hele server laten resetten, wat meer werk en gezoek was dan ik had verwacht. Hierdoor moest ik me meer verdiepen in wat er allemaal mogelijk is met digital ocean.

Probleem3:
Op een gegeven moment had ik moeite om door de authenticatie te komen van de github actions.
Even heb ik zelfs de authenticatie uitgezet, waardoor ik er door heen kwam, maar dit zat me niet lekker. Het was aan alle kanten een niet correcte manier, qua beveiligings oogpunt, en hoewel dit nog niet voor het 'echie' was, vond ik dit te veel voor het gemak. Ik zette het weer aan en vond al gauw het probleem in de plek van opslag van de ssh key, waarna de cd zo goed als afgerond was.

Extra opmerking:
Aanvankelijk was ik niet zo blij te zien een server te gaan moeten betalen, al was het voor een relatief laag bedrag. Aan het eind van dit project kan ik mededelen dat ik de server ga behouden en uitbreiden. Dus bedankt, ik weet niet hoe lang het had geduurd dat ik het uitmezelf zou durven te probren een VSP te nemen.
