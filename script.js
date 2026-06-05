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
"Brain":{color:"#8b7bd6",theme:"Mind / Focus",herbs:["rosemary","ginkgo","gotu kola","sage"],tea:"Rosemary + sage focus tea",juice:"Blueberry, grape, lime, mint smoothie",salad:"Walnut, blueberry, greens, pumpkin seed salad",meal:"Lion’s mane mushroom steak with quinoa and greens",snack:"Pumpkin seeds with dark chocolate and berries",practice:"20 minutes of single-task focus, then a brain-dump journal",avoid:"Overstimulation, doom scrolling, skipping sleep",prompt:"What idea is asking for structure today?"},
"Eyes & Vision":{color:"#84a98c",theme:"Sight / Clarity",herbs:["chrysanthemum","goji","bilberry","eyebright"],tea:"Chrysanthemum + goji berry tea",juice:"Carrot, orange, ginger, turmeric juice",salad:"Kale, carrot ribbon, pumpkin seed, lemon salad",meal:"Sweet potato and greens bowl with roasted mushrooms",snack:"Blueberries with walnuts",practice:"Eye palming and 20-20-20 screen breaks",avoid:"Bright screens at night, dim-light reading, dehydration",prompt:"What do I need to see clearly?"},
"Lungs":{color:"#75aadb",theme:"Breath / Release",herbs:["mullein","thyme","peppermint","ginger"],tea:"Mullein, thyme, and peppermint tea",juice:"Pear, cucumber, mint, lime cooler",salad:"Cucumber, pear, mint, greens, lemon salad",meal:"Mullein mushroom broth with garlic, onion, thyme, and rice",snack:"Steamed pear with cinnamon",practice:"Slow nasal breathing and chest-opening stretch",avoid:"Smoke, heavy fried foods, shallow breathing",prompt:"What pressure needs air?"},
"Heart":{color:"#c85d5d",theme:"Love / Circulation",herbs:["hawthorn","hibiscus","rose","cacao"],tea:"Hawthorn + hibiscus heart tea",juice:"Beet, berry, pomegranate, lime tonic",salad:"Beet, berry, arugula, pumpkin seed salad",meal:"Beet hibiscus plate with greens and mushroom protein",snack:"Pomegranate with dark chocolate",practice:"Gratitude note and gentle walk",avoid:"Holding resentment, excess salt, emotional shutdown",prompt:"What does my heart need protected?"},
"Liver":{color:"#d99042",theme:"Detox / Processing",herbs:["dandelion","burdock","milk thistle","turmeric"],tea:"Dandelion root + burdock tea",juice:"Lemon, celery, cucumber, ginger green juice",salad:"Arugula, dandelion greens, beet, lemon salad",meal:"Liver reset green bowl with quinoa, beets, bitter greens, and mushrooms",snack:"Apple slices with lemon and cinnamon",practice:"Twisting stretch and declutter one space",avoid:"Alcohol, greasy overload, late-night heavy meals",prompt:"What am I ready to process and release?"},
"Spleen":{color:"#d8bd67",theme:"Grounding / Nourishment",herbs:["ginger","cinnamon","astragalus","fennel"],tea:"Ginger + cinnamon grounding tea",juice:"Carrot, apple, ginger warm-toned juice",salad:"Roasted squash, greens, sesame, ginger dressing",meal:"Sweet potato congee with mushrooms and greens",snack:"Roasted squash with cinnamon",practice:"Slow chewing and warm breakfast",avoid:"Cold rushed meals, worry spirals, skipping meals",prompt:"Where do I need steadiness?"},
"Gut & Digestion":{color:"#78a96b",theme:"Digest / Transform",herbs:["peppermint","fennel","ginger","dandelion"],tea:"Peppermint, fennel, and ginger tea",juice:"Celery, apple, ginger, lemon digestive juice",salad:"Fennel, apple, celery, parsley salad",meal:"Ginger apple oats or mushroom rice bowl with fermented vegetables",snack:"Stewed apples with cinnamon",practice:"Walk after meals and belly breathing",avoid:"Eating while scrolling, rushing, overeating late",prompt:"What am I still digesting emotionally?"},
"Kidneys & Adrenals":{color:"#4c9c9c",theme:"Water / Reserves",herbs:["nettle","corn silk","parsley","uva ursi"],tea:"Nettle + corn silk mineral tea",juice:"Cucumber, celery, parsley, lime mineral juice",salad:"Cucumber, seaweed, sesame, parsley salad",meal:"Black bean, greens, and mushroom mineral bowl",snack:"Celery with sesame tahini dip",practice:"Legs-up-wall and early wind-down",avoid:"Dehydration, excess caffeine, burning energy too fast",prompt:"Where am I leaking energy?"},
"Reproductive":{color:"#b25375",theme:"Creation / Flow",herbs:["raspberry leaf","nettle","ginger","rose"],tea:"Raspberry leaf + nettle tea",juice:"Pomegranate, berry, ginger, lime tonic",salad:"Avocado, pumpkin seed, greens, citrus salad",meal:"Stuffed plantain boats with mushroom protein and greens",snack:"Pumpkin seeds and raspberries",practice:"Hip circles and creative writing",avoid:"Ignoring creative urges, chronic stress, cold stagnation",prompt:"What wants to be created through me?"},
"Skin & Lymph":{color:"#e1c84f",theme:"Glow / Boundary",herbs:["calendula","burdock","nettle","red clover"],tea:"Calendula + burdock skin tea",juice:"Cucumber, lemon, parsley, mint hydration juice",salad:"Citrus cucumber parsley glow salad",meal:"Green garden bowl with avocado, herbs, and mushrooms",snack:"Watermelon or cucumber with lime",practice:"Dry brushing and gentle sweat",avoid:"Dehydration, stagnant movement, ignoring boundaries",prompt:"What boundary needs care?"},
"Blood & Circulation":{color:"#b34545",theme:"Movement / Warmth",herbs:["hibiscus","ginger","cayenne","cinnamon"],tea:"Hibiscus, ginger, and cinnamon tea",juice:"Beet, orange, ginger, lime circulation juice",salad:"Beet, citrus, greens, pumpkin seed salad",meal:"Warm beet and mushroom bowl with greens",snack:"Orange slices with cinnamon",practice:"Brisk walk and ankle pumps",avoid:"Sitting too long, cold stagnation, excess processed foods",prompt:"Where does life need motion?"},
"Nervous System":{color:"#8b90c9",theme:"Calm / Regulation",herbs:["chamomile","lemon balm","lavender","passionflower"],tea:"Chamomile, lemon balm, and lavender tea",juice:"Banana, oat, cinnamon, sesame calming smoothie",salad:"Avocado, greens, sesame, cucumber calm salad",meal:"Nervous system night soup with mushrooms, rice, greens, and sesame",snack:"Banana with tahini and cinnamon",practice:"Box breathing, digital sunset, jaw and neck release",avoid:"Late caffeine, screen overload, rushing rest",prompt:"What can wait until tomorrow?"}
};

const intentions=[["Reset","↻","Begin again. Clear what no longer serves."],["Detox","♨","Release and cleanse. Let go of the old."],["Nourish","🥗","Feed your cells. Restore vitality."],["Calm / Regulate","♡","Find stillness. Return to center."],["Move / Circulate","↗","Awaken energy. Encourage flow."],["Sleep / Recover","☾","Rest deeply. Allow repair."]];

let selectedIntent="Reset", selectedSystem="Liver";
const $=id=>document.getElementById(id);
function fillList(id,arr){$(id).innerHTML=arr.map(x=>`<li>${x}</li>`).join("")}

function renderIntentGrid(){
 $("intentGrid").innerHTML=intentions.map(i=>`<button class="intentCard ${i[0]===selectedIntent?"active":""}" data-intent="${i[0]}"><div class="icon">${i[1]}</div><h3>${i[0]}</h3><p>${i[2]}</p></button>`).join("");
 document.querySelectorAll(".intentCard").forEach(b=>b.onclick=()=>{selectedIntent=b.dataset.intent;renderIntentGrid();renderMenu(selectedSystem);document.querySelector("#organ-map").scrollIntoView({behavior:"smooth"})});
}

function renderSystem(name){
 selectedSystem=name;const d=systems[name];
 $("systemTone").textContent=d.tone;$("systemTitle").textContent=name+" Support Protocol";$("systemSummary").textContent=d.summary;
 fillList("foodsList",d.foods);fillList("drinksList",d.drinks);fillList("practiceList",d.practice);fillList("innerList",d.inner);
 document.querySelectorAll(".organDot").forEach(b=>b.classList.toggle("active",b.dataset.system===name));
 renderMenu(name);
}

function renderMenuTabs(){
 $("menuTabs").innerHTML=Object.keys(organMenus).map(name=>`<button class="menuTab ${name===selectedSystem?"active":""}" data-menu="${name}">${name}</button>`).join("");
 document.querySelectorAll(".menuTab").forEach(b=>b.onclick=()=>{renderSystem(b.dataset.menu);document.querySelector("#organ-menus").scrollIntoView({behavior:"smooth"})});
}

function renderMenu(name){
 const m=organMenus[name]; if(!m) return;
 document.documentElement.style.setProperty("--menuColor",m.color);
 $("organMenuCard").innerHTML=`
  <div class="menuHeader">
    <div>
      <p class="eyebrow">${m.theme} · ${selectedIntent}</p>
      <h3>${name} Full Menu</h3>
      <p>This menu is a Plant Dojo pathway for supporting the ${name.toLowerCase()} through food, herbs, daily rhythm, and reflection.</p>
      <div class="herbStrip">${m.herbs.map(h=>`<span class="tag">${h}</span>`).join("")}</div>
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
    <div class="menuItem"><h4>Class / Product Idea</h4><p>Turn this into a recipe card, organ PDF, QR card, or class lesson.</p></div>
  </div>`;
 renderMenuTabs(); renderRecipes();
}

function renderRecipes(filter="all"){
 const rows=Object.entries(organMenus).map(([name,m])=>({system:name,title:m.meal,tea:m.tea,juice:m.juice,herbs:m.herbs,theme:m.theme}));
 $("recipeGrid").innerHTML=rows.filter(r=>filter==="all"||r.system.includes(filter)).map(r=>`
  <article class="recipeCard">
    <p class="eyebrow">${r.system} · ${r.theme}</p>
    <h3>${r.title}</h3>
    <div class="meta">${r.herbs.slice(0,3).map(h=>`<span class="tag">${h}</span>`).join("")}</div>
    <p><strong>Tea Pairing:</strong> ${r.tea}</p>
    <p><strong>Juice Pairing:</strong> ${r.juice}</p>
    <p><strong>Dojo Use:</strong> Build this into a recipe card, class demo, or private chef menu item.</p>
  </article>`).join("");
}

document.querySelectorAll(".organDot").forEach(b=>b.onclick=()=>{renderSystem(b.dataset.system);document.querySelector("#organ-menus").scrollIntoView({behavior:"smooth"})});
document.querySelector(".menuBtn").onclick=()=>document.querySelector(".nav").classList.toggle("open");
document.querySelectorAll(".filterBtn").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filterBtn").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderRecipes(b.dataset.filter)});
$("year").textContent=new Date().getFullYear();
renderIntentGrid();renderSystem(selectedSystem);renderMenuTabs();renderRecipes();
