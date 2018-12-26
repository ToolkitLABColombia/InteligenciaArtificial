# toolkit

> Carina Generico, aplicación del lado del cliente para el proyecto Toolkit de MINTIC

Explicación para uso del archivo comprimido source.
Nota: esta explicación se encuentra ampliada en la sección de Compilación y Distribución de todos los componentes.
El código fuente del Toolkit tiene dos partes:

Distribución: Contiene la versión compilada con dos archivos (index.html y una carpeta static). Esto se debe pegar en el servidor que el usuario ha seleccionado (Hosting). Con esto es suficiente para que funcione en la nube.

Producción (Desarrollo, Develop): Esta versión de código es para el usuario experto que quiere modificar el código de acuerdo a sus necesidades. Debe instalar los paquetes, librerías y dependencias que se requieren.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
