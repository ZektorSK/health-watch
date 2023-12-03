# Health watch (pinger)

# Setup

## Running the app on docker

Use --build if you need to rebuild the images after changes to docker files or if you are launching it for the first time, otherwise just omit it

```bash
$ docker compose up --build
```

Use compose down to stop the containers

```bash
$ docker compose down
```

## Creating database

Create a database using available postgresql tools and then run

```bash
$ npx prisma migrate dev
```

# Migrations

## Running migrations

Update your database with latest changes using migrations with

```bash
$ npx prisma migrate dev
```