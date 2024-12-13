# React properties

```bash
# clono la cartella da github

npm create vite@latest

# alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

# apro il .gitignore e aggiungo package-lock.json

 # installo gli altri pacchetti che mi servono

 # cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
 # cancello i file che non mi servono

 #se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

 # comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
```

```bash
Esercizio
Partendo dall'esercizio di ieri e dall'array di posts allegato, l'obiettivo è creare dinamicamente gli articoli all'interno della pagina.
 I dati relativi a ciascun post dovranno essere passati come props ai componenti.
Ogni post ha una proprietà published, e gli articoli devono essere mostrati solo se questa proprietà è impostata su `true`.
Assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css,
Se un post non ha un'immagine, inserite un'immagine di default, potete utilizzare uno dei tanti servizi online come:
> - https://placehold.co/
> - https://picsum.photos/
Bonus
 Aggiungi una sezione nella pagina in cui mostrare la lista dei tag distinti senza ripetizioni.
```
