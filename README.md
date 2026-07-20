# Kven OS

> An AI-native enterprise intelligence workspace for turning authorised business evidence into governed insight, decisions, and human-approved action.

## Overview

Kven OS is a manager-focused enterprise product prototype. It combines report intake, evidence-led dashboards, scenario preparation, organisational memory, manager communication, and an Executive Copilot experience in one workspace.

The core product principle is simple: business information does not affect executive views until a manager reviews and explicitly logs it.

## Features

- **Multi-page entry flow:** Loading → Login → Workspace
- **Workspace setup:** Add designated people, roles, and access scopes: Manager, Executive, or Observer
- **Demo Mode:** A populated fictional enterprise workspace across finance, operations, supply chain, quality, workforce, sustainability, risk, and governance
- **Report Studio:** Convert raw notes into a review-ready management draft, then explicitly log it
- **Evidence-led Overview:** Displays logged evidence only
- **Executive Copilot:** Conversational, report-aware task-preparation prototype
- **Scenario Lab:** Captures manager-defined assumptions without inventing forecasts
- **Enterprise Memory:** Source-linked, manager-logged organisational knowledge
- **Manager Forum:** Permission-scoped leadership updates
- **Enterprise UI:** Responsive design, light/dark themes, history-aware navigation, logout, and a Kven-branded interface

## Product flow

```text
Loading → Login → Workspace
                 ├─ New user → Register → Create workspace → Login
                 └─ Demo Mode → Preloaded workspace → Dashboard
```

## Run locally

This is a static browser prototype—no build step is required.

1. Open `loading.html` in a modern browser.
2. Continue through Login.
3. Select **Launch guided demo** for a populated workspace, or register and create one.

## Built with Codex and GPT-5.6

This project was developed collaboratively with **OpenAI Codex powered by GPT-5.6**. Codex was used as an implementation partner to design and build the multi-page product flow, refine the UI system, implement browser-local interactions and demo data, create the loading/login/workspace experience, and document the product architecture.

GPT-5.6 helped translate the enterprise product concept into concrete UX, governance, data-lineage, and production-readiness decisions. The current Executive Copilot is a simulated frontend experience; it does **not** make live AI model API calls in this prototype.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` and `sessionStorage`
- Responsive UI and light/dark themes

## Prototype boundaries and production roadmap

Kven OS currently simulates authentication, permissions, report storage, forum activity, and Copilot behaviour in the browser. A production implementation needs a secure backend, SSO/MFA, tenant isolation, database and document storage, audit logs, approval workflows, integrations, observability, and server-side AI model access.

Never place an AI API key in frontend code.

## License

Add an appropriate license before public or commercial distribution.
