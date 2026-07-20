# Kven OS

> An AI-native enterprise intelligence workspace for turning authorised business evidence into governed insight, decisions, and human-approved action.

## Overview

Kven OS is an interactive enterprise product prototype for managers and leadership teams. It combines report intake, evidence-led dashboards, scenario preparation, organisational memory, manager communication, and an Executive Copilot experience in one polished workspace.

The product is intentionally designed around a core enterprise rule: information should not affect executive views until a manager explicitly reviews and logs it.

## Features

- **Multi-page entry flow** — Loading → Login → Workspace, with registration and workspace setup for new users.
- **Workspace creation** — Add designated people, role/title, and access scope: Manager, Executive, or Observer.
- **Demo Mode** — Instantly loads a rich manufacturing enterprise dataset covering finance, operations, supply chain, people, quality, sustainability, governance, and risk.
- **Report Studio** — Paste raw business notes or select a local source file, generate a management draft, and explicitly log the reviewed entry.
- **Evidence-led Overview** — Shows manager-logged information only; no predefined business claims are shown by default.
- **Executive Copilot** — Conversational, task-preparation prototype grounded in logged report content.
- **Scenario Lab** — Captures manager-defined assumptions without inventing baselines or forecasts.
- **Enterprise Memory** — Retains source-linked, manager-logged knowledge.
- **Manager Forum** — Permission-scoped internal updates for the leadership workspace.
- **Enterprise UI** — Dark and light modes, responsive layout, Kven identity, loading state, navigation history, and logout control.

## Product flow

```text
Loading → Login → Workspace
                 ├─ New user → Register → Create workspace → Login
                 └─ Demo Mode → Preloaded workspace → Dashboard
```

## Run locally

This is a static browser prototype. No build step is required.

1. Open `loading.html` in a modern browser.
2. The loading page routes to `login.html`.
3. Select **Launch guided demo** to explore a populated workspace, or register and create a workspace.

## Key pages

| Page | Purpose |
| --- | --- |
| `loading.html` | Product loading screen |
| `login.html` | Sign in and guided demo entry |
| `register.html` | Organisation administrator registration |
| `create-workspace.html` | Workspace, people, role, and access setup |
| `index.html` | Main Kven OS workspace |

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` and `sessionStorage`
- Responsive UI and dark/light themes

## Prototype boundaries

Kven OS is currently a frontend prototype. The sign-in flow, roles, report storage, forum activity, and Copilot responses are simulated in the browser.

For production, the platform needs a secure backend, SSO/MFA, tenant isolation, database and document storage, audit logs, document ingestion, approval workflows, integrations, observability, and an AI model accessed through a **server-side** API key. Never place an AI API key in frontend code.

## Demo data

Demo Mode creates the fictional **Asterion Mobility** workspace. The data is illustrative only and includes operational performance, financial metrics, supply risk, quality, people, compliance, and sustainability signals.

## Vision

Kven OS is designed as the foundation for an enterprise operating system where AI assists people with understanding, preparation, coordination, and traceable decision-making—while managers retain authority over material actions.

## License

Add a license before public or commercial distribution.
