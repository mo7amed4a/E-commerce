## E-commerce App
Technologies: nextjs, tailwindcss, daisyui, strapi, clerk, typesript

### Watch the video on YouTube
[![IMAGE ALT TEXT HERE](https://raw.githubusercontent.com/m7md0a/E-commerce/main/Screenshot_20240208_105532.webp)](https://www.youtube.com/watch?v=1qKZlmAbgjY)

## Getting Started
```bash
git clone https://github.com/m7md0a/E-commerce.git
# and
cd E-commerce
# and
npm install
```
- add .env.local file
```dosini
# clerk public key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
# clerk secret key
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# strapi url server
NEXT_PUBLIC_URL_API=http://0.0.0.0:1337
# strapi url for axios cleint
NEXT_PUBLIC_URL_API_TWO=http://localhost:1337
# strapi token
NEXT_PUBLIC_API_KEY=

# stripe key 
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = 
STRIPE_SECRET_KEY = 
```

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
