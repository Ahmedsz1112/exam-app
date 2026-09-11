# Exam & Diploma Platform

A Next.js App Router application for browsing diplomas and managing an account,
built with TypeScript, authenticated sessions and a cached query layer.

## Overview

The app is organised by feature rather than by file type. Each feature owns its
API calls, components, hooks, validation schemas and types, so a change to
"diplomas" stays inside `src/features/diploma` instead of spreading across the
tree. Shared UI primitives and providers live under `src/shared`.

Authentication runs through NextAuth with a credentials provider; the session
token is attached to outgoing API requests. Diploma listings are fetched through
TanStack Query and paged with infinite scroll.

## Features

- Credentials login with NextAuth, typed session and JWT callbacks
- Route groups separating the auth screens from the authenticated dashboard
- Diploma listing with infinite scroll over a paginated API
- Account page with a profile form validated on the client
- Server-only fetch boundaries so API calls never leak into the client bundle
- Accessible form primitives built on shadcn/ui and Tailwind CSS

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Auth | NextAuth |
| Data fetching | TanStack Query, Axios |
| Forms | React Hook Form |
| UI | shadcn/ui, Tailwind CSS, Lucide icons |
| Pagination | react-infinite-scroll-component |

## Getting Started

```bash
git clone https://github.com/Ahmedsz1112/exam-app.git
cd exam-app
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Base URL of the backend REST API
API=

# Secret used by NextAuth to sign session tokens
AUTH_SECRET=
```

`.env.local` is ignored by git. Never commit real values.

## Project Structure

```
src/
  app/
    (auth)/login/           # Login screen
    (dashboard)/            # Authenticated area
      (diplomas)/           # Diploma listing
      account/              # Profile management
    api/
      auth/[...nextauth]/   # NextAuth route handler
      diplomas/             # Diploma API route
  auth.ts                   # NextAuth configuration
  features/
    auth/                   # APIs, components, hooks, schemas, types
    diploma/
    user/
  shared/
    components/ui/          # shadcn/ui primitives
    context/global/         # NextAuth and React Query providers
    constants/  lib/  types/
```

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # Lint the project
```
