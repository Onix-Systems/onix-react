# Zustand Counter with Next.js

This project demonstrates how to use Zustand for state management in a Next.js application. It features a simple counter application that showcases server-side rendering, client-side interactivity, and isolated state management for each request.

## Features

- Server-side rendering with Next.js
- Client-side state management with Zustand
- Isolated state for each request
- TypeScript support
- Tailwind CSS for styling

## Project Structure

- `src/app/page.tsx`: The main page component that fetches the initial count and renders the Counter.
- `src/app/layout.tsx`: The root layout component that wraps the entire application.
- `src/components/Counter.tsx`: The Counter component that displays and modifies the count.
- `src/components/CounterStoreProvider.tsx`: The provider component that creates a Zustand store instance for each request.
- `src/store/counterStore.ts`: The Zustand store definition with actions for incrementing, decrementing, and resetting the counter.
- `src/components/ui/button.tsx`: A reusable Button component.
