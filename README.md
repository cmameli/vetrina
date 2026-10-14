# Vetrina – Sito della farmacia

Sito vetrina statico (HTML, CSS e un po' di JavaScript), senza dipendenze né build.

## Anteprima locale

Apri `index.html` nel browser, oppure avvia un server locale:

```sh
python3 -m http.server 8000
```

e visita <http://localhost:8000>.

## Struttura

```
index.html            pagina unica: hero, chi siamo, servizi, galleria, contatti
css/style.css         stili (colori principali nelle variabili in :root)
js/main.js            menu mobile e lightbox della galleria
images/favicon.svg    logo / icona
images/gallery/       foto del locale
```

## Personalizzazione

- **Testi e dati**: nome della farmacia, indirizzo, telefono, email, orari e P.IVA sono in `index.html` (cerca "Farmacia Esempio" e "000").
- **Servizi**: ogni servizio è un `<li>` nella sezione `#servizi`; aggiungi o rimuovi voci liberamente.
- **Foto**: le immagini in `images/gallery/` sono segnaposto. Sostituiscile con le foto reali (es. `foto-1.jpg`, consigliato formato 4:3, circa 1600×1200 px) e aggiorna i percorsi e i testi `alt` nella sezione `#galleria`.
- **Colori**: modifica `--green` e le altre variabili all'inizio di `css/style.css`.

## Pubblicazione

Essendo un sito statico, può essere pubblicato su qualsiasi hosting web caricando l'intera cartella, oppure con GitHub Pages.
