Since the project is using CockroachDB, the database is hosted on Cockroach Cloud. The database is accessible via the following connection string:

.env

```bash
DATABASE_URL="xxxxx"
```

Clerk is used for authentication. The project is using the Clerk's test environment. The Clerk's test environment is hosted on AWS EU Central 1 region. The project is using the following Clerk configuration:

.env.local

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxx
CLERK_SECRET_KEY=xxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/new-user
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/new-user
```
