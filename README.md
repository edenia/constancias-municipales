# Generador de constancias de pagos de impuestos municipales

[![Constancias de Pago de Impuestos Municipales](https://raw.githubusercontent.com/edenia/constancias-municipales/main/webapp/public/images/constancias-home.png)](https://www.youtube.com/embed/HhjrIHJRA4I)

**Ver Video: [Proyecto Constancias Digitales Municipalidad de Orotina](https://www.youtube.com/embed/HhjrIHJRA4I)**

## Sobre el Proyecto

_El generador de constancias municipales es una aplicación web que permite a los contribuyentes de las municipalidades obtener un documento digital en el que podrá ver los pagos de los impuestos municipales a su nombre o el de su organización. Este documento es firmado digitalmente por la institución que emite dicho documento, por lo que es oficial y válido para utilizar en distintas instituciones de Costa Rica._

_Este proyecto es una iniciativa de [Edenia](https://edenia.com/es), una empresa que desarrolla soluciones web3 haciendo uso de tecnologías blockchain y otras de la industria 4.0. El proyecto cuenta con el apoyo y financiamiento de [The Trust For The Americas](https://www.trustfortheamericas.org/), una iniciativa de la [Organization of American States](https://www.oas.org/en/)._

**Tabla de Contenidos**

1. Introducción con imágenes
2. Sobre el proyecto
3. Tabla de contenidos
4. Propósito del proyecto
5. Versión
6. Tecnologías
7. Entorno de desarrollo
8. Estructura de archivo
9. Licencia
10. Contribuyendo
11. Colaboradores
12. Sobre Edenia

## Propósito del Proyecto

_El objetivo de este proyecto es permitir a instituciones costarricenses, como municipalidades, acceder a una herramienta para emitir de forma rápida y segura constancias y otros documentos firmados digitalmente con la firma autorizada por el Banco Central de Costa Rica. Este esfuerzo ha sido realizado de forma open-source (código abierto) para que cualquier entidad pueda acceder al proceso._

_El proyecto inició como iniciativa de la Municipalidad de Orotina para permitir a sus personas usuarias solicitar y recibir constancias digitales de impuestos con la firma digital autorizada por el gobierno._

## Versión

`v0.0.1`

---
**NOTE**

Lanzamos la versión del software de producción usando etiquetas github siguiendo a Semver.

También usamos los mensajes de confirmación de git para generar el registro de cambios del proyecto.

Con la version de comando yarn puede actualizar la versión de su paquete a través de la línea de comando.

---
## Tecnologías

- React.js - React 17✨, React Router 6
- Rematch/core - Rematch a Redux Framework
- mui/material - Componentes de React para un fácil y rápido desarrollo de sitios web.
- universal-authenticator-library - Una librería que permite a las aplicaciones usar fácilmente diferentes proveedores de autenticación.
- Lint - ESlint
- Styles - Material-UI Theme (Personalizable)
- Hapi- Servidor web
- Hasura

## Entorno de Desarrollo

Se crea a partir de la rama main, nuestra rama de producción, en caso de querer utilizar el proyecto puede clonar esta rama y desplegarlo en su infraestructura o si desea personalizarlo y hacer publica esta variante puede hacer un fork y guardar sus cambios en el.

### Inicio Rápido

- Clona este repositorio usando `git clone https://github.com/edenia/constancias-municipales`
- Moverse al directorio apropiado: `cd constancias-municipales`
- Crear el archivo con las variables de ambiente: `cp .env.example .env`
- Correr `yarn` para instalar dependencias.
- Correr `make run` esto para levantar el proyecto, el cual se encuentra en http://localhost:3000

#### **Prerrequisitos**

`yarn`

#### **Instalación**

1. Clonar el repositorio

   `git clone https://github.com/edenia/constancias-municipales`

2. Instalar paquetes de yarn

   `yarn install`

   ó solo

   `yarn`

3. Crear variables de ambiente

   `cp .env.example .env`

4. Correr el proyecto

   `make run`

## Estructura de Archivo

```text title="modificar"
/
├── hapi
│   ├── src
│   ├── .dockerignore
│   ├── .eslintrc
│   ├── .gitignore
│   ├── .prettierrc
│   ├── Dockerfile
│   ├── google-credentials.json
│   ├── LICENSE
│   ├── makefile
│   ├── package.json
│   └── yarn.lock
├──  hasura
│   ├── metadata
│   ├── migrations
│   ├── seeds
│   ├── config.yaml
│   ├── Dockerfile
│   └── makefile
├──  kubernetes
├──  signatureService
│   ├── __pycache__
│   ├── .env.example
│   ├── app.py
│   ├── Dockerfile
│   └── signer.py
├──  utils
│   ├── help.mk
│   └── meta.mk
├──  webapp
│    ├── public
│    ├── src
│    ├── .babelrc
│    ├── .eslintrc
│    ├── .gitignore
│    ├── .prettierrc
│    ├── compression.conf
│    ├── config-overrides.js
│    ├── Dockerfile
│    ├── LICENSE
│    ├── makefile
│    ├── nginx
│    ├── package.json
│    └── yarn.lock
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── .gitignore
├── .env.example
├── .lintstagedrc.json
├── .prettierrc
├── LICENSE
├── README.md
└── docker-compose.yml
```

## Licencia

MIT © Sistemas Edenia Internacional S.A.

## Contribuyendo

Si desea hacer una contribución, siga los siguientes pasos:

1. Crear Fork del proyecto
2. Crea el Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit a los cambios (`git commit -m '<type>(<scope>): <subject>'`)
4. Push a la rama de trabajo (`git push origin feature/AmazingFeature`)
5. Abra un Pull Request

Por favor lea EOS Costa Rica [Pautas de contribución de código abierto](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto/) para obtener más información sobre las convenciones de programación.

Si encuentra un error, informe los errores grandes y pequeños [**abriendo un issue**](https://github.com/edenia/constancias-municipales/projects/1)


## Sobre Edenia

<span align="center">
   <a href="https://edenia.com"><img width="400" alt="image" src="https://raw.githubusercontent.com/edenia/.github/master/.github/workflows/images/edenia-logo.png"></img></a>
</span>


Edenia es una empresa que corre infraestructura blockchain independiente y desarrolla soluciones web3. Nuestro equipo de desarrolladores agnósticos a la tecnología ha estado operando desde 1987, impulsando las nuevas tecnologías para hacer la internet más segura, eficiente y transparente.

Algunos de nuestros proyectos incluyen LACChain EOSIO, una red blockchain para América Latina apoyada por el BID Lab; Smart EIR, una plataforma para la industria de logística de contenedores; y el programa de afiliados de la red blockchain Proton.


[edenia.com](https://edenia.com/es)
