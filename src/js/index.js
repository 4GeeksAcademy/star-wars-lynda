import React from "react";
import { createRoot } from "react-dom/client";

// Importa estilos globales
import "../styles/index.css";

// Importa el Layout principal
import Layout from "./layout.js";

// Importa la función injectContext
import injectContext from "./store/appContext.js";

// Envuelve el componente Layout con el Context Provider
const LayoutWithContext = injectContext(Layout);

const root = createRoot(document.querySelector("#app"));

// Renderiza la aplicación con el contexto
root.render(<LayoutWithContext />);



