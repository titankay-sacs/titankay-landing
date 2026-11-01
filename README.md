Titankay – Landing Page

Landing page de Titankay desarrollada con React y Vite.

Tecnologías
React 18
Vite 5
JavaScript (ES Modules)
CSS
Supabase
Instalación
bash
git clone https://github.com/TU-USUARIO/titankay-landing.git
cd titankay-landing
npm install

Desarrollo
bash
npm run dev


La aplicación estará disponible en http://localhost:5173.

Compilación para producción
bash
npm run build


Esto genera la carpeta dist/, preparada para desplegar.

Para probar la versión de producción localmente:

bash
npm run preview

Estructura del proyecto
text
src/
├── components/
├── lib/
├── pages/
├── App.jsx
├── main.jsx
└── styles.css

public/
README.md
package.json
package-lock.json
vite.config.js

Personalización
Colores: variables CSS al inicio de src/styles.css.
Textos y secciones: archivos de src/components/.
Formulario de contacto: src/components/Contact.jsx.

Actualmente, el formulario muestra un mensaje de éxito y registra el envío en consola. Para recibir solicitudes reales, hay que conectarlo a un servicio de correo, CRM o backend.

Licencia

Todos los derechos reservados. Titankay.