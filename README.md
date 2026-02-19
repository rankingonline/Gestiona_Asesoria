# Gestiona Asesoría - Sitio Web Corporativo

Este repositorio contiene el código fuente del sitio web corporativo de **Gestiona Asesoría**, desarrollado con tecnologías modernas para ofrecer una experiencia rápida y optimizada.

## 🚀 Tecnologías Utilizadas

- **Vite**: Entorno de desarrollo frontend de próxima generación.
- **HTML5 & CSS3**: Estructura y estilos modernos.
- **JavaScript (Vanilla)**: Lógica de interacción sin dependencias pesadas.
- **Multi-Page Application (MPA)**: Arquitectura basada en múltiples páginas para una mejor organización y SEO.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura organizada por páginas dentro del directorio `src/pages`:

```
src/
├── pages/
│   ├── home/                # Página de inicio
│   ├── nosotros/            # Página "Sobre Nosotros"
│   ├── asesoria-fiscal/     # Servicio de Asesoría Fiscal
│   ├── asesoria-laboral/    # Servicio de Asesoría Laboral
│   ├── asesoria-contable/   # Servicio de Asesoría Contable
│   ├── asesoria-empresas/   # Servicio para Empresas
│   ├── contacto/            # Página de Contacto
│   └── politica-privacidad/ # Política de Privacidad
└── shared/                  # Componentes y estilos compartidos
```

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio**:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Gestiona_Asesoria
    ```

2.  **Instalar dependencias**:
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:5173`.

## 📦 Construcción para Producción

Para generar los archivos optimizados para producción:

```bash
npm run build
```

Los archivos generados se encontrarán en la carpeta `dist`.

## 📸 Recursos Adicionales

- **Guía de Fotografía**: Puedes consultar las especificaciones para las imágenes en `src/GUIA_FOTOGRAFIA.md`.
