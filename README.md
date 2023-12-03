# Health watch (pinger)

# Setup

## Running the app locally

```bash
#run in project terminal
$ npm install
$ npx prisma migrate dev
$ npm run start
```

## Running the app on docker

Use --build if you need to rebuild the images after changes to docker files or if you are launching it for the first time, otherwise just omit it

```bash
#run in project terminal
$ docker compose up --build
```

Use compose down to stop the containers

```bash
#run in project terminal
$ docker compose down
```

## Creating database

Create a database using available postgresql tools and then run

```bash
#run in project terminal
$ npx prisma migrate dev
```

## Seeding database

```bash
#run in project terminal
$ npm run seed
```

# Migrations

## Running migrations

Update your database with latest changes using migrations with

```bash
#run in project terminal
$ npx prisma migrate dev
```

# Testing

Todo...