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
index.html            pagina unica: apertura, servizi, galleria, contatti
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

## SEO

- Titolo, descrizione, anteprima per i social (`images/og-image.jpg`) e dati strutturati `Pharmacy` (schema.org) sono in `<head>` di `index.html`.
- `robots.txt` e `sitemap.xml` sono nella radice.
- L'indirizzo del sito è `https://www.farmaciamameliloiri.it/` (file `CNAME` per GitHub Pages): se cambia, aggiornarlo in `CNAME`, `index.html`, `robots.txt` e `sitemap.xml`.
- Se cambiano orari, telefono o servizi, aggiornare anche i dati strutturati nel `<script type="application/ld+json">`.
- Le foto della galleria hanno miniature leggere in `images/gallery/thumb/` (800 px).

## Privacy

Il sito non usa cookie e non carica risorse da altri siti (né Google Fonts né mappe incorporate): la mappa è un semplice link a Google Maps.

## Pubblicazione

Essendo un sito statico, può essere pubblicato su qualsiasi hosting web caricando l'intera cartella, oppure con GitHub Pages.
