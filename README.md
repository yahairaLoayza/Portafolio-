# Portfolio Landing Page - React + TypeScript + Vite

Landing page inicial inspirada en la referencia visual: fondo dividido, sidebar flotante, hero profesional, panel de tecnologías, mockups de proyectos y barra de contacto inferior.

## Cómo abrirlo en Visual Studio Code

1. Descomprime el ZIP.
2. Abre la carpeta `portfolio-landing-yahaina` en VS Code.
3. Instala dependencias:

```bash
npm install
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

5. Abre la URL que muestra Vite, normalmente `http://localhost:5173`.

## Dónde cambiar tus datos

Edita este archivo:

```txt
src/data/portfolio.ts
```

Ahí puedes cambiar nombre, cargo, frase, teléfono, email, tecnologías y enlaces del navbar.

## Dónde colocar tu foto

La imagen de ejemplo está en:

```txt
src/assets/profile-placeholder.svg
```

Puedes reemplazarla por tu propia foto en PNG, idealmente con fondo transparente. Luego cambia la importación en `src/App.tsx`:

```tsx
import portraitExample from './assets/tu-foto.png';
```

## Dónde colocar tu logo

El espacio del logo está en el componente `Header`, dentro de `src/App.tsx`. Actualmente muestra `YL` como placeholder.
