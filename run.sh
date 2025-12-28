#!/usr/bin/env bash

up_to_date=$(npx npm-upgrade | grep -E "^All dependencies are up-to-date!$") >/dev/null

if [ -z "$up_to_date" ]; then
  npm install
fi

npm run dev
