## Instalación

1. Clonar repositorio `git clone https://github.com/dietic/turismo_backend.git`
2. Instalar dependencias `npm install`
3. Duplicar archivo `.env.example`
4. Renombrarlo a `.env` y cambiar contenido a:
```
NODE_ENV=dev
APP_SERVICE=turismo_ui
APP_SERVICE_PORT=8333
API_VERSION=1.0.0
POSTGRES_USER=turismo_admin
POSTGRES_PASSWORD=
POSTGRES_DATABASE=turismo
```
5. Instalar postgres en la máquina
6. Instalar PGAdmin 4 e ingresar
7. Correr los scripts en la carpeta `sql`
8. Levantar la aplicación con `npm run dev`