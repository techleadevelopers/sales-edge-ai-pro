import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}", // se estiver usando monorepo
    "node_modules/@shadcn/ui/dist/**/*.{js,ts}"   // opcional
  ],
  theme: {
    extend: {
      // Se quiser adicionar customizações aqui
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
};

export default config;
