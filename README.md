## Template 
This is a [Next.js 15 RC](https://nextjs.org/blog/next-15-rc) project with [`npx create-next-app@rc`](https://nextjs.org/blog/next-15-rc#create-next-app-updates).

Do give it a star.

## About This Project
This is a production ready template/app with everything ready for you to get started, **so if you fork it, make some sick apps**.

If you face any probelm you can reach out to me via [Rishi Lahoti](https://www.linkedin.com/in/rishilahoti/) or create an issue here. 

Contributions can be done here only if you like!

## Features
- I think I have included evrything to get started with.
- Postgres DB with Prisma ORM: [**Prisma**](https://www.prisma.io/docs)
- Authentication using [**Lucia**](https://lucia-auth.com/)
- Database on [**Vercel DB**](https://vercel.com/storage/postgres)
- UI components from [**shadcn/ui**](https://ui.shadcn.com/)
- Styled using **Tailwind CSS**
- Real-time form validation with [**React Hook Form**](https://react-hook-form.com/) & [**Zod**](https://zod.dev/)
- Fully functional search field.
- Light, Dark and System theme support.

## IDE Setup
- [**Prettier**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - Ctrl + Shift + P and search Format Document With and select Configure Default Formatter and Select **Prettier Code Formatter** from the menu.

- [**Tailwind**](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - Open setting and search Files Associations and assign ```*.css``` to ```tailwindcss```
  - Search **editor quick suggestions** and turn on ```strings``` to ```on```

- [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - I have alerady added tailwindcss config to work with eslint in the repo.

- [**Prisma**](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
  - No special settings needed I think.

## Env File
Rename the ```.env.example``` to the ```.env``` and I assuming you know how to add all the secret keys since you are using this. If not hit me up or create an issue.

I have alerady added ```.env``` to ```.gitignore```.

## Running Locally
1. Install dependencies using npm:
```sh
npm i --legacy-peer-deps
```

2. Copy `.env.example` to `.env` and update the variables

```sh
cp .env.example .env
```

3. Start the application:
```sh
npm run dev
```

## Database

- Update the ```schem.prisma``` according to your need and and push it to the DB
```sh
npx prisma db push
```

## Thanks to
- [florian](https://github.com/florianwalther-private)
- [shadcn](https:twitter.com/shadcn)'s components

## License

This project is licensed under the terms of the [LICENSE.md](LICENSE.md).