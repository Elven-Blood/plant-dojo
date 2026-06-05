const systems = {
  "Brain": {
    tone: "Mind / Clarity",
    summary: "Supports focus, calm thinking, memory rhythm, and mental reset.",
    foods: ["Walnuts", "Blueberries", "Pumpkin seeds", "Dark leafy greens"],
    drinks: ["Rosemary tea", "Ginkgo tea", "Green tea"],
    practice: ["Brain dump journal", "10 minute walk", "Single-task for 20 minutes"],
    inner: ["What thought keeps repeating?", "What can be simplified today?"]
  },
  "Eyes & Vision": {
    tone: "Sight / Focus",
    summary: "Supports eye comfort, visual rhythm, and screen recovery.",
    foods: ["Carrots", "Sweet potato", "Bilberries or blueberries", "Kale"],
    drinks: ["Chrysanthemum tea", "Goji berry tea"],
    practice: ["Eye palming", "20-20-20 screen breaks"],
    inner: ["What do you need to see clearly?", "Soften your gaze."]
  },
  "Lungs": {
    tone: "Breath / Release",
    summary: "Supports breath awareness, respiratory comfort, and gentle clearing.",
    foods: ["Pears", "Onion", "Garlic", "Mushroom broth"],
    drinks: ["Mullein tea", "Thyme tea", "Ginger lemon tea"],
    practice: ["Slow nasal breathing", "Steam inhalation", "Open chest stretch"],
    inner: ["What grief or pressure needs air?", "Exhale longer than you inhale."]
  },
  "Heart": {
    tone: "Circulation / Emotion",
    summary: "Supports emotional steadiness, circulation rhythm, and warmth.",
    foods: ["Beets", "Berries", "Oats", "Pomegranate"],
    drinks: ["Hawthorn tea", "Hibiscus tea", "Cacao tonic"],
    practice: ["Gratitude note", "Gentle cardio", "Chest opening stretch"],
    inner: ["What does your heart need protected?", "What love can you receive?"]
  },
  "Liver": {
    tone: "Detox Rhythm",
    summary: "Supports daily processing, bitters, greens, and clean release.",
    foods: ["Dandelion greens", "Arugula", "Beets", "Lemon", "Broccoli"],
    drinks: ["Dandelion root tea", "Burdock tea", "Warm lemon water"],
    practice: ["Twisting stretch", "Early light dinner", "Declutter one space"],
    inner: ["What are you ready to process?", "Release irritability into action."]
  },
  "Spleen": {
    tone: "Grounding / Nourishment",
    summary: "Supports grounded energy, warm meals, and stable digestion.",
    foods: ["Squash", "Sweet potato", "Rice congee", "Gingered carrots"],
    drinks: ["Ginger tea", "Cinnamon tea"],
    practice: ["Warm breakfast", "Slow chewing", "Barefoot grounding"],
    inner: ["Where do you need steadiness?", "Feed your foundation."]
  },
  "Gut & Digestion": {
    tone: "Digest / Transform",
    summary: "Supports digestive rhythm, comfort, fiber, and mindful eating.",
    foods: ["Stewed apples", "Fennel", "Celery", "Fermented vegetables"],
    drinks: ["Peppermint tea", "Fennel tea", "Ginger tea"],
    practice: ["Walk after meals", "Eat without scrolling", "Belly breathing"],
    inner: ["What are you still digesting emotionally?", "Make space before adding more."]
  },
  "Kidneys & Adrenals": {
    tone: "Water / Reserve",
    summary: "Supports hydration, mineral rhythm, rest, and deeper reserves.",
    foods: ["Cucumber", "Celery", "Seaweed", "Black beans", "Parsley"],
    drinks: ["Nettle tea", "Corn silk tea", "Cucumber water"],
    practice: ["Legs up wall", "Reduce late caffeine", "Slow evening routine"],
    inner: ["Where are you leaking energy?", "Protect your reserves."]
  },
  "Reproductive": {
    tone: "Creation / Flow",
    summary: "Supports creative energy, pelvic ease, and cyclical awareness.",
    foods: ["Avocado", "Sesame", "Pumpkin seeds", "Raspberry", "Dark greens"],
    drinks: ["Raspberry leaf tea", "Nettle tea", "Ginger tea"],
    practice: ["Hip circles", "Creative writing", "Warm lower belly compress"],
    inner: ["What wants to be created?", "Honor your creative force."]
  },
  "Skin & Lymph": {
    tone: "Boundary / Flow",
    summary: "Supports skin clarity, lymph movement, and healthy boundaries.",
    foods: ["Cucumber", "Citrus", "Parsley", "Watermelon", "Greens"],
    drinks: ["Calendula tea", "Burdock tea", "Lemon water"],
    practice: ["Dry brushing", "Rebounding or light bounce", "Sweat gently"],
    inner: ["What boundary needs care?", "Let your surface breathe."]
  },
  "Blood & Circulation": {
    tone: "Movement / Warmth",
    summary: "Supports flow, warmth, and clean momentum.",
    foods: ["Beets", "Cayenne", "Citrus", "Leafy greens"],
    drinks: ["Hibiscus tea", "Ginger tea", "Cinnamon tea"],
    practice: ["Brisk walk", "Ankle pumps", "Contrast shower"],
    inner: ["Where does life need motion?", "Move what has been stuck."]
  },
  "Nervous System": {
    tone: "Calm / Regulation",
    summary: "Supports stillness, repair, and gentle rhythm.",
    foods: ["Oats", "Magnesium-rich greens", "Banana", "Sesame"],
    drinks: ["Chamomile tea", "Lavender tea", "Lemon balm tea"],
    practice: ["Box breathing", "Digital sunset", "Jaw and neck release"],
    inner: ["What can wait until tomorrow?", "Safety first. Softness now."]
  }
};

const intentions = [
  ["Reset", "↻", "Begin again. Clear what no longer serves."],
  ["Detox", "♨", "Release and cleanse. Let go of the old."],
  ["Nourish", "🥗", "Feed your cells. Restore vitality."],
  ["Calm / Regulate", "♡", "Find stillness. Return to center."],
  ["Move / Circulate", "↗", "Awaken energy. Encourage flow."],
  ["Sleep / Recover", "☾", "Rest deeply. Allow repair."]
];

const recipes = [
  {
    name: "Liver Reset Green Bowl",
    system: "Liver",
    intention: "Detox",
    time: "25 min",
    ingredients: ["quinoa", "arugula", "roasted beets", "lemon tahini", "dandelion greens"],
    method: "Build a warm bowl with quinoa, bitter greens, beets, lemon, olive oil, and herbs.",
    dojo: "Bitter greens and lemon create the Plant Dojo detox rhythm."
  },
  {
    name: "Mullein Mushroom Broth",
    system: "Lungs",
    intention: "Reset",
    time: "35 min",
    ingredients: ["mushrooms", "garlic", "onion", "thyme", "mullein tea base"],
    method: "Simmer mushrooms, garlic, onion, and thyme. Add prepared mullein tea at the end.",
    dojo: "A breath-supporting broth for cold weather, recovery, and reset days."
  },
  {
    name: "Heart Beet Hibiscus Plate",
    system: "Heart",
    intention: "Move / Circulate",
    time: "30 min",
    ingredients: ["beets", "berries", "greens", "hibiscus glaze", "pumpkin seeds"],
    method: "Roast beets, toss greens, add berries, seeds, and a tart hibiscus dressing.",
    dojo: "Deep red foods become the visual language of heart support."
  },
  {
    name: "Gut Ginger Apple Oats",
    system: "Gut",
    intention: "Nourish",
    time: "15 min",
    ingredients: ["oats", "stewed apples", "ginger", "cinnamon", "flax"],
    method: "Cook oats with ginger and cinnamon. Top with warm apples and flax.",
    dojo: "Warm, soft, simple food for digestion and grounding."
  },
  {
    name: "Skin Cucumber Citrus Salad",
    system: "Skin",
    intention: "Reset",
    time: "10 min",
    ingredients: ["cucumber", "parsley", "lemon", "orange", "mint"],
    method: "Slice cucumber and citrus. Toss with parsley, mint, lemon, and sea salt.",
    dojo: "Hydrating, bright, cooling, and clean."
  },
  {
    name: "Nervous System Night Soup",
    system: "Nervous",
    intention: "Sleep / Recover",
    time: "30 min",
    ingredients: ["mushrooms", "oats or rice", "greens", "sesame", "chamomile tea"],
    method: "Make a soft soup with mushrooms, greens, sesame, and a calming tea-based broth.",
    dojo: "A gentle evening bowl built for repair and regulation."
  }
];

const soaps = [
  {
    name: "Anise",
    category: "Sweet / Warming",
    skin: "Normal, dull, tired skin",
    benefits: "Gives soap a sweet spice aroma and comforting, old-world herbal feel.",
    aroma: "Licorice, sweet, spicy",
    blend: "Pairs with orange, cinnamon, clove, vanilla."
  },
  {
    name: "Bergamot",
    category: "Bright / Uplifting",
    skin: "Normal, dull, tired skin",
    benefits: "Fresh citrus-floral aroma for mood-lifting luxury bars.",
    aroma: "Citrus, floral, elegant",
    blend: "Pairs with lavender, orange, basil, cedarwood."
  },
  {
    name: "Calendula",
    category: "Skin Comfort / Herbal",
    skin: "Sensitive, dry, delicate skin",
    benefits: "Beautiful herbal look, soft botanical feel, gentle branding.",
    aroma: "Light, earthy, floral",
    blend: "Pairs with chamomile, lavender, oat, shea butter."
  },
  {
    name: "Activated Charcoal",
    category: "Deep Clean / Detox Feel",
    skin: "Oily, congested-feeling skin",
    benefits: "Creates a deep-clean look and strong detox-style branding.",
    aroma: "Neutral, smoky if blended",
    blend: "Pairs with peppermint, tea tree, cedarwood, clay."
  },
  {
    name: "Chamomile",
    category: "Calm / Softening",
    skin: "Sensitive, dry, irritated-feeling skin",
    benefits: "Gentle botanical story for comfort bars and evening self-care.",
    aroma: "Soft, apple-like, floral",
    blend: "Pairs with lavender, oatmeal, calendula, honey."
  },
  {
    name: "Coconut Milk",
    category: "Creamy / Moisture Feel",
    skin: "Dry, normal, mature skin",
    benefits: "Creates a creamy, luxurious soap concept with a soft skin feel.",
    aroma: "Mild, creamy",
    blend: "Pairs with vanilla, lime, cocoa butter, oatmeal."
  },
  {
    name: "Eucalyptus",
    category: "Clearing / Spa",
    skin: "Normal, oily, tired skin",
    benefits: "Fresh spa-like aroma that feels open, clean, and clarifying.",
    aroma: "Camphor, cool, fresh",
    blend: "Pairs with peppermint, rosemary, tea tree, charcoal."
  },
  {
    name: "Ginger",
    category: "Warming / Energizing",
    skin: "Normal, dull, tired skin",
    benefits: "Adds warmth, circulation-style energy, and spice to a bar.",
    aroma: "Warm, spicy, sharp",
    blend: "Pairs with turmeric, orange, cinnamon, lemon."
  },
  {
    name: "Lavender",
    category: "Calm / Soothing",
    skin: "Sensitive, dry, normal skin",
    benefits: "Classic calming aroma, gentle spa feel, good for evening bars.",
    aroma: "Floral, soft, herbal",
    blend: "Pairs with chamomile, vanilla, oatmeal, calendula."
  },
  {
    name: "Lemon",
    category: "Bright / Fresh",
    skin: "Oily, dull, normal skin",
    benefits: "Bright, clean scent that makes a soap feel fresh and awakening.",
    aroma: "Citrus, sharp, clean",
    blend: "Pairs with rosemary, basil, ginger, peppermint."
  },
  {
    name: "Oatmeal",
    category: "Softening / Comfort",
    skin: "Dry, sensitive, irritated-feeling skin",
    benefits: "Adds a gentle, comforting, creamy texture.",
    aroma: "Warm, mild",
    blend: "Pairs with honey, chamomile, lavender, vanilla."
  },
  {
    name: "Peppermint",
    category: "Cooling / Clarifying",
    skin: "Oily, tired, overheated skin",
    benefits: "Cooling feel, crisp aroma, helps the bar feel fresh and awakening.",
    aroma: "Minty, sharp, clean",
    blend: "Pairs with rosemary, tea tree, eucalyptus, charcoal."
  },
  {
    name: "Rosemary",
    category: "Focus / Herbal Clean",
    skin: "Oily, normal, tired skin",
    benefits: "Herbal, green aroma that supports a clean focus-style bar.",
    aroma: "Herbal, piney, fresh",
    blend: "Pairs with lemon, peppermint, eucalyptus, clay."
  },
  {
    name: "Tea Tree",
    category: "Clarifying / Fresh",
    skin: "Oily, blemish-prone-feeling skin",
    benefits: "Sharp, clean aroma that fits acne-style and gym soap branding.",
    aroma: "Medicinal, fresh",
    blend: "Pairs with charcoal, peppermint, eucalyptus, clay."
  },
  {
    name: "Turmeric",
    category: "Glow / Brightening",
    skin: "Dull, uneven-looking skin",
    benefits: "Golden color, earthy feel, glow-focused soap story.",
    aroma: "Earthy, warm",
    blend: "Pairs with ginger, orange, honey, coconut milk."
  }
];

let selectedIntent = "Reset";
let selectedSystem = "Eyes & Vision";

const $ = id => document.getElementById(id);

function fillList(id, arr) {
  $(id).innerHTML = arr.map(x => `<li>${x}</li>`).join("");
}

function renderIntentGrid() {
  $("intentGrid").innerHTML = intentions.map(i => `
    <button class="intentCard ${i[0] === selectedIntent ? "active" : ""}" data-intent="${i[0]}">
      <div class="icon">${i[1]}</div>
      <h3>${i[0]}</h3>
      <p>${i[2]}</p>
    </button>
  `).join("");

  document.querySelectorAll(".intentCard").forEach(button => {
    button.onclick = () => {
      selectedIntent = button.dataset.intent;
      renderIntentGrid();
      renderPlan();
      document.querySelector("#organ-map").scrollIntoView({ behavior: "smooth" });
    };
  });
}

function renderSystem(name) {
  selectedSystem = name;
  const d = systems[name];

  $("systemTone").textContent = d.tone;
  $("systemTitle").textContent = name + " Support Protocol";
  $("systemSummary").textContent = d.summary;

  fillList("foodsList", d.foods);
  fillList("drinksList", d.drinks);
  fillList("practiceList", d.practice);
  fillList("innerList", d.inner);

  document.querySelectorAll(".organDot").forEach(button => {
    button.classList.toggle("active", button.dataset.system === name);
  });

  renderPlan();
}

function renderPlan() {
  const d = systems[selectedSystem];
  $("planMeta").textContent = selectedIntent + " · " + selectedSystem;

  const recipeMatch =
    recipes.find(r => selectedSystem.includes(r.system) || r.system === selectedSystem) || recipes[0];

  const soapMatch =
    selectedSystem === "Skin & Lymph" ? "Calendula" :
    selectedSystem === "Lungs" ? "Eucalyptus" :
    selectedSystem === "Nervous System" ? "Lavender" :
    selectedSystem === "Liver" ? "Turmeric" :
    "Peppermint";

  const plan = [
    ["Eat", "Morning · Midday · Evening", d.foods.slice(0, 3)],
    ["Drink", "Throughout the day", d.drinks.slice(0, 2)],
    ["Practice", "5–10 minutes", d.practice.slice(0, 2)],
    ["Inner Work", "Quiet moment", d.inner],
    ["Recipe Card", "Kitchen support", [recipeMatch.name, recipeMatch.dojo]],
    ["Soap Support", "Body care", [soapMatch + " bar", "Use the soap encyclopedia to customize the blend."]]
  ];

  $("planGrid").innerHTML = plan.map(p => `
    <div class="planCard">
      <p class="eyebrow">${p[1]}</p>
      <h3>${p[0]}</h3>
      <ul>${p[2].map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderRecipes(filter = "all") {
  $("recipeGrid").innerHTML = recipes
    .filter(r => filter === "all" || r.system === filter || r.system.includes(filter))
    .map(r => `
      <article class="recipeCard">
        <p class="eyebrow">${r.system} · ${r.intention}</p>
        <h3>${r.name}</h3>
        <div class="meta">
          <span class="tag">${r.time}</span>
          <span class="tag">${r.intention}</span>
        </div>
        <p><strong>Ingredients:</strong> ${r.ingredients.join(", ")}</p>
        <p><strong>Method:</strong> ${r.method}</p>
        <p><strong>Dojo Note:</strong> ${r.dojo}</p>
      </article>
    `).join("");
}

function renderSoap(query = "") {
  const q = query.toLowerCase();

  $("soapGrid").innerHTML = soaps
    .filter(s => JSON.stringify(s).toLowerCase().includes(q))
    .map(s => `
      <article class="soapCard">
        <p class="eyebrow">${s.category}</p>
        <h3>${s.name}</h3>
        <p><strong>Skin Type:</strong> ${s.skin}</p>
        <p><strong>Benefits:</strong> ${s.benefits}</p>
        <p><strong>Aroma:</strong> ${s.aroma}</p>
        <p><strong>Blend Ideas:</strong> ${s.blend}</p>
      </article>
    `).join("");
}

document.querySelectorAll(".organDot").forEach(button => {
  button.onclick = () => {
    renderSystem(button.dataset.system);
    document.querySelector("#plan").scrollIntoView({ behavior: "smooth" });
  };
});

document.querySelector(".menuBtn").onclick = () => {
  document.querySelector(".nav").classList.toggle("open");
};

document.querySelectorAll(".filterBtn").forEach(button => {
  button.onclick = () => {
    document.querySelectorAll(".filterBtn").forEach(x => x.classList.remove("active"));
    button.classList.add("active");
    renderRecipes(button.dataset.filter);
  };
});

$("soapSearch").addEventListener("input", e => renderSoap(e.target.value));
$("year").textContent = new Date().getFullYear();

renderIntentGrid();
renderSystem(selectedSystem);
renderRecipes();
renderSoap();
