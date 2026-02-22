# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js (App Router) + React + TypeScript project built with shadcn/ui components and Tailwind CSS. It's a website for Imagenus, a video production company.

### Key Structure

- **App Router**: `src/app/layout.tsx` (root layout) → `src/app/page.tsx` (home page)
- **Routing**: Next.js App Router file-based routing:
  - `/` → `src/app/page.tsx` (main landing page)
  - `not-found` → `src/app/not-found.tsx` (404 page)
  - `/api/contact` → `src/app/api/contact/route.ts` (contact form API)
- **Providers**: `src/app/providers.tsx` (QueryClient, Tooltip, Toaster, Sonner)
- **Components**:
  - Page components in `src/components/` (Hero, Services, Process, etc.)
  - UI components in `src/components/ui/` (shadcn/ui library)
- **Styling**: Tailwind CSS with custom configuration (`src/app/globals.css`)
- **State Management**: TanStack Query for server state
- **Email**: Resend (via `/api/contact` route handler)

### Landing Page Structure

The main page is composed of these sections in order:
1. Hero
2. ValueProposition
3. Services
4. Process
5. FAQ
6. Contact

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Framework**: React 18 with TypeScript
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with animations
- **Forms**: React Hook Form with Zod validation
- **State**: TanStack Query
- **Icons**: Lucide React
- **Email**: Resend

### Path Aliases

- `@/` maps to `src/` directory via tsconfig paths

### Client Components

Components that use hooks or browser APIs have `"use client"` directive:
- `Hero.tsx`, `Services.tsx`, `FAQ.tsx`, `Contact.tsx`, `providers.tsx`

### Environment Variables

- `RESEND_API_KEY` — required for the contact form API route (set in `.env.local`)
