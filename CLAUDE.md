# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a Vite + React + TypeScript project built with shadcn/ui components and Tailwind CSS. It's a single-page application for Imagenus, a video production company website.

### Key Structure

- **Entry Point**: `src/main.tsx` → `src/App.tsx`
- **Routing**: Uses React Router with a simple structure:
  - `/` → `src/pages/Index.tsx` (main landing page)
  - `*` → `src/pages/NotFound.tsx` (404 page)
- **Components**:
  - Page components in `src/components/` (Hero, Services, Process, etc.)
  - UI components in `src/components/ui/` (shadcn/ui library)
- **Styling**: Tailwind CSS with custom configuration
- **State Management**: TanStack Query for server state

### Landing Page Structure

The main Index page is composed of these sections in order:
1. Hero
2. ValueProposition
3. Services
4. Process
5. FAQ
6. Contact

### Tech Stack

- **Build Tool**: Vite with SWC React plugin
- **UI Framework**: React 18 with TypeScript
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with animations
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **State**: TanStack Query
- **Icons**: Lucide React

### Path Aliases

- `@/` maps to `src/` directory via Vite configuration

### Lovable Integration

This project is integrated with Lovable platform for collaborative development. The `lovable-tagger` plugin is enabled in development mode for component tagging.