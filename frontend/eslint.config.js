import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
