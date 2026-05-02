@echo off
if "%1"=="" (
  echo Uso: run.bat ^<arquivo.ts^>
  exit /b 1
)
npx ts-node --transpile-only %1