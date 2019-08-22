/* Tar bort sista kolumnen i reservationstabellen (#hold-table)

Koha version: 16.05.04.000
Av: Magnus Pettersson, LTU - magnus.pettersson@ltu.se

Problemet med det flesta tabeller i Koha är att de visas med hjälp av ajax. 
Det gör att vi inte kan använda oss enbart av "$(document).ready" funktionen för att ändra på sidan. 
Utan sidan måste först ladda färdigt innan vi kan ändra.

I mitt fall gick det utmärkt att ändra table header (th) men inte datan i tabellen (td) eftersom 
tabellen laddas vid två tillfällen. Lösningen blev att kolla efter DOMSubtreeModified event på table id. 
När tabellen är uppdaterad så fungerar det utmärkt att uppdatera sidan.
*/

$(document).ready(function () {
  $('#holds-table').bind("DOMSubtreeModified", function() {
    $('#holds-table tr').find('td:eq(8),th:eq(8)').remove();
  });
});
