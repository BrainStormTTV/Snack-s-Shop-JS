### Nicola Dell'olio
### Paolo Marzocchi
# MILESTONE 1
- Analizziamo il layout e cerchiamo di individurare delle variabili che potrebbero esserci utili per lo sviluppo del progetto: colori, spazi, bordi, larghezze, etc.
- Impostiamo quindi delle custom properties da sfruttare nel CSS.

<!-- Alessia Vozzo
Arianna Salvini -->
## Milestone 2
- Impostiamo il macro layout. 
- Facciamo in modo che vengano affiancati i due box con la giusta proporzione nella larghezza e con la giusta centratura rispetto alla viewport.



### Giorgia Mancini
### Simone Nolberto
## Milestone 3
- Osservando il layout ragioniamo su come impostare i nostri dati per mostrarli all’utente.
- Proviamo a creare un oggetto che rappresenti uno dei prodotti in tabella: di quali proprietà abbiamo bisogno? che tipo di dato sono? Con quale struttura gestiamo la lista di prodotti?
- N.B. nello scaffolding abbiamo già gli asset di riferimento (le immagini).

# tools 
- const product {img, name, price};

### Matte Mutti
### Moldovan Emanuel

## Milestone 4
- Impostiamo gli header (titoli e linea di separazione) delle due sezioni. 
In particolare:
- il numero di items mostrati nella sezione di sinistra deve essere dinamico (se sto gestendo 10 prodotti deve apparire la scritta “10 items”)


### Simone Nolberto
### Francesco Berretta
# Milestone 5
- Impostiamo l’HTML e il CSS della tabella dei prodotti. 
- Creiamo l’intestazione della tabella e una riga di esempio, stampando un’immagine e dei dati statici. 
- Lasciamo vuota per ora la colonna QUANTITY.


### Mutti Matteo
### Stanislav Tryfenko
# Milestone 6
Lavoriamo alla colonna QUANTITY. 
-Facciamo in modo che nella colonna sia presente un input numerico disabilitato, con a fianco i pulsanti - e + per incrementare la quantità del prodotto. Per ora ignoriamo la parte JS.

### Massimo Romano
### Antonio De Nigris
# Milestone 7

Iniziamo a rendere le cose dinamiche. Creiamo una funzione render e al suo interno scriviamo il codice necessario per far sì che appaia una riga nella tabella per ogni prodotto. Manteniamo ancora i dati statici, assicuriamoci solo che se abbiamo 5 prodotti appaiono 5 righe nella tabella, tutte uguali.

### Nicola Dell'olio
### Simone Cerri
# Milestone 8
Sostituiamo ai dati statici i dati dei prodotti:
immagine corretta
quantità corretta nell’input
prezzo
totale (come lo calcoliamo?)

### Simone Vacca
### Daniele Colaci
## milestom 9
Aggiungiamo due listener ai pulsanti + e -. Facciamo in modo che al click venga stampato (in console) il nome del prodotto della riga su cui abbiamo cliccato.

- aggiungiamo gli add event listener
- log product.name

### Francesco Berretta
### Emanuel Moldovan
## Milestone 10
- Al click sul pulsante + deve essere incrementata la quantità del prodotto e che questa venga aggiornata correttamente in pagina. 