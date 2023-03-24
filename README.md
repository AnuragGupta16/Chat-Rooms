# Full-stack real-time chat



## Install

`npm install` to setup dependencies

## Supabase variables

Create a `.env` file with `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY` (see env.example)

## Setup your Supabase project

The following database table is required:

| Field            | Type      |
| ---------------- | --------- |
| id               | BIGINT    |
| username         | VARCHAR   |
| text             | TEXT      |
| country          | VARCHAR   |
| is_authenticated | BOOLEAN   |
| timestamp        | timestamp |


```

## Setup GitHub authentication (optional)

Follow instrunction [here](https://supabase.io/docs/guides/auth/auth-github)

## Dev

`npm run dev` to run server on port 3000

## Build

`npm run build` to build the react client

# Demo

[https://random-chat.netlify.app](https://random-chat.netlify.app/)

!['demo'](https://random-chat.netlify.app/demo.png "demo")
# Chat-Rooms
# Chat-Rooms
