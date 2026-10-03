# PIKUL Precision Parts: sample company website

A multi-page company website for a **fictional** Thai CNC machining and sheet-metal manufacturer, built as a portfolio piece.

**Live demo:** https://earnloj-it.github.io/pikul-precision-demo/

> PIKUL Precision Parts is not a real company. Its name, products, machines, figures and contact details are all invented for the demo. **All photographs are AI-generated.** The quote form validates input and shows a confirmation, but sends and stores nothing.

## Pages

| Page | What's on it |
|---|---|
| `index.html` Home | Full-screen factory photo hero, a quick-quote bar, about cards, service tiles, featured work, quality and a call-to-action band |
| `services.html` Services | Photo slider, one section per service with specs, and a machine list |
| `works.html` Our work | Product gallery with category filter |
| `contact.html` Contact | Contact details, illustrated map, and a quote request form with drawing upload |

## Features

- **Thai / English switch** on every page. The choice is remembered between pages.
- **Quick quote → full form:** process, material and quantity chosen on the home page carry over to the contact form.
- **Quote form:** drag-and-drop drawing upload (PDF, DWG, DXF, STEP, IGES), inline validation, and a success state.
- **Mobile-ready:** hamburger menu, stacked layouts and no horizontal scrolling at 375px.
- **Accessibility basics:** semantic headings and tables, a skip link, visible focus, labelled fields and a keyboard-operable slider. Motion respects `prefers-reduced-motion`.

## Tech

Plain HTML, CSS and JavaScript. There is no build step and no framework. The only external resource is the Prompt font from Google Fonts. Hosted on GitHub Pages.

```
index.html, services.html, works.html, contact.html
styles.css       design tokens, layout, components, responsive rules
app.js           TH/EN strings, menu, slider, filter, quote form
assets/img/      AI-generated photos (JPG)
```

The header and footer are written in `index.html` and copied into the other pages with a small script, so all four pages stay identical.

## Image credits

Every photo in `assets/img/` was generated with OpenAI's image model (gpt-image-2, through Codex) for this demo. None shows a real factory, product or person. The exact prompt is embedded in each JPG's comment field.

## License

Code: MIT. The fictional brand and copy are part of the portfolio sample.
