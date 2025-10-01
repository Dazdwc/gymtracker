#!/bin/sh
# backend/docker-entrypoint.sh

# Espera a que PostgreSQL esté listo
/usr/src/app/backend/wait-for-db.sh

# Aplica las migraciones de Django
python manage.py migrate --noinput

# Arranca el servidor de desarrollo de Django
python manage.py runserver 0.0.0.0:8000
