# Vetrina – Sito della Farmacia Mameli (Loiri)

Sito vetrina statico (HTML, CSS e un po' di JavaScript), senza dipendenze né build.

## Anteprima locale

Apri `index.html` nel browser, oppure avvia un server locale:

```sh
python3 -m http.server 8000
```

e visita <http://localhost:8000>.

## Struttura

```
index.html            pagina unica: apertura, servizi, galleria, contatti e mappa
css/style.css         stili (colori principali nelle variabili in :root)
js/main.js            menu mobile e lightbox della galleria
images/logo.png       logo (croce con caduceo)
images/favicon.png    icona del browser
images/gallery/       foto del locale (interno ed esterno)
fonts/                caratteri Poppins e Oswald (licenza OFL), ospitati nel sito
```

## Personalizzazione

- **Servizi**: ogni servizio è un `<li>` nella sezione `#servizi`; aggiungi o rimuovi voci liberamente.
- **Foto**: le immagini sono in `images/gallery/` (JPEG, larghezza 1600 px). Per aggiungerne una, copiala lì e aggiungi un `<a><img></a>` nella sezione `#galleria`.
- **Colori**: ripresi dal volantino della farmacia; si cambiano con `--green` e le altre variabili all'inizio di `css/style.css`.

## Privacy

Il sito non usa cookie e non carica risorse da altri siti (né Google Fonts né mappe incorporate): la mappa è un semplice link a Google Maps.

## Pubblicazione

Essendo un sito statico, può essere pubblicato su qualsiasi hosting web caricando l'intera cartella, oppure con GitHub Pages.
