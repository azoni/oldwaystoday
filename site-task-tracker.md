# Website Task Tracker

_Last updated: 2025-04-18 19:41_

---

## Bugs to Fix
| Status | Description | Page/File | Notes |
|--------|-------------|-----------|-------|
| [ ]    | Chat box overlaps with header | Home.js / App.css | Adjust margin-top or use scroll-padding |
| [ ]    | Footer text not centered or italic | App.css | Fix styling for `.footer` |
| [ ]    | Mobile header hides messages | App.css / Home.js | Add scroll padding or offset for header on mobile |
| [ ]    | Scroll behavior isn’t smooth on mobile | chat-box CSS/JS | May need `scroll-behavior: smooth` or JS tweak for touch support |
| [x]    | Blog page shows error on refresh | Blog.js or route config | Check route persistence or client-side routing on refresh |

---

## Features to Add

### Chat & Interaction
| Status | Description | Page/File | Notes |
|--------|-------------|-----------|-------|
| [x]    | Tab-complete placeholder into input | Home.js | On tab, replace input with placeholder text |
| [x]    | Random placeholder on input reset | Home.js | Add to `setInput('')` logic |
| [x]    | Auto-scroll chat box unless user scrolls up | chat-box div | Use `scrollTop` and `scrollHeight` checks |
| [ ]    | Placeholder input without using Tab (mobile-friendly) | Home.js | Add clickable suggestion below input or use button to insert text |
| [ ]    | Persist chat messages and input state on refresh (soft reload) | Home.js | Use `localStorage`; clear only on full tab close |
| [ ]    | 

### Content & Structure
| Status | Description | Page/File | Notes |
|--------|-------------|-----------|-------|
| [ ]    | Display list of blog posts | Blog page | Include image, short description, newest first |
| [ ]    | Add product categories with hierarchy | All pages | E.g., Home > Cleaning, Kids > Clothes |
| [ ]    | Show suggested search requests per category | Home.js | Based on selected product group |
| [ ]    | Add caching for category-based responses | Backend | Improve performance and consistency |

### Monetization
| Status | Description | Page/File | Notes |
|--------|-------------|-----------|-------|
| [ ]    | Open external links in a new tab | All pages | Use `target="_blank"` and `rel="noopener noreferrer"` |
| [ ]    | Monetize site with ads | Site-wide | Use Google AdSense first, then Mediavine/Raptive later |
| [ ]    | Add affiliate programs | Site-wide | Amazon, ShareASale, Thrive Market, Grove, Etsy |
| [ ]    | AI-aided dynamic affiliate link insertion | Backend | GPT detects products and injects affiliate links |
| [ ]    | Add affiliate/ad disclosure on every page | Footer or near GPT responses | Transparency for users |
| [ ]    | Create privacy policy and affiliate disclosure pages | Legal pages | Compliance with ad/affiliate policies |

---

## Design & Branding
| Status | Description | Page/File | Notes |
|--------|-------------|-----------|-------|
| [x]    | Favicon and logo for dark mode | All pages | Match site theme: cute, traditional |
| [x]    | Footer disclaimer and copyright | App.css | Text: *“Products change and AI can make mistakes...”* |
