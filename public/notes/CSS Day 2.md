---
title: CSS Day 2
created: '2023-06-09T07:24:34.787Z'
modified: '2023-06-09T16:01:34.452Z'
---

# CSS Day 2

## Miriam Suzanne

- Container queries zijn eigenlijk niet mogelijk doordat de query oneindig blijft loopen.
- Normal flow
- Intrensic size. Element bepaalt zelf de grootte.
- Extrensic size. De grootte wordt van buiten af bepaald.
- Chrome heeft het loop probleem jaren geleden al opgelost door de loop te stoppen.
- style property `contain: inline-size;` zorgt dat absolute elementen in de container blijven??
- Handig om de html element een `container-type: size;` te geven.
- Geef de containers een naam. `container-name: layout root / size;`
- Door de container een naam te geven kun je containers overslaan.
- Je kunt niet de container zelf stylen met container queries.
- Ik zag bij de stand van Google dat ze in hun Devtools elementen hadden met een container pil, zoals je bij grid en flex ook hebt. Ik denk dat zij dus gebruik maken van container queries en dat wanneer je een `container-type` op geeft dat je dan zo'n pil ernaast krijgt.
- Door deze talk zie ik in dat het handig is om wrappers/containers te gebruiken. Ik probeerde dit voorheen altijd te vermijden, omdat ik dat voorheen zag als onnodig html.
- Containers hebben ook style queries waar je styles en ook bijvoorbeeld custom properties kan controleren. Ik zie hier handigheid in met light en dark theme bijvoorbeeld `@container style(--theme: dark;)`
- Kleuren zijn lastig te vergelijken. Ze moeten exact overeenkomen. `white` is niet hetzelfde als `#fff`. Je kunt de property aanmaken als color door het op deze manier te doen:
```css
@property --color {
  syntax: "<color>";
  inherits: false;
  initial-value: #fff;
}

```

## Umar Hansa

- Snippets gebruikte ik al. De laatste tijd niet zoveel mee gedaan. Misschien interessant om nog eens naar te kijken.
- Pre defined values in snippets
- Systeen snippets (Alfred app)
- Gebruik AI om utility classes te converteren naar CSS
- Bloop.ai kan goed omgaan met vage berichten
- Sticky scroll
- Expand region
- Styles pane in DevTools. Highlight de code die je aan hebt gepast, zodat je het niet kwijt raakt.
- Filesystem in DevTools. Hier kun je bestanden aanpassen die dan gesynced worden met je project. Ik twijfelde eerst of het wel voor Frameworks & NodeJS werkte, maar Umar zei dat het ook server side werkte.
- Shortcat is command + f op steroide.
- Je kunt lighthouse runnen vanaf de commandline.

## Stephanie Eckles

- Een nested CSS selector moet beginnen met een `&` of andere character. 
- `@layer` kun je style sets groeperen en overschrijven.
- `@layer global, typography;` de laatste layer krijgt altijd voorrang.
- Property `accent-color` checken.

## Jhey Tompkins

- Aria pressed dark mode button.
- Switch kun je checken of de input checked is.

## Bramus van Damme

- `@media (prefers-reduced-motion)`
- `<meta name="view-transition" content="same-origin" />`
- View transition zijn eigenlijk snapshots van de website. Een nieuwe en een oude.
- `::view-transition-old()`
- `::view-transition-new()`
- Scroll timeline
- `animation-timeline: scroll(<axis>, <scroller>);`
- Geen tijd meer geven aan je animation.
- `animation-range: <form> <till>`
- `animation-timeline: view(<scroller> )`

## Manuel Matuzovic

- htmlhell.dev
- Relative color syntax
- Check container style queries.
- `height: 100dvh;` Dynamic viewport height.
- `scrollbar-gutter: stable;`
- `masonary-auto-flow`

