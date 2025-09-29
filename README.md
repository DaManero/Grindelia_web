# Grindelia | Apart Hotel

## Descripción

Plantilla React para sitio web de Apart Hotel, basada en Vite. Incluye múltiples componentes, estructura modular y estilos personalizables.

## Instalación

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura principal

- `src/`: Código fuente
  - `components/`: Componentes reutilizables (Header, Footer, Pages, etc.)
  - `helpers/`: Funciones de utilidad
  - `sass/`: Estilos SCSS
- `public/`: Imágenes y recursos estáticos
- `index.html`: Entrada principal
- `vite.config.js`: Configuración Vite

## Dependencias principales

- React
- React Router DOM
- Vite
- Sass

## Tipografías

- La plantilla utiliza tipografías web estándar y puede incluir fuentes personalizadas en el archivo SCSS principal.

## Paleta de colores

Usa esta paleta para mantener la identidad visual:

| Uso                        | Color                  | Hex     |
| -------------------------- | ---------------------- | ------- |
| Principal (Logo/Identidad) | Verde grisáceo natural | #7B8775 |
| Fondo claro / Base         | Marfil cálido          | #F5F4F1 |
| Texto principal            | Gris carbón            | #7B8775 |
| Secundario 1               | Arena suave            | #C7C2B8 |
| Secundario 2               | Taupe cálido           | #A4978E |
| Acento de lujo             | Dorado suave           | #C5A46D |
| Acento natural             | Verde profundo         | #5F7260 |

## Parámetros útiles

- Modifica el título en `index.html` y en el helper `PageTitle.js`.
- El menú de navegación está en `src/components/Header/Nav.jsx`.
- Los estilos globales y variables de color pueden definirse en `src/sass/`.

## Notas

- El proyecto está preparado para personalización rápida.
- Puedes agregar más secciones, componentes o páginas según las necesidades del hotel.

---

Actualiza este README con instrucciones específicas, cambios o parámetros adicionales según avance el desarrollo.
