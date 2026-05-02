#!/bin/bash
if [ -z "$1" ]; then
  echo "Uso: ./run.sh <arquivo.ts>"
  exit 1
fi
npx tsx --watch "$1"
