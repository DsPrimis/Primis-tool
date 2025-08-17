import express from "express";
import cors from "cors";
import textpro from "textpro-scraper";

const app = express();
app.use(cors());
app.use(express.json());

// 📍 TOUS LES STYLES que tu m’as donnés
const styles = {
  candy: "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
  christmas: "https://textpro.me/christmas-tree-text-effect-online-free-1057.html",
  "3dchristmas": "https://textpro.me/3d-christmas-text-effect-by-name-1055.html",
  sparklechristmas: "https://textpro.me/sparkles-merry-christmas-text-effect-1054.html",
  deepsea: "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
  scifi: "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
  rainbow: "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html",
  waterpipe: "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html",
  spooky: "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html",
  pencil: "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
  circuit: "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
  discovery: "https://textpro.me/create-space-text-effects-online-free-1042.html",
  metalic: "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html",
  fiction: "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
  demon: "https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
  transformer: "https://textpro.me/create-a-transformer-text-effect-online-1035.html",
  berry: "https://textpro.me/create-berry-text-effect-online-free-1033.html",
  thunder: "https://textpro.me/online-thunder-text-effect-generator-1031.html",
  magma: "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
  "3dstone": "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
  neonlight: "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
  glitch: "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
  harrypotter: "https://textpro.me/create-harry-potter-text-effect-online-1025.html",
  brokenglass: "https://textpro.me/broken-glass-text-effect-free-online-1023.html",
  papercut: "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
  watercolor: "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
  multicolor: "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
  neondevil: "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
  underwater: "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html",
  graffitibike: "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",
  snow: "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html",
  cloud: "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
  honey: "https://textpro.me/honey-text-effect-868.html",
  ice: "https://textpro.me/ice-cold-text-effect-862.html",
  fruitjuice: "https://textpro.me/fruit-juice-text-effect-861.html",
  biscuit: "https://textpro.me/biscuit-text-effect-858.html",
  wood: "https://textpro.me/wood-text-effect-856.html",
  chocolate: "https://textpro.me/chocolate-cake-text-effect-890.html",
  strawberry: "https://textpro.me/strawberry-text-effect-online-889.html",
  matrix: "https://textpro.me/matrix-style-text-effect-online-884.html",
  blood: "https://textpro.me/horror-blood-text-effect-online-883.html",
  dropwater: "https://textpro.me/dropwater-text-effect-872.html",
  toxic: "https://textpro.me/toxic-text-effect-online-901.html",
  lava: "https://textpro.me/lava-text-effect-online-914.html",
  rock: "https://textpro.me/rock-text-effect-online-915.html",
  bloodglas: "https://textpro.me/blood-text-on-the-frosted-glass-941.html",
  hallowen: "https://textpro.me/halloween-fire-text-effect-940.html",
  darkgold: "https://textpro.me/metal-dark-gold-text-effect-online-939.html",
  joker: "https://textpro.me/create-logo-joker-online-934.html",
  wicker: "https://textpro.me/wicker-text-effect-online-932.html",
  firework: "https://textpro.me/firework-sparkle-text-effect-930.html",
  skeleton: "https://textpro.me/skeleton-text-effect-online-929.html",
  sand: "https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
  glue: "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
  "1917": "https://textpro.me/1917-style-text-effect-online-980.html",
  leaves: "https://textpro.me/natural-leaves-text-effect-931.html",
};

// 📍 Génération
app.post("/generate", async (req, res) => {
  try {
    const { style, text } = req.body;
    if (!styles[style]) {
      return res.status(400).json({ error: "Style non supporté" });
    }

    const result = await textpro(styles[style], [text]);
    res.json({ url: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur de génération" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Backend lancé sur http://localhost:${PORT}`)); 
