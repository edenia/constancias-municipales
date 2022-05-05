# Generador de constancias de pagos de impuestos municipales

![Constancias de Pago de Impuestos Municipales](https://raw.githubusercontent.com/edenia/constancias-municipales/main/webapp/public/images/constancias-home.png)

## Sobre el Proyecto

_El generador de constancias municipales es una aplicación web que permite a los contribuyentes de las municipalidades obtener un documento digital donde podrá ver los pagos de los impuestos municipales de las propiedades con las que cuenta. Dicho documento es firmado digitalmente por la institución que emite dicho documento, lo que lo hace oficial y válido para utilizar en distintos trámites._

_Este proyecto es una iniciativa de Edenia, una empresa que desarrolla soluciones basadas en la web3. Esto con el apoyo y financiamiento de The Trust For The Americas._

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

_Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum._

## Versión

`v0.0.1`

:::note modificar
Lanzamos la versión del software de producción usando etiquetas github siguiendo a Semver.

También usamos los mensajes de confirmación de git para generar el registro de cambios del proyecto.

Con la version de comando yarn puede actualizar la versión de su paquete a través de la línea de comando.
:::

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
- Correr `make run` esto para levantar el proyecto, el caul se encuentra en http://localhost:3000

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

MIT © EOS Costa Rica

## Contribuyendo

Si desea hacer una contribución, siga los siguientes pasos:

1. Crear Fork del proyecto
2. Crea el Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit a los cambios (`git commit -m '<type>(<scope>): <subject>'`)
4. Push a la rama de trabajo (`git push origin feature/AmazingFeature`)
5. Abra un Pull Request

Por favor lea EOS Costa Rica [Pautas de contribución de código abierto](https://guias.eoscostarica.io/docs/pautas-para-codigo-abierto/) para obtener más información sobre las convenciones de programación.

Si encuentra un error, informe los errores grandes y pequeños [**abriendo un issue**](https://github.com/edenia/constancias-municipales/projects/1)

## Colaboradores

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AngeloCG97"><img src="https://avatars.githubusercontent.com/u/51149817?v=4"
    width="100px;" alt=""/><br /><sub><b>Angelo Castro</b></sub></a><br /><a href="#ideas-sergioyuhjtman" title="Code">💻</a> <a href="https://github.com/edenia/constancias-municipales/pulls" title="Reviewed Pull Requests">👀</a><a href="https://github.com/edenia/constancias-municipales" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/edenia/constancias-municipales"><img src="https://avatars2.githubusercontent.com/u/40245170?v=4" width="100px;" alt="Edgar Fernandez"/><br /><sub><b>Edgar Fernandez</b></sub></a><br /><a href="#ideas-edgar-eoscostarica" title="Ideas, Planning, & Feedback">🤔</a><a href="https://github.com/edenia/constancias-municipales" title="Documentation">📖</a> <a href="#talk-edgar-eoscostarica" title="Talks">📢</a></td>
    <td align="center"><a href="https://github.com/Johannayee">
   <img src="https://avatars.githubusercontent.com/u/85965202?v=4" width="100px;" alt="Luis Diego Rojas"/><br /><sub><b>Johanna Yee</b></sub></a><br /><a href="https://github.com/edenia/constancias-municipales/projects/1" title="Ideas, Planning, & Feedback">🤔</a><a href="#design-murillojorge" title="Design">🎨</a></td>
   <td align="center"><a href="https://github.com/ldrojas">
   <img src="https://avatars0.githubusercontent.com/u/29232417?s=460&v=4" width="100px;" alt="Luis Diego Rojas"/><br /><sub><b>Luis Diego Rojas</b></sub></a><br /><a href="https://github.com/edenia/constancias-municipales" title="Ideas, Planning, & Feedback">🤔</a><a href="https://github.com/edenia/constancias-municipales/projects/1" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/edenia/constancias-municipales"><img src="https://avatars0.githubusercontent.com/u/5632966?v=4" width="100px;" alt=""/><br /><sub><b>Xavier Fernandez</b></sub></a><br /><a href="#infra-xavier506" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/edenia/constancias-municipales" title="Documentation">📖</a> <a href="#projectManagement-xavier506" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->


## Sobre Edenia

<div style={{ display: "block", textAlign: "center" }}>
    <img style={{ width: "50%" }} src="https://edenia.com/es/logos/edenia-general-logo.png" />
</div>

EOS Costa Rica es un productor independiente, autofinanciado y de bare-metal de Genesis que proporciona una infraestructura estable y segura para las cadenas de bloques EOSIO. Apoyamos el software de código abierto para nuestra comunidad al mismo tiempo que ofrecemos desarrollo de blockchain empresarial y desarrollo de contratos inteligentes personalizados para nuestros clientes.

[edenia.com](https://edenia.com/es)
