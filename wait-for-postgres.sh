#!/bin/sh
set -e
host="$1"
shift
cmd="$@"

# On ajoute explicitement l'utilisateur stagel3_user
until pg_isready -h "$host" -p 5432 -U stagel3_user; do
  echo "Attente de PostgreSQL sur $host:5432 avec l'utilisateur stagel3_user..."
  sleep 2
done

echo "PostgreSQL est prêt ! Exécution de la commande : $cmd"
exec $cmd