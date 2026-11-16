# Jcham0 Portfolio

Portfolio personal desarrollado con Astro y pensado para presentar mi perfil como desarrollador web backend Python/Django junior.

## Descripción

Este proyecto sirve como cartera personal y profesional para:

- mostrar mi perfil y experiencia
- presentar proyectos desarrollados con Django y Python
- compartir tecnologías y herramientas utilizadas
- facilitar el contacto con empresas o colaboradores
- publicar mi CV y enlaces de GitHub

La web está diseñada con un estilo oscuro y sereno, responsive y accesible, y se despliega en GitHub Pages.

## URL publicada

https://jcham0.github.io

## Tecnologías

- Astro
- HTML5
- CSS3
- JavaScript
- Python / Django
- SQLite
- Pandas
- Matplotlib
- Git / GitHub
- GitHub Actions

## Requisitos

- Node.js 20+
- npm
- Git

## Ejecutar en local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Jcham0/Jcham0.github.io.git
   cd Jcham0.github.io
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Inicia el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abre la URL de Astro en el navegador, normalmente:
   ```text
   http://localhost:4321
   ```

5. Para compilar la versión de producción:
   ```bash
   npm run build
   npm run preview
   ```

## Despliegue en GitHub Pages

El proyecto está preparado para desplegarse en GitHub Pages usando GitHub Actions.

### Pasos

1. Ve a tu repositorio en GitHub.
2. Entra en Settings > Pages.
3. Selecciona la opción GitHub Actions como fuente de despliegue.
4. Haz push a la rama main.
5. El workflow en .github/workflows/deploy.yml se encargará de construir y publicar el sitio.

La configuración principal del sitio incluye:

```js
site: 'https://jcham0.github.io'
```

y no se usa base para dejar la publicación en la raíz del dominio.

## Estructura del proyecto

```text
src/
  components/
  data/
  layouts/
  pages/
  styles/
public/
  img/
  cv.pdf
  favicon.svg
  og-image.jpg
  robots.txt
.github/
  workflows/
astro.config.mjs
package.json
README.md
```

## Consideraciones

- El sitio está optimizado para móvil, tablet y escritorio.
- Cuenta con accesibilidad básica con foco visible y enlace de salto.
- Incluye SEO con title, description, Open Graph, Twitter Card y sitemap.
- El contenido de proyectos y tecnologías está centralizado en archivos de datos para facilitar mantenimiento.
