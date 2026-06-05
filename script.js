const systems={
"Brain":{tone:"Mind / Clarity",summary:"Supports focus, calm thinking, memory rhythm, and mental reset.",foods:["Walnuts","Blueberries","Pumpkin seeds","Dark leafy greens"],drinks:["Rosemary tea","Ginkgo tea","Green tea"],practice:["Brain dump journal","10 minute walk","Single-task for 20 minutes"],inner:["What thought keeps repeating?","What can be simplified today?"]},
"Eyes & Vision":{tone:"Sight / Focus",summary:"Supports eye comfort, visual rhythm, and screen recovery.",foods:["Carrots","Sweet potato","Bilberries or blueberries","Kale"],drinks:["Chrysanthemum tea","Goji berry tea"],practice:["Eye palming","20-20-20 screen breaks"],inner:["What do you need to see clearly?","Soften your gaze."]},
"Lungs":{tone:"Breath / Release",summary:"Supports breath awareness, respiratory comfort, and gentle clearing.",foods:["Pears","Onion","Garlic","Mushroom broth"],drinks:["Mullein tea","Thyme tea","Ginger lemon tea"],practice:["Slow nasal breathing","Steam inhalation","Open chest stretch"],inner:["What grief or pressure needs air?","Exhale longer than you inhale."]},
"Heart":{tone:"Circulation / Emotion",summary:"Supports emotional steadiness, circulation rhythm, and warmth.",foods:["Beets","Berries","Oats","Pomegranate"],drinks:["Hawthorn tea","Hibiscus tea","Cacao tonic"],practice:["Gratitude note","Gentle cardio","Chest opening stretch"],inner:["What does your heart need protected?","What love can you receive?"]},
"Liver":{tone:"Detox Rhythm",summary:"Supports daily processing, bitters, greens, and clean release.",foods:["Dandelion greens","Arugula","Beets","Lemon","Broccoli"],drinks:["Dandelion root tea","Burdock tea","Warm lemon water"],practice:["Twisting stretch","Early light dinner","Declutter one space"],inner:["What are you ready to process?","Release irritability into action."]},
"Spleen":{tone:"Grounding / Nourishment",summary:"Supports grounded energy, warm meals, and stable digestion.",foods:["Squash","Sweet potato","Rice congee","Gingered carrots"],drinks:["Ginger tea","Cinnamon tea"],practice:["Warm breakfast","Slow chewing","Barefoot grounding"],inner:["Where do you need steadiness?","Feed your foundation."]},
"Gut & Digestion":{tone:"Digest / Transform",summary:"Supports digestive rhythm, comfort, fiber, and mindful eating.",foods:["Stewed apples","Fennel","Celery","Fermented vegetables"],drinks:["Peppermint tea","Fennel tea","Ginger tea"],practice:["Walk after meals","Eat without scrolling","Belly breathing"],inner:["What are you still digesting emotionally?","Make space before adding more."]},
"Kidneys & Adrenals":{tone:"Water / Reserve",summary:"Supports hydration, mineral rhythm, rest, and deeper reserves.",foods:["Cucumber","Celery","Seaweed","Black beans","Parsley"],drinks:["Nettle tea","Corn silk tea","Cucumber water"],practice:["Legs up wall","Reduce late caffeine","Slow evening routine"],inner:["Where are you leaking energy?","Protect your reserves."]},
"Reproductive":{tone:"Creation / Flow",summary:"Supports creative energy, pelvic ease, and cyclical awareness.",foods:["Avocado","Sesame","Pumpkin seeds","Raspberry","Dark greens"],drinks:["Raspberry leaf tea","Nettle tea","Ginger tea"],practice:["Hip circles","Creative writing","Warm lower belly compress"],inner:["What wants to be created?","Honor your creative force."]},
"Skin & Lymph":{tone:"Boundary / Flow",summary:"Supports skin clarity, lymph movement, and healthy boundaries.",foods:["Cucumber","Citrus","Parsley","Watermelon","Greens"],drinks:["Calendula tea","Burdock tea","Lemon water"],practice:["Dry brushing","Rebounding or light bounce","Sweat gently"],inner:["What boundary needs care?","Let your surface breathe."]},
"Blood & Circulation":{tone:"Movement / Warmth",summary:"Supports flow, warmth, and clean momentum.",foods:["Beets","Cayenne","Citrus","Leafy greens"],drinks:["Hibiscus tea","Ginger tea","Cinnamon tea"],practice:["Brisk walk","Ankle pumps","Contrast shower"],inner:["Where does life need motion?","Move what has been stuck."]},
"Nervous System":{tone:"Calm / Regulation",summary:"Supports stillness, repair, and gentle rhythm.",foods:["Oats","Magnesium-rich greens","Banana","Sesame"],drinks:["Chamomile tea","Lavender tea","Lemon balm tea"],practice:["Box breathing","Digital sunset","Jaw and neck release"],inner:["What can wait until tomorrow?","Safety first. Softness now."]}
};

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

const herbCards=[
["Ginger","Gut","Digestive Herb","★★","Digestive +3","Warming +2","Gut, Blood, Lungs","Ginger tea","Gut Reset Bowl","Turmeric Ginger Glow Bar"],
["Peppermint","Gut","Cooling Digestive","★★","Digestive +2","Cooling +2","Gut, Lungs","Peppermint tea","Fennel Apple Salad","Mint Cooling Bar"],
["Fennel","Gut","Belly Ease","★★","Digestive +3","Gas Relief +2","Gut, Spleen","Fennel tea","Digestive Salad","Fennel Oat Bar"],
["Dandelion","Liver","Bitter Root","★★★","Liver +3","Detox +2","Liver, Gut","Dandelion root tea","Liver Green Bowl","Bitter Herb Bar"],
["Chamomile","Nervous","Calm Flower","★★","Nervous +3","Sleep +2","Nerves, Skin, Gut","Chamomile tea","Night Soup","Chamomile Oat Bar"],
["Mullein","Lungs","Breath Leaf","★★★","Respiratory +4","Moistening +2","Lungs","Mullein tea","Mushroom Broth","Breath Steam Bar"],
["Thyme","Lungs","Aromatic Defender","★★","Respiratory +3","Kitchen Herb +2","Lungs, Gut","Thyme tea","Lung Broth","Thyme Charcoal Bar"],
["Oregano","Lungs","Wild Shield","★★","Respiratory +2","Immune +2","Lungs, Gut","Oregano tea","Tomato Herb Bowl","Oregano Kitchen Bar"],
["Eucalyptus","Lungs","Cooling Breath","★★★","Breath +3","Cooling +3","Lungs, Skin","Steam tea","Breath Bowl","Eucalyptus Shower Bar"],
["Licorice Root","Lungs","Sweet Root","★★★","Respiratory +3","Soothing +2","Lungs, Gut","Licorice tea","Root Broth","Sweet Root Bar"],
["Lemon Balm","Nervous","Calm Mind","★★","Nervous +3","Mood +2","Nerves, Gut","Lemon balm tea","Calm Salad","Lemon Balm Bar"],
["Lavender","Nervous","Peace Flower","★★","Sleep +3","Calm +3","Nerves, Skin","Lavender tea","Night Smoothie","Lavender Soap"],
["Skullcap","Nervous","Quiet Crown","★★★","Nervous +4","Rest +2","Nerves","Skullcap tea","Evening Bowl","Calm Ritual Bar"],
["Passionflower","Nervous","Rest Vine","★★★","Sleep +4","Calm +2","Nerves","Passionflower tea","Night Soup","Dream Bar"],
["Oat Straw","Nervous","Mineral Nerve","★★","Nervous +2","Mineral +3","Nerves, Skin","Oat straw tea","Oat Bowl","Oat Comfort Bar"],
["Hawthorn","Heart","Heart Berry","★★★","Heart +4","Circulation +2","Heart, Blood","Hawthorn tea","Heart Beet Plate","Rose Hawthorn Bar"],
["Hibiscus","Heart","Red Sour Flower","★★","Heart +3","Cooling +2","Heart, Blood","Hibiscus tea","Beet Berry Plate","Hibiscus Glow Bar"],
["Cayenne","Blood","Fire Pepper","★★","Circulation +4","Heat +3","Blood, Gut","Cayenne tonic","Circulation Bowl","Fire Scrub Bar"],
["Garlic","Blood","Kitchen Shield","★★","Circulation +3","Immune +2","Blood, Gut, Lungs","Garlic broth","Savory Bowl","Garlic Garden Bar"],
["Rosemary","Brain","Memory Herb","★★","Focus +3","Circulation +2","Brain, Blood","Rosemary tea","Brain Bowl","Rosemary Mint Bar"],
["Calendula","Skin","Golden Skin Flower","★★","Skin +4","Lymph +2","Skin, Lymph","Calendula tea","Glow Bowl","Calendula Comfort Bar"],
["Burdock","Skin","Deep Root","★★★","Skin +3","Detox +3","Skin, Liver","Burdock tea","Skin Glow Bowl","Burdock Clay Bar"],
["Nettle","Skin","Mineral Leaf","★★★","Mineral +4","Kidney +2","Skin, Kidneys, Blood","Nettle tea","Mineral Bowl","Nettle Green Bar"],
["Red Clover","Skin","Clean Bloom","★★","Lymph +3","Skin +2","Skin, Lymph","Red clover tea","Glow Salad","Clover Bar"],
["Plantain","Skin","Field Healer","★★","Skin +3","Soothing +2","Skin","Plantain tea","Garden Bowl","Plantain Herbal Bar"]
];

const patients=[
["Digestive Distress","Needs Digestive +4 and Warming +2","Reward: 3 Vitality","Best herbs: Ginger, Fennel, Peppermint"],
["Lung Congestion","Needs Respiratory +5","Reward: 4 Vitality","Best herbs: Mullein, Thyme, Eucalyptus"],
["Stress Overload","Needs Nervous +5 and Calm +2","Reward: 4 Vitality","Best herbs: Lemon Balm, Lavender, Chamomile"],
["Heart Pressure","Needs Heart +4 and Circulation +2","Reward: 5 Vitality","Best herbs: Hawthorn, Hibiscus, Rosemary"],
["Skin Flare","Needs Skin +5 and Lymph +2","Reward: 4 Vitality","Best herbs: Calendula, Burdock, Nettle"],
["Low Energy Reserve","Needs Mineral +3 and Rest +2","Reward: 3 Vitality","Best herbs: Nettle, Oat Straw, Chamomile"]
];

const organGameCards=[
["Liver","Orange","Dandelion, Burdock, Milk Thistle","Beets, lemon, bitter greens","Detox / Processing"],
["Heart","Red","Hawthorn, Hibiscus, Rose","Beets, berries, pomegranate","Love / Circulation"],
["Lungs","Blue","Mullein, Thyme, Peppermint","Pears, onion, garlic","Breath / Release"],
["Gut","Green","Ginger, Fennel, Peppermint","Apples, celery, fermented vegetables","Digest / Transform"],
["Skin","Yellow","Calendula, Burdock, Nettle","Cucumber, citrus, parsley","Glow / Boundary"],
["Nervous System","Violet","Chamomile, Lemon Balm, Lavender","Oats, sesame, banana","Calm / Regulation"]
];

let selectedSystem="Liver";
const $=id=>document.getElementById(id);
function fillList(id,arr){$(id).innerHTML=arr.map(x=>`<li>${x}</li>`).join("")}

function renderSystem(name){
 selectedSystem=name;const d=systems[name], m=organMenus[name];
 $("systemTone").textContent=d.tone;$("systemTitle").textContent=name+" Support Protocol";$("systemSummary").textContent=d.summary;
 fillList("foodsList",d.foods);fillList("drinksList",d.drinks);fillList("practiceList",d.practice);fillList("innerList",d.inner);
 document.querySelectorAll(".organDot").forEach(b=>b.classList.toggle("active",b.dataset.system===name));
 renderMenu();renderRecipes();
}

function renderMenuTabs(){
 $("menuTabs").innerHTML=Object.keys(organMenus).map(name=>`<button class="menuTab ${name===selectedSystem?"active":""}" data-menu="${name}">${name}</button>`).join("");
 document.querySelectorAll(".menuTab").forEach(b=>b.onclick=()=>{selectedSystem=b.dataset.menu;renderSystem(selectedSystem);document.querySelector("#organ-menus").scrollIntoView({behavior:"smooth"})});
}

function renderMenu(){
 const m=organMenus[selectedSystem]; if(!m)return;
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
 return Object.entries(organMenus).map(([name,m],index)=>({id:index,system:name,title:m.meal,tea:m.tea,juice:m.juice,salad:m.salad,snack:m.snack,herbs:m.herbs,theme:m.theme,intention:m.intention,why:m.why,practice:m.practice,avoid:m.avoid,prompt:m.prompt,product:m.product}));
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
      <li><strong>Warm meal:</strong> ${r.title}</li>
      <li><strong>Salad/Bowl:</strong> ${r.salad}</li>
      <li><strong>Tea pairing:</strong> ${r.tea}</li>
      <li><strong>Juice pairing:</strong> ${r.juice}</li>
      <li><strong>Snack:</strong> ${r.snack}</li>
    </ul></div>
    <div class="modalBox"><h3>Ingredient Benefits</h3><ul>
      ${r.herbs.map(h=>`<li><strong>${h}:</strong> Supports the ${r.theme.toLowerCase()} story and gives the card its herbal identity.</li>`).join("")}
      <li><strong>Greens:</strong> Minerals, fiber, color, and plant energy.</li>
      <li><strong>Mushrooms:</strong> Umami, body, and Plant Dojo protein-style depth.</li>
    </ul></div>
    <div class="modalBox"><h3>Organ Connection</h3><p>${r.why}</p><p><strong>Best intention:</strong> ${r.intention}</p></div>
    <div class="modalBox"><h3>Journal + Practice</h3><p><strong>Prompt:</strong> ${r.prompt}</p><p><strong>Practice:</strong> ${r.practice}</p><p><strong>Avoid:</strong> ${r.avoid}</p></div>
    <div class="modalBox"><h3>Product/Class Angle</h3><p>${r.product}</p><p>Use this as a paid PDF, recipe card, class module, QR card, private chef menu item, or membership lesson.</p></div>
    <div class="modalBox"><h3>Free vs Paid</h3><ul><li><strong>Free:</strong> Basic recipe, organ purpose, and simple ingredients.</li><li><strong>Paid:</strong> Full measurements, video demo, printable PDF, shopping list, and weekly plan.</li></ul></div>
  </div>`;
 $("recipeModal").classList.add("open");$("recipeModal").setAttribute("aria-hidden","false");
}

function renderHerbCards(filter="all", query=""){
 const q=query.toLowerCase();
 const rows=herbCards.filter(c=>(filter==="all"||c[1].includes(filter)||c[6].includes(filter)) && c.join(" ").toLowerCase().includes(q));
 $("herbCardGrid").innerHTML=rows.map((c,i)=>`
  <div class="flipCard" tabindex="0">
    <div class="flipInner">
      <div class="flipFace">
        <div>
          <p class="cardType">${c[2]}</p>
          <h3 class="cardName">${c[0]}</h3>
          <div class="stars">${c[3]}</div>
        </div>
        <div><span class="tag">${c[1]}</span><p>${c[4]}</p></div>
      </div>
      <div class="flipFace flipBack">
        <div>
          <p class="cardType">${c[0]}</p>
          <ul>
            <li>${c[4]}</li>
            <li>${c[5]}</li>
            <li><strong>Supports:</strong> ${c[6]}</li>
            <li><strong>Tea:</strong> ${c[7]}</li>
            <li><strong>Recipe:</strong> ${c[8]}</li>
            <li><strong>Soap:</strong> ${c[9]}</li>
          </ul>
        </div>
        <p>Healing Hand Card</p>
      </div>
    </div>
  </div>`).join("");
 document.querySelectorAll(".flipCard").forEach(card=>card.onclick=()=>card.classList.toggle("flipped"));
}

function renderPatients(){
 $("patientGrid").innerHTML=patients.map(p=>`<article class="patientCard"><p class="eyebrow">Patient Card</p><h3>${p[0]}</h3><p>${p[1]}</p><p><strong>${p[2]}</strong></p><p>${p[3]}</p></article>`).join("");
 $("organCardGrid").innerHTML=organGameCards.map(o=>`<article class="organGameCard"><p class="eyebrow">Organ Card · ${o[1]}</p><h3>${o[0]}</h3><p><strong>Preferred Herbs:</strong> ${o[2]}</p><p><strong>Preferred Foods:</strong> ${o[3]}</p><p><strong>Theme:</strong> ${o[4]}</p></article>`).join("");
}

function fakePay(){alert("Replace this placeholder with your Stripe, PayPal, Gumroad, Shopify, or booking link.");}

document.querySelectorAll(".organDot").forEach(b=>b.onclick=()=>{renderSystem(b.dataset.system);document.querySelector("#organ-menus").scrollIntoView({behavior:"smooth"})});
document.querySelector(".menuBtn").onclick=()=>document.querySelector(".nav").classList.toggle("open");
document.querySelectorAll(".filterBtn").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filterBtn").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderRecipes(b.dataset.filter)});
document.querySelectorAll(".cardFilter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".cardFilter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderHerbCards(b.dataset.cardFilter,$("herbSearch").value)});
$("herbSearch").addEventListener("input",e=>{const active=document.querySelector(".cardFilter.active").dataset.cardFilter;renderHerbCards(active,e.target.value)});
$("closeModal").onclick=()=>{$("recipeModal").classList.remove("open");$("recipeModal").setAttribute("aria-hidden","true")};
$("recipeModal").onclick=e=>{if(e.target.id==="recipeModal")$("closeModal").click()};
$("year").textContent=new Date().getFullYear();

renderSystem(selectedSystem);renderMenuTabs();renderRecipes();renderHerbCards();renderPatients();
