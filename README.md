# Portfolio Website (React + Vite)

A responsive, dark-themed developer portfolio with violet accents. Built with React, Vite, plain CSS and ESLint. There are no UI frameworks and no external images or fonts, so it works offline.

## Quick start on Windows (VS Code + PowerShell)

You need [Node.js](https://nodejs.org) (the LTS version) installed first. Check with `node -v` in PowerShell.

1. Right-click `portfolio-project.zip` and choose **Extract All**.
2. Open VS Code, choose **File → Open Folder**, and select the extracted `portfolio` folder.
3. Open **Terminal → New Terminal**. Make sure it is a PowerShell terminal and that the path ends in `portfolio`.
4. Install the dependencies (only needed once):
   ```powershell
   npm install
   ```
5. Start the development server:
   ```powershell
   npm run dev
   ```
6. Open the local URL shown in the terminal (usually `http://localhost:5173/`). Hold **Ctrl** and click the link, or paste it into your browser.
7. **To stop** the server, click in the terminal and press `Ctrl + C`. **To restart**, run `npm run dev` again.

If PowerShell says that running scripts is disabled, run this once and try again:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

While the server runs, every file you save updates the browser automatically.

## Commands

| Command           | What it does                                                     |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Starts the development server with live reload                   |
| `npm run lint`    | Checks the code for mistakes with ESLint (no output = no issues) |
| `npm run build`   | Creates the optimized production site in the `dist/` folder      |
| `npm run preview` | Serves the `dist/` folder locally so you can test the build      |

## Folder structure

```
portfolio/
├── public/                 Files copied as-is (favicon.svg)
├── src/
│   ├── components/
│   │   ├── Header.jsx      Logo, navigation, mobile menu, call-to-action
│   │   ├── Slider.jsx      Hero section (headline, buttons, stats)
│   │   ├── Work.jsx        Project cards, driven by the PROJECTS array
│   │   ├── Contact.jsx     Contact form with validation
│   │   └── Footer.jsx      Brand, social links, dynamic year, back-to-top
│   ├── App.jsx             Puts the five components in order
│   ├── main.jsx            Starts React
│   └── index.css           All styles and the design system (CSS variables)
├── index.html              Page title, description and the #root element
├── vite.config.js          Vite settings
├── eslint.config.js        ESLint rules
└── package.json            Scripts and dependencies
```

## Customize your portfolio

### Name and branding
Search the project for `Alex Morgan` (Ctrl + Shift + F in VS Code) and replace it with your name. It appears in `Header.jsx`, `Footer.jsx` and `index.html` (the page title and description). Change the logo letter `A` in `Header.jsx` too.

### Each component
- **Header.jsx**: edit the `NAV_LINKS` array at the top to change menu items. The `href` of each link must match a section `id` (`#home`, `#work`, `#contact`). Change the button text ("Hire me") near the bottom.
- **Slider.jsx**: edit the headline (`<h1>`), the paragraph, your city in the kicker line, and the `STATS` array at the top.
- **Work.jsx**: edit the `PROJECTS` array. Each object has `title`, `description`, `tags`, and optional `demo` and `code` links. Delete a key to hide that link. Copy a whole object to add a project; give it a unique `id`.
- **Contact.jsx**: change the text and the `hello@example.com` address (it appears in two places in the file). The validation rules are in the `validate` function.
- **Footer.jsx**: edit the `SOCIAL_LINKS` array with your real profile URLs. The copyright year updates by itself.

### Colors and fonts
Open `src/index.css`. The `:root` block at the top holds every color and font. Change `--accent` and `--accent-strong` to restyle all buttons, links and highlights. Keep text colors light enough on the dark background to stay readable (aim for a contrast ratio of 4.5:1 or higher).

The fonts are system fonts, so nothing is downloaded. To use a web font such as Inter, add its `<link>` to `index.html` and put its name first in `--font-body`. Keep the system fonts after it as a fallback.

### Contact details
The visible email is in `Contact.jsx`. Social links are in `Footer.jsx`.

## Connect a real email service (contact form)

**The form does not send email.** It only validates the input and shows a message saying the message was not sent. This is intentional, because a website with no server cannot send email by itself.

To make it work, use an email service. Two beginner-friendly options:

- **Formspree** (https://formspree.io): create a form, copy its endpoint URL.
- **EmailJS** (https://www.emailjs.com): sends email straight from the browser.

With Formspree, in `Contact.jsx` make `handleSubmit` an `async` function and replace the block that starts at `setStatus('valid')` with something like this:

```jsx
try {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(values),
  })
  if (!response.ok) throw new Error('Request failed')
  setStatus('sent')          // add a 'sent' message in the JSX
  setValues(EMPTY_FORM)
} catch {
  setStatus('failed')        // add a 'failed' message in the JSX
}
```

Then update the messages at the bottom of the component so "sent" says the message was delivered and "failed" asks the visitor to try again or use the email address. Only show a success message after the service confirms success.

Never put secret API keys in React code, because anything in the browser can be read by visitors. Public form IDs (like Formspree's) are designed to be public.

## Deployment

1. Run `npm run build`. This creates a `dist/` folder.
2. Upload it to any static host:
   - **Netlify**: drag the `dist` folder onto https://app.netlify.com/drop.
   - **Vercel / Netlify / Cloudflare Pages**: connect a GitHub repository, set the build command to `npm run build` and the output directory to `dist`.
   - **GitHub Pages**: set `base: '/your-repo-name/'` in `vite.config.js`, build, and publish `dist`.
3. Open the live link and test the navigation and form.

## Accessibility notes

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`) and a "Skip to content" link.
- Visible focus outlines, labelled form fields, and error messages linked to their fields.
- The mobile menu closes with the Escape key.
- Animations are turned off for visitors who prefer reduced motion.

## Troubleshooting

- **`npm` is not recognized**: install Node.js LTS, then close and reopen VS Code.
- **Port already in use**: Vite picks the next free port automatically; use the URL it prints.
- **Blank page after editing**: look at the terminal and the browser console for a typo in the file you just changed.
