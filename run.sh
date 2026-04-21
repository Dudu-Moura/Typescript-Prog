#!/bin/bash
if [ -z "$1" ]; then
  echo "Uso: ./run.sh <arquivo.ts>"
  exit 1
fi
npx ts-node --transpile-only "$1"
