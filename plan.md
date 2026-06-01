# Implementation Plan - FutMart P2P Marketplace

A premium, mobile-first P2P marketplace with glassmorphism UI, real-time messaging, and AI-assisted workflows.

## Scope & Non-Goals
- **Scope**: Frontend-only implementation of the marketplace. Data persistence will use `localStorage` for the current session.
- **Non-Goals**: No actual Supabase/Database integration (session constraint). No real AI backend (will use mock AI logic). No actual PWA service worker registration (just the structure).

## Assumptions & Open Questions
- **Assumption**: Glassmorphism theme will rely on Tailwind's `backdrop-blur` and semi-transparent colors.
- **Assumption**: "AI Auto-Fill" and "AI Vision Scan" will be simulated with predefined rules or random delays to mimic processing.
- **Open Question**: Are there specific categories for the horizontal categorization? (Will default to common ones: Electronics, Fashion, Home, etc.)

## Affected Areas
- **Frontend Architecture**: React + Tailwind CSS + Lucide Icons + Framer Motion (for premium feel).
- **Navigation**: Sticky bottom navigation and top header.
- **Authentication**: Mock flows for Google/Apple/Email.
- **State Management**: React Context or local state with `localStorage` persistence.

## Phase 1: Foundation & Layout (frontend_engineer)
- [ ] Initialize theme constants for Glassmorphism (colors, blur levels).
- [ ] Set up routing (Home, Messages, Notifications, Saved Ads, Profile, Listing Create).
- [ ] Create `BottomNav` component with glassmorphism and unread notification badges.
- [ ] Create `Layout` wrapper to manage persistent navigation and responsiveness.

## Phase 2: Authentication & Onboarding (frontend_engineer)
- [ ] Build Login/Signup screen with social buttons.
- [ ] Implement "Forced Onboarding" modal: Name, Location, Phone.
- [ ] Use `localStorage` to check if onboarding is complete before allowing access to Home.

## Phase 3: Home & Discovery (frontend_engineer)
- [ ] Implement horizontal category slider.
- [ ] Build 'Location-Based' search bar/filter UI.
- [ ] Create 'Verified' user badges and premium-styled listing cards.
- [ ] Implement Listing Detail view with glassmorphic overlays.

## Phase 4: Messaging & Real-time Simulation (frontend_engineer)
- [ ] Build Chat List view with search filtering (by username).
- [ ] Build Chat Thread view with:
    - Real-time status indicators (Online/Offline/Last Seen).
    - Read receipts (Sent, Delivered, Read).
    - Sticker Picker system + Favorites library (mock data).
- [ ] Implement "Delete Conversation" (local hide logic).
- [ ] Add "AI Chat Sentinel" warnings for simulated "off-platform" keywords.

## Phase 5: Intelligent Listing Workflow (frontend_engineer)
- [ ] Build multi-step Listing Creation form.
- [ ] Implement "Mandatory Media" (min 3 images) with client-side compression simulation.
- [ ] Add "AI Vision Scan" simulation during upload.
- [ ] Add "AI Auto-Fill" suggestions for categories/tags based on title.

## Phase 6: Support & Moderation (quick_fix_engineer)
- [ ] Implement floating "AI Support Chatbot" widget.
- [ ] Add "Report" icon/modal to profiles and listings.
- [ ] Create a mockup "Admin Review Queue" view for internal demo.
- [ ] Final UI Polish: Ensure consistent `backdrop-blur-md` and `bg-white/10` application.

## Sequencing & Ownership
1. **frontend_engineer**: Owns Phases 1, 2, 3, 4, 5 (Core functionality and layout).
2. **quick_fix_engineer**: Owns Phase 6 (Specific UI features and polish).
