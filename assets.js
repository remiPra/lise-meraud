// assets.js
// Colle ici ta liste EXACTE (avec les ### titres + les puces * `url`)
const RAW = `
### Crâne Amande double spirale

* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240624_140100-705x1024.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_184808-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_184820-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_190454-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_184715-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_190111-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_190033-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_185131-scaled.jpg\`

### Crâne étoile

* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240624_134850-748x1024.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191546-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191541.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191738-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191655-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191617-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191639-scaled.jpg\`

### Crâne rose

* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_185653-1024x922.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191031-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_185700-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_185721-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_190941-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191003-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_185619-scaled.jpg\`

### Crâne coeur lemniscate

* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191144-1024x663.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191236-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191359-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191411-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191144-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191151-scaled.jpg\`

### Crâne bouche ouverte

* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_192126-1024x840.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191848-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_192038-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191948-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_191919-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_192152-scaled.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240624_135851-scaled.jpg\`

### Galerie "Crânes sur commande"

* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-face3-copie-300x222.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101153-225x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-contre-plonge-copie-200x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101220-225x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-cosmique-Detail-serpent-copie-300x200.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101536-225x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-dessous-copie-200x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101425-300x225.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-gravure-dessus-copie-200x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101737-300x225.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-detail-orbite-copie-300x200.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101701-225x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-face2-copie-200x300.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101904-300x225.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-Profil-1-copie-300x200.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101821-300x225.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/01/A-O-S-profil-2-copie-300x200.jpg\`
* \`https://tamboursdelaterre.com/wp-content/uploads/2025/07/20250731_101332-225x300.jpg\`

### Images générales et d'ambiance

* **Photo de Lise Méraud :** \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/AtelierLM-682x1024.jpg\`
* **Vue de l'atelier :** \`https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240518_193236-1024x577.jpg\`
* **Séparateur décoratif :** \`https://tamboursdelaterre.com/wp-content/uploads/2023/04/DIVIDER.png\`
`;

// --- Parsing de la liste en manifeste exploitable ---
function slugify(s){return s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');}
function parseDims(url){
  // Tente d'extraire -WxH.jpg
  const m = url.match(/-(\d{2,5})x(\\d{2,5})\\.(?:jpg|jpeg|png|webp)/i);
  if (m) return {w:+m[1], h:+m[2]};
  // Heuristique: portrait 3:4
  return {w:900, h:1200};
}
function extract(){
  const lines = RAW.split(/\\r?\\n/);
  const out = [];
  let current = null;
  for (const line of lines){
    const t = line.trim();
    if (t.startsWith('### ')){
      const name = t.replace(/^###\\s+/,'').trim().replace(/^"+|"+$/g,'');
      current = { name, id: slugify(name), items: [] };
      out.push(current);
    } else if (t.startsWith('*')){
      // récupère l'URL entourée de backticks, ou brute
      const backtick = t.match(/`([^`]+)`/);
      const url = backtick ? backtick[1] : (t.replace(/^\\*\\s+/,'').trim());
      if (!current || !url.startsWith('http')) continue;
      const {w,h} = parseDims(url);
      current.items.push({ src:url, w, h, alt:'' });
    }
  }
  return out;
}
const GALLERY_MANIFEST = extract();

// Exporte en global
window.__GALLERY__ = GALLERY_MANIFEST;
