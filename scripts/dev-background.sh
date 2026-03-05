#!/bin/sh
cd "$(dirname "$0")/.."
echo "Iniciando servidor en segundo plano..."
nohup npm run dev > .dev-server.log 2>&1 &
echo $! > .dev-server.pid
echo ""
echo "  Servidor corriendo en http://localhost:3000"
echo "  Logs: .dev-server.log"
echo "  Para parar: npm run dev:stop"
echo ""
