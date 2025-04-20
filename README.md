<<<<<<< HEAD
# Fullstack_Web_2025
Proyecto Integrador Full Stack de la Tecnicatura en Desarrollo Web y Aplicaciones Digitales del ISPC
=======
# 🚴‍♀️ Proyecto Integrador - Tienda Full

Proyecto grupal para el módulo "Programador Web" de la Tecnicatura Superior en Desarrollo Web y Aplicaciones Digitales del ISPC (Instituto Superior Politécnico de Córdoba). Está compuesto por tres espacios curriculares: Introducción a la Programación Web II, Programación II, Desarrollo de Software y Proyecto Integrador II.


## 💻 Descripción del proyecto 

Se trata de una aplicación web fullstack para una tienda ecommerce, el rubro seleccionado es la venta de bicicletas. El alcance de este proyecto es un diseño dinámico SPA en Angular para el frontend y Django + DRF para el backend. La base de datos es MySQL alojada en un servicio cloud de clevercloud

![image](https://github.com/fedekrenn/tiendafull-ispc/assets/90353038/d045f1bb-7729-4db7-b924-063e4309cdf0)

## Requisitos

### Frontend

- **Node.js**: 16.x o superior
- **NPM**: 7.x o superior
- **Angular CLI**: 17.x o superior

Para instalar Node.js y npm, puedes descargarlo desde [nodejs.org](https://nodejs.org/).

### Backend

- **Python**: 3.7 o superior

Para instalar Python, puedes descargarlo desde [python.org](https://www.python.org/).

## 🛠 Instalación y ejecución

> [!IMPORTANT]
Según tu instalación de Python deberás usar el comando `python` o `python3`, al igual que `pip` o `pip3`

1. Clonar el proyecto

```bash
git clone https://github.com/ISPC-23/FullStack2024.git
```

2. Instalar las dependencias del proyecto

```bash
cd frontend && npm install
```

3. Inicializar el front

```bash
ng serve -o
```

4. Posicionarse en la carpeta backend

```bash
cd .. && cd backend
```

5. Instalar las dependencias del backend.

Puedes optar por levantar un entorno virtual e instalar las versiones específicas

```bash
pip install -r requeriments.txt
```

6. Levantar el servidor backend

```bash
cd tiendafull && python manage.py runserver
```


### 📃 Documentación:

Toda la documentación del proyecto tal como el documento IEEE830, los diagramas (de clase, entidad-relación, etc), la documentación de las ceremonias, etc. Pueden encontrarse en la  [Wiki del repositorio](https://github.com/ISPC-23/FullStack2024/wiki)

## ❗ Puntos a tener en cuenta

- Para hacer el programa más óptimo y ejecutable en cualquier entorno, se optó por subir la base de datos a un servidor en la nube, el mismo es [Clevercloud](https://www.clever-cloud.com/), los datos de conexión están en el archivo de configuración y modificando sólo los datos por el localhost puede ejecutarse con una DB local. De igual manera, en la carpeta database está el archivo "db_script.sql" con el script que crea la db para poder ejecutarla en local.

>>>>>>> origin/dev
