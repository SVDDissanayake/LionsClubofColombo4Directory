# Lions Club of Colombo 4 — Member Directory

A modern, fast, and secure web application for managing and displaying the member directory of the Lions Club of Colombo 4.

## Tech Stack
- Next.js (React)
- Tailwind CSS
- Supabase (PostgreSQL, Auth, Storage)

## Prerequisites
- Node.js 18+
- Supabase account

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd LionsClubofColombo4Directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Supabase project at [supabase.com](https://supabase.com/).

4. Run the SQL scripts in the Supabase SQL Editor in the following order:
   - `supabase/schema.sql` - Creates the database schema and views.
   - `supabase/rls_policies.sql` - Sets up Row Level Security.
   - `supabase/storage.sql` - Creates the storage bucket for photos.
   - `supabase/seed.sql` - (Optional) Inserts sample data for testing.

5. Create an admin user:
   - Go to Supabase Dashboard > Authentication > Users and create a new user.
   - To make the user an admin, run the following SQL snippet in the SQL editor (replace with the user's UUID):
     ```sql
     UPDATE auth.users SET raw_app_meta_data = raw_app_meta_data || '{"is_admin": true}'::jsonb WHERE id = 'YOUR_USER_ID';
     ```

6. Configure environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase credentials (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`).

7. Run the development server:
   ```bash
   npm run dev
   ```

## Development Commands
- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm run start` - Runs the built app in production mode.
- `npm run lint` - Runs ESLint.

## Deployment Guide
This project can be easily deployed to Vercel or Netlify.
1. Push your code to GitHub.
2. Import the project in Vercel/Netlify.
3. Add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables.
4. Deploy!

## Project Structure
- `/src/app` - Next.js App Router pages and layouts.
- `/src/components` - Reusable React components.
- `/src/lib` - Utility functions and Supabase client configuration.
- `/supabase` - Database SQL scripts (schema, policies, seed data).

## License
MIT License
