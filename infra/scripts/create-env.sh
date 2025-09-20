#!/usr/bin/env bash

set -e

# Função de cabeçalho
header() {
    clear
    echo "-----------------------------------"
    echo "🔧 PlanBCore .env generator"
    echo "-----------------------------------"
    echo
}

# Pergunta com default
ask() {
    local prompt=$1
    local default=$2
    local var
    read -p "$prompt (default: $default): " var
    echo "${var:-$default}"
}

header
ENVMODE=$(ask "Enter ENV mode" "development")
API_PORT=$(ask "Enter API port" "8080")
AGENT_PORT=$(ask "Enter Agent port" "9090")
POSTGRES_USER=$(ask "Enter PostgreSQL user" "planb")
POSTGRES_PASSWORD=$(ask "Enter PostgreSQL password" "secret")
POSTGRES_DB=$(ask "Enter PostgreSQL database" "planbcore")
JWT_SECRET=$(ask "Enter JWT secret" "changeme")
PROXY_PORT=$(ask "Enter Proxy port" "80")
PROXY_HOST=$(ask "Enter Proxy host" "localhost")

header
echo "📋 Summary of configuration:"
echo "ENV_MODE        = $ENVMODE"
echo "API_PORT        = $API_PORT"
echo "AGENT_PORT      = $AGENT_PORT"
echo "POSTGRES_USER   = $POSTGRES_USER"
echo "POSTGRES_PASS   = $POSTGRES_PASSWORD"
echo "POSTGRES_DB     = $POSTGRES_DB"
echo "JWT_SECRET      = $JWT_SECRET"
echo "PROXY_PORT      = $PROXY_PORT"
echo "PROXY_HOST      = $PROXY_HOST"
echo

read -p "Do you want to save this configuration? (y/n): " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
    echo "❌ Aborted."
    exit 1
fi

# Nome do arquivo
read -p "Enter output filename (default .env): " OUTFILE
OUTFILE=${OUTFILE:-.env}

cat > "$OUTFILE" <<EOL
=======================
# 🌍 Environment Mode
=======================
ENV_MODE=${ENVMODE}

=======================
# 🔑 API
=======================
API_PORT=${API_PORT}
JWT_SECRET=${JWT_SECRET}

=======================
# 🤖 Agent
=======================
AGENT_PORT=${AGENT_PORT}

=======================
# 🗄️ Database (PostgreSQL)
=======================
POSTGRES_USER=${POSTGRES_USER}
POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
POSTGRES_DB=${POSTGRES_DB}
POSTGRES_PORT=5432
POSTGRES_HOST=postgres

=======================
# 🌐 Proxy
=======================
PROXY_PORT=${PROXY_PORT}
PROXY_HOST=${PROXY_HOST}
EOL

echo "✅ $OUTFILE created successfully!"
