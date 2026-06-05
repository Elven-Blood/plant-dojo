const organMenus={
"Brain":{color:"#8b7bd6",theme:"Mind / Focus",herbs:["rosemary","ginkgo","gotu kola","sage"],tea:"Rosemary + sage focus tea",juice:"Blueberry, grape, lime, mint smoothie",salad:"Walnut, blueberry, greens, pumpkin seed salad",meal:"Lion’s mane mushroom steak with quinoa and greens",snack:"Pumpkin seeds with dark chocolate and berries",practice:"20 minutes of single-task focus, then a brain-dump journal",avoid:"Overstimulation, doom scrolling, skipping sleep",prompt:"What idea is asking for structure today?",why:"Brain foods focus on antioxidants, healthy fats, minerals, and herbs traditionally connected with clarity and focus.",intention:"Focus / Reset",product:"Brain Focus Recipe Pack + 7-Day Mental Clarity Journal"},
"Eyes & Vision":{color:"#84a98c",theme:"Sight / Clarity",herbs:["chrysanthemum","goji","bilberry","eyebright"],tea:"Chrysanthemum + goji berry tea",juice:"Carrot, orange, ginger, turmeric juice",salad:"Kale, carrot ribbon, pumpkin seed, lemon salad",meal:"Sweet potato and greens bowl with roasted mushrooms",snack:"Blueberries with walnuts",practice:"Eye palming and 20-20-20 screen breaks",avoid:"Bright screens at night, dim-light reading, dehydration",prompt:"What do I need to see clearly?",why:"Vision menus use orange plants, dark greens, berries, and screen-recovery practices.",intention:"Reset / Clarity",product:"Digital Eye Relief Mini Course + Vision Food Card Set"},
"Lungs":{color:"#75aadb",theme:"Breath / Release",herbs:["mullein","thyme","peppermint","ginger"],tea:"Mullein, thyme, and peppermint tea",juice:"Pear, cucumber, mint, lime cooler",salad:"Cucumber, pear, mint, greens, lemon salad",meal:"Mullein mushroom broth with garlic, onion, thyme, and rice",snack:"Steamed pear with cinnamon",practice:"Slow nasal breathing and chest-opening stretch",avoid:"Smoke, heavy fried foods, shallow breathing",prompt:"What pressure needs air?",why:"Lung menus are light, aromatic, moistening, and centered on breath-supportive herbs.",intention:"Release / Reset",product:"Breath Reset Soup Class + Lung Tea Blend"},
"Heart":{color:"#c85d5d",theme:"Love / Circulation",herbs:["hawthorn","hibiscus","rose","cacao"],tea:"Hawthorn + hibiscus heart tea",juice:"Beet, berry, pomegranate, lime tonic",salad:"Beet, berry, arugula, pumpkin seed salad",meal:"Beet hibiscus plate with greens and mushroom protein",snack:"Pomegranate with dark chocolate",practice:"Gratitude note and gentle walk",avoid:"Holding resentment, excess salt, emotional shutdown",prompt:"What does my heart need protected?",why:"Heart menus use red plants, tart herbs, gentle movement, and emotional reflection.",intention:"Circulate / Nourish",product:"Heart Bowl Dinner Class + Love & Circulation Journal"},
"Liver":{color:"#d99042",theme:"Detox / Processing",herbs:["dandelion","burdock","milk thistle","turmeric"],tea:"Dandelion root + burdock tea",juice:"Lemon, celery, cucumber, ginger green juice",salad:"Arugula, dandelion greens, beet, lemon salad",meal:"Liver reset green bowl with quinoa, beets, bitter greens, and mushrooms",snack:"Apple slices with lemon and cinnamon",practice:"Twisting stretch and declutter one space",avoid:"Alcohol, greasy overload, late-night heavy meals",prompt:"What am I ready to process and release?",why:"Liver menus use bitter greens, roots, lemon, beets, and simple meals to support the idea of processing and release.",intention:"Detox / Reset",product:"Liver Reset PDF + 3-Day Bitter Greens Meal Plan"},
"Spleen":{color:"#d8bd67",theme:"Grounding / Nourishment",herbs:["ginger","cinnamon","astragalus","fennel"],tea:"Ginger + cinnamon grounding tea",juice:"Carrot, apple, ginger warm-toned juice",salad:"Roasted squash, greens, sesame, ginger dressing",meal:"Sweet potato congee with mushrooms and greens",snack:"Roasted squash with cinnamon",practice:"Slow chewing and warm breakfast",avoid:"Cold rushed meals, worry spirals, skipping meals",prompt:"Where do I need steadiness?",why:"Spleen menus are warm, soft, grounding, and built around regular nourishment.",intention:"Nourish / Ground",product:"Warm Bowls Class + Grounding Breakfast Guide"},
"Gut & Digestion":{color:"#78a96b",theme:"Digest / Transform",herbs:["peppermint","fennel","ginger","dandelion"],tea:"Peppermint, fennel, and ginger tea",juice:"Celery, apple, ginger, lemon digestive juice",salad:"Fennel, apple, celery, parsley salad",meal:"Ginger apple oats or mushroom rice bowl with fermented vegetables",snack:"Stewed apples with cinnamon",practice:"Walk after meals and belly breathing",avoid:"Eating while scrolling, rushing, overeating late",prompt:"What am I still digesting emotionally?",why:"Digestive menus use warm spices, fiber, gentle herbs, and mindful eating rituals.",intention:"Digest / Nourish",product:"Gut Reset Recipe Cards + Kitchen Fermentation Lesson"},
"Kidneys & Adrenals":{color:"#4c9c9c",theme:"Water / Reserves",herbs:["nettle","corn silk","parsley","uva ursi"],tea:"Nettle + corn silk mineral tea",juice:"Cucumber, celery, parsley, lime mineral juice",salad:"Cucumber, seaweed, sesame, parsley salad",meal:"Black bean, greens, and mushroom mineral bowl",snack:"Celery with sesame tahini dip",practice:"Legs-up-wall and early wind-down",avoid:"Dehydration, excess caffeine, burning energy too fast",prompt:"Where am I leaking energy?",why:"Kidney menus emphasize hydration, minerals, rest, and protecting energy reserves.",intention:"Restore / Hydrate",product:"Mineral Hydration Guide + Adrenal Rest Challenge"},
"Reproductive":{color:"#b25375",theme:"Creation / Flow",herbs:["raspberry leaf","nettle","ginger","rose"],tea:"Raspberry leaf + nettle tea",juice:"Pomegranate, berry, ginger, lime tonic",salad:"Avocado, pumpkin seed, greens, citrus salad",meal:"Stuffed plantain boats with mushroom protein and greens",snack:"Pumpkin seeds and raspberries",practice:"Hip circles and creative writing",avoid:"Ignoring creative urges, chronic stress, cold stagnation",prompt:"What wants to be created through me?",why:"Reproductive menus use seed foods, deep red plants, warming spices, and creative ritual.",intention:"Create / Flow",product:"Creative Energy Menu Pack + Sacred Food Workshop"},
"Skin & Lymph":{color:"#e1c84f",theme:"Glow / Boundary",herbs:["calendula","burdock","nettle","red clover"],tea:"Calendula + burdock skin tea",juice:"Cucumber, lemon, parsley, mint hydration juice",salad:"Citrus cucumber parsley glow salad",meal:"Green garden bowl with avocado, herbs, and mushrooms",snack:"Watermelon or cucumber with lime",practice:"Dry brushing and gentle sweat",avoid:"Dehydration, stagnant movement, ignoring boundaries",prompt:"What boundary needs care?",why:"Skin and lymph menus emphasize hydration, movement, herbs, and boundary reflection.",intention:"Glow / Reset",product:"Skin Glow Soap + Food Pairing Guide"},
"Blood & Circulation":{color:"#b34545",theme:"Movement / Warmth",herbs:["hibiscus","ginger","cayenne","cinnamon"],tea:"Hibiscus, ginger, and cinnamon tea",juice:"Beet, orange, ginger, lime circulation juice",salad:"Beet, citrus, greens, pumpkin seed salad",meal:"Warm beet and mushroom bowl with greens",snack:"Orange slices with cinnamon",practice:"Brisk walk and ankle pumps",avoid:"Sitting too long, cold stagnation, excess processed foods",prompt:"Where does life need motion?",why:"Circulation menus use red foods, warming spices, movement, and rhythm.",intention:"Move / Circulate",product:"Circulation Bowl Class + Movement Meal Plan"},
"Nervous System":{color:"#8b90c9",theme:"Calm / Regulation",herbs:["chamomile","lemon balm","lavender","passionflower"],tea:"Chamomile, lemon balm, and lavender tea",juice:"Banana, oat, cinnamon, sesame calming smoothie",salad:"Avocado, greens, sesame, cucumber calm salad",meal:"Nervous system night soup with mushrooms, rice, greens, and sesame",snack:"Banana with tahini and cinnamon",practice:"Box breathing, digital sunset, jaw and neck release",avoid:"Late caffeine, screen overload, rushing rest",prompt:"What can wait until tomorrow?",why:"Nervous system menus are soft, mineral-rich, evening-friendly, and calming.",intention:"Calm / Recover",product:"Sleep Recovery Class + Night Soup Recipe Pack"}
};

let selectedSystem="Liver";
const $=id=>document.getElementById(id);

function renderMenuTabs(){
 $("menuTabs").innerHTML=Object.keys(organMenus).map(name=>`<button class="menuTab ${name===selectedSystem?"active":""}" data-menu="${name}">${name}</button>`).join("");
 document.querySelectorAll(".menuTab").forEach(b=>b.onclick=()=>{selectedSystem=b.dataset.menu;renderMenu();renderRecipes();renderJournal();renderOffers()});
}

function renderMenu(){
 const m=organMenus[selectedSystem];
 document.documentElement.style.setProperty("--menuColor",m.color);
 $("organMenuCard").innerHTML=`
  <div class="menuHeader">
    <div>
      <p class="eyebrow">${m.theme} · ${m.intention}</p>
      <h3>${selectedSystem} Full Menu</h3>
      <p>${m.why}</p>
      <div class="meta">${m.herbs.map(h=>`<span class="tag">${h}</span>`).join("")}</div>
    </div>
    <div class="menuColor"></div>
  </div>
  <div class="menuGrid">
    <div class="menuItem"><h4>Tea</h4><p>${m.tea}</p></div>
    <div class="menuItem"><h4>Juice / Smoothie</h4><p>${m.juice}</p></div>
    <div class="menuItem"><h4>Salad / Bowl</h4><p>${m.salad}</p></div>
    <div class="menuItem"><h4>Warm Meal</h4><p>${m.meal}</p></div>
    <div class="menuItem"><h4>Snack</h4><p>${m.snack}</p></div>
    <div class="menuItem"><h4>Practice</h4><p>${m.practice}</p></div>
    <div class="menuItem"><h4>Avoid</h4><p>${m.avoid}</p></div>
    <div class="menuItem"><h4>Journal Prompt</h4><p>${m.prompt}</p></div>
    <div class="menuItem"><h4>Sell This As</h4><p>${m.product}</p></div>
  </div>`;
 renderMenuTabs();
}

function getRecipeRows(){
 return Object.entries(organMenus).map(([name,m],index)=>({
  id:index,system:name,title:m.meal,tea:m.tea,juice:m.juice,salad:m.salad,snack:m.snack,herbs:m.herbs,theme:m.theme,intention:m.intention,why:m.why,practice:m.practice,avoid:m.avoid,prompt:m.prompt,product:m.product
 }));
}

function renderRecipes(filter="all"){
 const rows=getRecipeRows().filter(r=>filter==="all"||r.system.includes(filter));
 $("recipeGrid").innerHTML=rows.map(r=>`
  <article class="recipeCard" data-id="${r.id}">
    <p class="eyebrow">${r.system} · ${r.intention}</p>
    <h3>${r.title}</h3>
    <div class="meta">${r.herbs.slice(0,3).map(h=>`<span class="tag">${h}</span>`).join("")}</div>
    <p><strong>Why:</strong> ${r.why}</p>
    <p><strong>Tap to open full recipe card.</strong></p>
  </article>`).join("");
 document.querySelectorAll(".recipeCard").forEach(card=>card.onclick=()=>openRecipe(card.dataset.id));
}

function openRecipe(id){
 const r=getRecipeRows()[Number(id)];
 $("modalContent").innerHTML=`
  <p class="eyebrow">${r.system} · ${r.theme} · ${r.intention}</p>
  <h2>${r.title}</h2>
  <p>${r.why}</p>
  <div class="modalGrid">
    <div class="modalBox"><h3>Full Recipe</h3><ul>
      <li><strong>Base:</strong> Choose quinoa, rice, oats, or greens depending on the dish.</li>
      <li><strong>Organ focus:</strong> Build around ${r.system.toLowerCase()} supportive foods and herbs.</li>
      <li><strong>Warm meal:</strong> ${r.title}</li>
      <li><strong>Tea pairing:</strong> ${r.tea}</li>
      <li><strong>Juice pairing:</strong> ${r.juice}</li>
      <li><strong>Snack:</strong> ${r.snack}</li>
    </ul></div>
    <div class="modalBox"><h3>Ingredient Benefits</h3><ul>
      ${r.herbs.map(h=>`<li><strong>${h}:</strong> Used in this card for the ${r.theme.toLowerCase()} story and herbal identity.</li>`).join("")}
      <li><strong>Greens:</strong> Bring minerals, fiber, color, and grounding plant energy.</li>
      <li><strong>Mushrooms:</strong> Add umami, body, and Plant Dojo protein-style depth.</li>
      <li><strong>Citrus / acid:</strong> Brightens flavor and helps the recipe feel clean and alive.</li>
    </ul></div>
    <div class="modalBox"><h3>Why It Supports ${r.system}</h3><p>${r.why}</p><p><strong>Best intention:</strong> ${r.intention}</p></div>
    <div class="modalBox"><h3>Journal + Practice</h3><p><strong>Prompt:</strong> ${r.prompt}</p><p><strong>Practice:</strong> ${r.practice}</p><p><strong>Avoid:</strong> ${r.avoid}</p></div>
    <div class="modalBox"><h3>Product/Class Angle</h3><p>${r.product}</p><p>Use this as a paid PDF, recipe card, class module, QR card, private chef menu item, or membership lesson.</p></div>
    <div class="modalBox"><h3>Free vs Paid</h3><ul><li><strong>Free:</strong> Basic recipe name, organ purpose, and simple ingredients.</li><li><strong>Paid:</strong> Full recipe, measurements, video demo, printable PDF, shopping list, and weekly plan.</li></ul></div>
  </div>`;
 $("recipeModal").classList.add("open");
 $("recipeModal").setAttribute("aria-hidden","false");
}

function renderJournal(){
 $("journalGrid").innerHTML=Object.entries(organMenus).map(([name,m])=>`
  <article class="journalCard">
    <p class="eyebrow">${name} · ${m.theme}</p>
    <h3>${m.prompt}</h3>
    <p><strong>Practice:</strong> ${m.practice}</p>
    <p><strong>Deeper writing:</strong> What is the body asking for? What habit is blocking this organ system? What meal, herb, or ritual can you repeat for 7 days?</p>
    <p><strong>Sell as:</strong> 7-day ${name} journal PDF, guided audio, or member challenge.</p>
  </article>`).join("");
}

function renderOffers(){
 $("offerGrid").innerHTML=Object.entries(organMenus).map(([name,m])=>`
  <article class="offerCard">
    <p class="eyebrow">${name} Product</p>
    <h3>${m.product}</h3>
    <p>${m.why}</p>
    <ul>
      <li>Recipe cards</li>
      <li>Tea + juice pairings</li>
      <li>Printable organ guide</li>
      <li>Class lesson or demo</li>
      <li>Member-only detailed version</li>
    </ul>
  </article>`).join("");
}

document.querySelector(".menuBtn").onclick=()=>document.querySelector(".nav").classList.toggle("open");
document.querySelectorAll(".filterBtn").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filterBtn").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderRecipes(b.dataset.filter)});
$("closeModal").onclick=()=>{$("recipeModal").classList.remove("open");$("recipeModal").setAttribute("aria-hidden","true")};
$("recipeModal").onclick=e=>{if(e.target.id==="recipeModal")$("closeModal").click()};
$("year").textContent=new Date().getFullYear();

renderMenuTabs();renderMenu();renderRecipes();renderJournal();renderOffers();
