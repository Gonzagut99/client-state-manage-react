# Ejercicio: Manejo del estado de react

Este mini proyecto explora las diferentes formas de manejar el estado una aplicación de React desde el cliente.

- **React Reducer**: `useReducer` es un hook de React que se utiliza para manejar estados más complejos en comparación con `useState`. Funciona mediante un patrón de diseño similar a Redux, donde defines un estado inicial y un "reductor".
- **Redux Toolkit y react-redux**: Redux es una biblioteca para manejar el estado de aplicaciones JavaScript, especialmente útil en aplicaciones grandes con estados complejos. Utiliza un único "store" (almacén) para mantener el estado global de la aplicación, y actualiza el estado mediante "actions" (acciones) y "reducers" (reductores). Esto facilita la gestión y el seguimiento del estado a lo largo de la aplicación.
  ```bash
  npm i react-redux @reduxjs/toolkit
  ```
- **Zustand**: Zustand es una biblioteca de gestión de estado para aplicaciones de React. Es ligera y flexible, diseñada para ser más simple y menos intrusiva que otras soluciones como Redux. Con Zustand, puedes crear un "store" (almacén) global para manejar el estado de tu aplicación de manera eficiente y con menos configuración. 
  Ideal para proyectos pequeños y medianos donde se busca agilidad en la gestión del estado. No recomendable para aplicaciones grandes que requieren una estructura de estado más robusta.
  ```bash
  npm install zustand
  ```
- **XState y las maquinas de estado**: XState es una biblioteca para manejar máquinas de estado y autómatas en aplicaciones JavaScript. Permite definir estados y transiciones de manera declarativa, facilitando la gestión de estados complejos y la lógica de flujo en aplicaciones React.
    ```bash
  npm install xstate @xstate/react
  ```

A continuación, algunas vistas del ejercicio.
- Redux:
  ![redux](/public/Redux.png)
- XState: 
  ![xstate](/public/XState.png)

## Reconocimientos
- Author: Gonzalo Gutiérrez [LinkedIn](www.linkedin.com/in/gonzalo-gutiérrez-castillo-5520b1196)
- Basado en el modelo de [@teffcode](https://www.linkedin.com/in/teffcode/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
