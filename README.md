# PIKUL Precision Parts: sample company website

A sample corporate website for a **fictional** Thai CNC machining and sheet-metal manufacturer, built as a portfolio piece.

**Live demo:** https://earnloj-it.github.io/pikul-precision-demo/

> PIKUL Precision Parts is not a real company. Its name, products, machines, figures and contact details are all made up for the demo. The quote form validates input and shows a confirmation, but nothing is sent or stored.

## What it shows

- **Request-for-quote form in the first screen:** drag-and-drop drawing upload (PDF, DWG, DXF, STEP, IGES), process, material, quantity and contact fields, with inline validation and a success state.
- **Thai / English switch:** every string on the page has both languages, and the choice is remembered.
- **Mobile-first layout:** the quote form comes straight after the headline on phones, and tables turn into stacked rows.
- **A visual identity from the trade itself:** the page is a steel sheet on a laser table, with millimetre rulers on the edges. Each section is a part "cut" from the sheet: when it scrolls into view, a laser head traces its outline and peels off the blue protective film.
- **Content buyers actually check:** capabilities with tolerances and sizes, a machine list, a sample inspection report, the RFQ-to-delivery process, and contact details with a plant map.
- **Accessibility basics:** semantic sections and tables, a skip link, keyboard focus styles, and labels on every field. `prefers-reduced-motion` turns the laser animation off.

## Tech

Plain HTML, CSS and JavaScript. There is no build step and no dependencies apart from Google Fonts (Chakra Petch and Bai Jamjuree). It is hosted on GitHub Pages.

```
index.html   page structure and Thai copy
styles.css   steel-sheet design system and responsive layout
app.js       TH/EN strings, part outlines, laser trace, quote form
```

Append `?cut` to the URL to show every part in its finished "cut" state without the animation.

## License

Code: MIT. The fictional brand, copy and illustrations are part of the portfolio sample.
