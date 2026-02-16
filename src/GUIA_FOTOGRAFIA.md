# Guía de Fotografía para Gestiona Asesoría

Este documento detalla las fotografías necesarias para sustituir los "placeholders" actuales en la web. El objetivo es transmitir cercanía, profesionalidad y especialización en el sector agrícola (berries, fresas, arándanos) de Huelva.

---

## 1. Página de Inicio (Home)
**Ubicación:** `src/pages/home/index.html`

### A. Imagen Principal (Hero)
*   **Sección:** Encabezado principal ("Asesoría en Huelva para Empresas").
*   **Descripción:** Esta es la primera imagen que ve el usuario. Debe transmitir confianza y solidez.
*   **Sugerencia:** Una foto amplia de las oficinas o del equipo trabajando en una mesa de reuniones, con luz natural. Si es posible, que se intuya un ambiente moderno pero serio.
*   **Formato:** Horizontal (apaisado).
*   **Referencia en código:** `id="home"`, bloque `div.placeholder-bg` con texto "Imagen Hero".

### B. Imagen "Nuestro Enfoque"
*   **Sección:** "Nuestro enfoque en empresas con ciclos agrícolas".
*   **Descripción:** Acompaña al texto sobre la adaptación a los ciclos del campo.
*   **Sugerencia:** Una foto que conecte la oficina con el campo. Por ejemplo:
    *   Dos miembros del equipo revisando documentos con un agricultor.
    *   Alguien del equipo al teléfono con una ventana o fondo que sugiera actividad.
    *   Detalle de manos trabajando sobre planos o calendarios agrícolas.
*   **Formato:** Cuadrado o ligeramente vertical.
*   **Referencia en código:** `id="focus"`, bloque `div.placeholder-bg` con texto "Imagen Equipo".

---

## 2. Página "Nosotros"
**Ubicación:** `src/pages/nosotros/index.html`

### A. Imagen de Cabecera (Hero)
*   **Sección:** "Gestiona: una asesoría en Huelva que te conoce...".
*   **Descripción:** Foto de grupo de todo el equipo.
*   **Sugerencia:** Una foto de familia del equipo completo. Puede ser en la entrada de la oficina (si tiene el branding visible) o en el interior. Todos mirando a cámara, sonriendo, transmitiendo cercanía (no excesivamente rígidos).
*   **Formato:** Horizontal.
*   **Referencia en código:** `section.about-hero`, bloque `div.hero-group-image`.

### B. Retratos Individuales del Equipo
*   **Sección:** "Este es el equipo que te va a acompañar".
*   **Necesidad:** Fotos individuales tipo primer plano o plano medio corto para las fichas de cada miembro.
*   **Estilo:** Fondo neutro o desenfocado (oficina). Misma iluminación y estilo para todos para dar coherencia.
*   **Lista de Personas:**
    1.  **Juan Pérez** (Socio fundador – Fiscal y contable)
    2.  **Cristóbal Domínguez** (Fiscal y contable)
    3.  **María del Pilar José** (Departamento Laboral)
    4.  **Gema Romero** (Departamento Laboral)
    5.  **Gregorio Manzana** (Departamento Laboral)
    6.  **Aurelia Gómez** (Departamento Fiscal/Contable)
*   **Referencia en código:** `img src="../../../images/team-placeholder.png"`.

---

## 3. Páginas de Servicios
Cada servicio tiene una imagen de cabecera que define la temática.

### A. Asesoría Fiscal
*   **Ubicación:** `src/pages/asesoria-fiscal/index.html`
*   **Concepto:** Orden, números, tranquilidad, cumplimiento.
*   **Sugerencia:** Alguien revisando modelos tributarios, calculadora, o reunión explicativa con un cliente.
*   **Referencia en código:** `section.fiscal-hero`.

### B. Asesoría Contable
*   **Ubicación:** `src/pages/asesoria-contable/index.html`
*   **Concepto:** Análisis, balances, control.
*   **Sugerencia:** Primer plano de gráficos en una pantalla o tablet, libros contables, o manos trabajando en ordenador.
*   **Referencia en código:** `section.about-hero`.

### C. Asesoría Laboral
*   **Ubicación:** `src/pages/asesoria-laboral/index.html`
*   **Concepto:** Personas, contratos, seguridad, equipo.
*   **Sugerencia:** Foto de un apretón de manos, firma de contratos, o el equipo laboral al teléfono (gestión activa).
*   **Referencia en código:** `section.about-hero`.

### D. Asesoría Empresas (Agrícola)
*   **Ubicación:** `src/pages/asesoria-empresas/index.html`
*   **Concepto:** Campo + Gestión.
*   **Sugerencia:** **Muy importante.** Esta foto debe ser la más "de campo". El equipo visitando una finca de fresas/arándanos, o con botas de campo en una reunión in-situ. Debe gritar "entendemos el sector agro".
*   **Referencia en código:** `section.about-hero`.

---

## Recomendaciones Técnicas Generales
*   **Resolución:** Alta resolución (mínimo 2000px de ancho). Nosotros nos encargaremos de optimizarlas para web.
*   **Formato de archivo:** JPG o PNG.
*   **Iluminación:** Preferiblemente luz natural, evitando sombras duras en las caras.
*   **Estilo:** "Corporate lifestyle". Profesionales pero accesibles. Evitar fotos de stock genéricas; queremos que se vea a la gente real de Gestiona.
