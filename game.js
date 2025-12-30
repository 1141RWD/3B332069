/* =============== 圖片 =============== */
function svgData(svg){ return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg); }

const artMap = {
  "機械蜘蛛": svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b263b"/><stop offset="1" stop-color="#0b1320"/></linearGradient><linearGradient id="steel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d7e0ea"/><stop offset="1" stop-color="#6c7a89"/></linearGradient></defs><rect width="240" height="160" rx="18" fill="url(#bg)"/><g transform="translate(120 86)"><g stroke="url(#steel)" stroke-width="8" stroke-linecap="round" fill="none"><path d="M-40 0 L-80 -20"/><path d="M-40 10 L-90 20"/><path d="M-20 -10 L-60 -50"/><path d="M-10 20 L-50 60"/><path d="M40 0 L80 -20"/><path d="M40 10 L90 20"/><path d="M20 -10 L60 -50"/><path d="M10 20 L50 60"/></g><ellipse cx="0" cy="0" rx="34" ry="28" fill="url(#steel)"/><circle cx="0" cy="-38" r="20" fill="url(#steel)"/><g fill="#0b1320"><circle cx="-6" cy="-44" r="3"/><circle cx="6" cy="-44" r="3"/></g><circle cx="0" cy="0" r="40" fill="none" stroke="rgba(98,240,255,.35)" stroke-width="4"/></g></svg>`),
  "野豬": svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b1b14"/><stop offset="1" stop-color="#0f0a08"/></linearGradient><linearGradient id="fur" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8a06a"/><stop offset="1" stop-color="#7a4b2a"/></linearGradient></defs><rect width="240" height="160" rx="18" fill="url(#bg)"/><g transform="translate(120 92)"><path d="M-60 10 Q0 -50 60 10 Q52 55 0 60 Q-52 55 -60 10Z" fill="url(#fur)" stroke="rgba(255,255,255,.18)" stroke-width="3"/><path d="M-65 5 Q-85 -15 -70 -35 Q-45 -25 -50 -5Z" fill="url(#fur)"/><path d="M65 5 Q85 -15 70 -35 Q45 -25 50 -5Z" fill="url(#fur)"/><path d="M-40 -10 Q0 -50 40 -10" stroke="rgba(255,213,106,.45)" stroke-width="6" stroke-linecap="round"/><g><path d="M-18 10 Q0 0 18 10 Q18 30 0 32 Q-18 30 -18 10Z" fill="#3b261a"/><circle cx="-7" cy="18" r="3" fill="#0f0a08"/><circle cx="7" cy="18" r="3" fill="#0f0a08"/></g><g fill="#0f0a08"><circle cx="-18" cy="-10" r="4"/><circle cx="18" cy="-10" r="4"/></g><path d="M-55 -20 L-75 -45" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M55 -20 L75 -45" stroke="#fff" stroke-width="6" stroke-linecap="round"/></g></svg>`),
  "護盾學徒": svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2a35"/><stop offset="1" stop-color="#08141c"/></linearGradient><linearGradient id="shield" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#77f3ff"/><stop offset="1" stop-color="#1a9bb0"/></linearGradient></defs><rect width="240" height="160" rx="18" fill="url(#bg)"/><g transform="translate(120 86)"><path d="M0 -58 C32 -45 54 -38 54 -10 C54 30 30 56 0 68 C-30 56 -54 30 -54 -10 C-54 -38 -32 -45 0 -58Z" fill="url(#shield)" stroke="rgba(255,255,255,.35)" stroke-width="4"/><path d="M0 -44 V52" stroke="rgba(255,255,255,.6)" stroke-width="4"/><path d="M-30 -14 H30" stroke="rgba(255,255,255,.6)" stroke-width="4"/><circle cx="0" cy="-4" r="34" fill="none" stroke="rgba(98,240,255,.25)" stroke-width="10"/></g></svg>`),
  "小齒輪兵": svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#242033"/><stop offset="1" stop-color="#0f0c18"/></linearGradient><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0f6ff"/><stop offset="1" stop-color="#7b8794"/></linearGradient></defs><rect width="240" height="160" rx="18" fill="url(#bg)"/><g transform="translate(120 84)"><g fill="url(#metal)"><circle r="40"/><g><rect x="-6" y="-72" width="12" height="20" rx="4"/><rect x="-6" y="52" width="12" height="20" rx="4"/><rect x="-72" y="-6" width="20" height="12" rx="4"/><rect x="52" y="-6" width="20" height="12" rx="4"/><rect x="-54" y="-54" width="18" height="12" rx="4" transform="rotate(-45)"/><rect x="36" y="-54" width="18" height="12" rx="4" transform="rotate(45)"/><rect x="-54" y="36" width="18" height="12" rx="4" transform="rotate(45)"/><rect x="36" y="36" width="18" height="12" rx="4" transform="rotate(-45)"/></g><circle r="18" fill="rgba(0,0,0,.35)"/></g><circle r="48" fill="none" stroke="rgba(255,213,106,.22)" stroke-width="8"/></g></svg>`),
  "磁力零件": svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a2b22"/><stop offset="1" stop-color="#07110c"/></linearGradient><linearGradient id="mag" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6a7a"/><stop offset="1" stop-color="#ffb83d"/></linearGradient></defs><rect width="240" height="160" rx="18" fill="url(#bg)"/><g transform="translate(120 90)"><path d="M-50 -50 h26 v54 a24 24 0 0 0 48 0 v-54 h26 v54 a50 50 0 0 1 -100 0z" fill="url(#mag)" stroke="rgba(255,255,255,.25)" stroke-width="4"/><rect x="-50" y="-50" width="26" height="16" rx="6" fill="#d7e0ea"/><rect x="24" y="-50" width="26" height="16" rx="6" fill="#d7e0ea"/><path d="M-52 6 q52 24 104 0" fill="none" stroke="rgba(98,240,255,.35)" stroke-width="8" stroke-linecap="round"/></g></svg>`),
};

function autoArt(m){
  const raw = m.name || "卡牌";
  const name = raw.replace(/^★/, "").replace(/^敵·/, "");
  const isShield = !!m.shield || name.includes("護盾") || name.includes("聖盾");
  const isMag = !!m.magnetic || name.includes("磁力");
  const isMech = !!m.mech || name.includes("機") || name.includes("機甲");
  const isTitan = name.includes("泰坦") || name.includes("巨") || name.includes("神") || name.includes("終焉") || name.includes("天穹");
  const title = name.slice(0,6);

  const bg = isShield ? "#0b2a35" : (isMag ? "#1a2b22" : (isMech ? "#242033" : "#2b1b14"));
  const accent = isShield ? "#62f0ff" : (isMag ? "#ff6a7a" : (isTitan ? "#ffd66a" : "#d7e0ea"));
  const icon = isShield ? "🛡" : (isMag ? "🧲" : (isMech ? "⚙️" : (isTitan ? "👑" : "🐗")));

  return svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="#05060a"/></linearGradient></defs>
  <rect width="240" height="160" rx="18" fill="url(#bg)"/>
  <circle cx="120" cy="80" r="56" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.12)" stroke-width="3"/>
  <text x="120" y="95" text-anchor="middle" font-size="58" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji">${icon}</text>
  <text x="120" y="138" text-anchor="middle" font-size="16" font-family="ui-sans-serif, system-ui" fill="rgba(255,255,255,.78)">${title}</text>
  <path d="M40 22 H200" stroke="${accent}" stroke-width="6" stroke-linecap="round" opacity=".35"/>
</svg>`);
}
function artUrl(minion){
  if(minion.img) return minion.img;
  const baseName = (minion.name || "").replace(/^★/, "").replace(/^敵·/, "");
  return artMap[baseName] || autoArt({...minion, name: baseName});
}

/* =============== 遊戲狀態 =============== */
let hpVal = 30;
const maxHP = 30;
let gold = 10;
let turn = 1;
let tavernTier = 1;
let winStreak = 0;
let frozen = false;
let gameOver = false;

const refreshCost = 1;
const MAX_TAVERN = 6;
const upgradeCosts = [0, 5, 7, 9, 11, 13, 0];

let shop = [];
let bag = [];
let board = [];

/* 卡池 */
const pool = [
  {tier:1, name:"機械蜘蛛", atk:2, hp:1, mech:true, magnetic:true, img:""},
  {tier:1, name:"野豬", atk:3, hp:3, img:""},
  {tier:1, name:"護盾學徒", atk:2, hp:2, shield:true, img:""},
  {tier:1, name:"小齒輪兵", atk:1, hp:4, mech:true, img:""},
  {tier:1, name:"磁力零件", atk:1, hp:1, mech:true, magnetic:true, img:""},

  {tier:2, name:"護盾機器", atk:3, hp:2, shield:true, mech:true, img:""},
  {tier:2, name:"爆炸機器人", atk:2, hp:2, mech:true, deathSpawnName:"機械蜘蛛", img:""},
  {tier:2, name:"狂戰士", atk:4, hp:3, img:""},
  {tier:2, name:"金屬獵犬", atk:4, hp:2, mech:true, img:""},
  {tier:2, name:"磁力裝甲", atk:2, hp:3, mech:true, magnetic:true, img:""},

  {tier:3, name:"蒸汽巨像", atk:6, hp:6, mech:true, img:""},
  {tier:3, name:"聖盾指揮官", atk:5, hp:5, shield:true, img:""},
  {tier:3, name:"磁力核心", atk:3, hp:3, mech:true, magnetic:true, img:""},
  {tier:3, name:"雷鳴機甲", atk:7, hp:4, mech:true, img:""},
  {tier:3, name:"護盾機械衛兵", atk:4, hp:6, shield:true, mech:true, img:""},

  {tier:4, name:"遠古泰坦", atk:10, hp:10, img:""},
  {tier:4, name:"完美機甲", atk:8, hp:8, shield:true, mech:true, img:""},
  {tier:4, name:"磁力超載", atk:5, hp:5, mech:true, magnetic:true, img:""},
  {tier:4, name:"鋼鐵暴君", atk:12, hp:8, mech:true, img:""},
  {tier:4, name:"護盾聖衛", atk:7, hp:11, shield:true, img:""},

  {tier:5, name:"奧術機甲", atk:13, hp:13, mech:true, img:""},
  {tier:5, name:"聖盾巨衛", atk:10, hp:16, shield:true, img:""},
  {tier:5, name:"磁力巨臂", atk:7, hp:9, mech:true, magnetic:true, img:""},

  {tier:6, name:"終焉機神", atk:18, hp:18, mech:true, shield:true, img:""},
  {tier:6, name:"天穹守護者", atk:15, hp:22, shield:true, img:""},
  {tier:6, name:"磁力超核心", atk:10, hp:10, mech:true, magnetic:true, img:""}
];

/* =============== 英雄技能（可選） =============== */
const HEROES = [
  {
    id:"toki",
    name:"技師托奇",
    desc:"每回合第一個「磁力」購買免費；磁力會直接貼到戰場第一個機械。",
    note:"偏機械成長，容易做出超大隻。",
    modifyBuyCost(m, ctx){
      if(m.magnetic && !ctx.turnFlags.freeMagUsed) return 0;
      return null;
    },
    onBuy(m, ctx){
      if(m.magnetic && !ctx.turnFlags.freeMagUsed){
        ctx.turnFlags.freeMagUsed = true;
      }
    }
  },
  {
    id:"merchant",
    name:"財富商人",
    desc:"每回合第一次刷新免費；並且每回合開始 +1 金。",
    note:"偏經濟，前期很舒服。",
    onTurnStart(ctx){ ctx.gold += 1; },
    modifyRefreshCost(ctx){
      if(!ctx.turnFlags.freeRefreshUsed) return 0;
      return null;
    },
    onRefresh(ctx){
      if(!ctx.turnFlags.freeRefreshUsed) ctx.turnFlags.freeRefreshUsed = true;
    }
  },
  {
    id:"trainer",
    name:"戰場教官",
    desc:"每回合第一次上場（背包→戰場）時，該卡牌 +1/+1。",
    note:"偏站位與節奏，靠上場BUFF。",
    onBoardEnter(m, ctx){
      if(!ctx.turnFlags.firstEnterBuffed){
        m.atk += 1; m.hp += 1;
        ctx.turnFlags.firstEnterBuffed = true;
      }
    }
  },
  {
    id:"blacksmith",
    name:"鐵匠",
    desc:"每回合第一次購買非磁力卡牌時，放入背包前 +1 攻。",
    note:"偏買牌成長，打點提升快。",
    onBuy(m, ctx){
      if(!m.magnetic && !ctx.turnFlags.firstNonMagBuyBuffed){
        m.atk += 1;
        ctx.turnFlags.firstNonMagBuyBuffed = true;
      }
    }
  },
  {
    id:"engineer",
    name:"酒館工程師",
    desc:"升級旅店費用 -1（最低 1）；且升級後自動多送 1 次免費刷新。",
    note:"偏快速升級，越早上高階越強。",
    modifyUpgradeCost(ctx, baseCost){
      return Math.max(1, baseCost - 1);
    },
    onUpgrade(ctx){
      ctx.turnFlags.freeRefreshUsed = false; // 再給一次免費刷新
    }
  },
  {
    id:"alchemist",
    name:"鍊金師",
    desc:"每回合第一次賣出卡牌時，額外 +1 金（等於賣 2 金）。",
    note:"偏資源循環，合成前賣掉很賺。",
    onSell(ctx){
      if(!ctx.turnFlags.bonusSellUsed){
        ctx.gold += 1;
        ctx.turnFlags.bonusSellUsed = true;
      }
    }
  },
  {
    id:"fusionist",
    name:"融合術師",
    desc:"每回合第一次三合一完成時，合成的金卡再額外 +2/+2。",
    note:"偏三合一爆發。",
    onTriple(resultCard, ctx){
      if(!ctx.turnFlags.tripleBoosted){
        resultCard.atk += 2;
        resultCard.hp  += 2;
        ctx.turnFlags.tripleBoosted = true;
      }
    }
  }
];

// ✅ 開局未選職業：先鎖住
let heroId = null;
let hero = null;
let heroLocked = false;

/* 回合內旗標 */
let turnFlags = {};

/* =============== 工具 =============== */
function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }
function coinHTML(cls="coinIcon sm"){
  return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-coin"></use></svg>`;
}
function startGoldForTurn(){ return 10 + (tavernTier - 1); }
function winReward(){
  const base = 2 + tavernTier;
  const streakBonus = Math.min(winStreak, 6);
  return base + streakBonus;
}
function getCtx(){
  return {
    gold,
    turn,
    tavernTier,
    winStreak,
    bag,
    board,
    shop,
    turnFlags
  };
}
function getUpgradeCost(){
  if(tavernTier >= MAX_TAVERN) return 0;
  const base = upgradeCosts[tavernTier];
  const ctx = getCtx();
  if(hero?.modifyUpgradeCost) return hero.modifyUpgradeCost(ctx, base);
  return base;
}
function canUpgrade(){
  const cost = getUpgradeCost();
  return !gameOver && tavernTier < MAX_TAVERN && gold >= cost;
}
function tierGlowClass(t){
  if(t===6) return "tierGlow6";
  if(t===5) return "tierGlow5";
  if(t===4) return "tierGlow4";
  if(t===3) return "tierGlow3";
  if(t===2) return "tierGlow2";
  return "tierGlow1";
}
function normalizeName(n){ return (n||"").replace(/^★/, "").replace(/^敵·/, ""); }

/* =============== 英雄選擇UI（主面板） =============== */
function buildHeroSelect(){
  const sel = document.getElementById("heroSelect");
  sel.innerHTML = "";
  HEROES.forEach(h=>{
    const opt = document.createElement("option");
    opt.value = h.id;
    opt.textContent = `${h.name} — ${h.desc}`;
    sel.appendChild(opt);
  });
  sel.value = HEROES[0].id;
}
function applyHeroSelection(){
  // ✅ 選完就不能改（主面板這顆只是保險）
  if(heroLocked) return;
  const sel = document.getElementById("heroSelect");
  heroId = sel.value;
  hero = HEROES.find(x=>x.id===heroId);
  turnFlags = {};
  render();
}

/* =============== 開局遮罩：選職業（只能一次） =============== */
function buildHeroPickSelect(){
  const sel = document.getElementById("heroPickSelect");
  const desc = document.getElementById("heroPickDesc");
  sel.innerHTML = "";

  HEROES.forEach(h=>{
    const opt = document.createElement("option");
    opt.value = h.id;
    opt.textContent = `${h.name} — ${h.desc}`;
    sel.appendChild(opt);
  });

  sel.value = HEROES[0].id;
  desc.textContent = "提示：" + (HEROES[0].note || "");

  sel.onchange = () => {
    const h = HEROES.find(x=>x.id===sel.value);
    desc.textContent = "提示：" + (h?.note || "");
  };
}

function confirmHeroPick(){
  if(heroLocked) return;

  const pick = document.getElementById("heroPickSelect").value;
  heroId = pick;
  hero = HEROES.find(x=>x.id===heroId);
  heroLocked = true;

  // 同步主面板並鎖死
  const mainSel = document.getElementById("heroSelect");
  const applyBtn = document.getElementById("applyHeroBtn");
  if(mainSel){
    mainSel.value = heroId;
    mainSel.disabled = true;
  }
  if(applyBtn) applyBtn.disabled = true;

  // 關閉遮罩，正式開始
  document.getElementById("heroPickOverlay").classList.remove("show");
  startGameAfterHeroPick();
}

/* =============== 三合一（背包+戰場一起算；合成回背包） =============== */
function merge3(list){
  const ms = list.map(x=>x.m);
  const baseName = normalizeName(ms[0].name);

  const merged = {...ms[0]};
  merged.golden = true;
  merged.name = "★" + baseName;
  merged.atk = ms.reduce((s,x)=>s + (x.atk||0), 0);
  merged.hp  = ms.reduce((s,x)=>s + (x.hp||0), 0);
  merged.shield = ms.some(x=>!!x.shield);

  const bagIdxs = list.filter(x=>x.src==="bag").map(x=>x.idx).sort((a,b)=>b-a);
  const boardIdxs = list.filter(x=>x.src==="board").map(x=>x.idx).sort((a,b)=>b-a);
  bagIdxs.forEach(i=>bag.splice(i,1));
  boardIdxs.forEach(i=>board.splice(i,1));

  if(hero?.onTriple) hero.onTriple(merged, getCtx());

  bag.push(merged);
}

function checkTriplesAll(){
  if(gameOver) return;
  let changed = true;
  while(changed){
    changed = false;
    const map = {};
    const all = [];
    bag.forEach((m, idx)=>{ if(!m.golden) all.push({src:"bag", idx, m}); });
    board.forEach((m, idx)=>{ if(!m.golden) all.push({src:"board", idx, m}); });

    all.forEach(x=>{
      const key = normalizeName(x.m.name);
      (map[key] = map[key] || []).push(x);
    });

    for(const name in map){
      if(map[name].length >= 3){
        merge3(map[name].slice(0,3));
        changed = true;
        break;
      }
    }
  }
}

/* =============== 重開 =============== */
function restartGame(){
  closeOverlay();
  heroLocked = false;
  heroId = null;
  hero = null;
  initGame(); // 回到「選職業」畫面
}

/* =============== 酒館/凍結 =============== */
function toggleFreeze(){ if(!gameOver){ frozen = !frozen; render(); } }

function refreshShop(free=false, force=false){
  if(gameOver) return;
  if(!hero) return; // 沒選職業不能開始
  if(frozen && !force){ render(); return; }

  const ctx = getCtx();
  let cost = refreshCost;

  if(hero?.modifyRefreshCost && !free){
    const newCost = hero.modifyRefreshCost(ctx);
    if(typeof newCost === "number") cost = newCost;
  }
  if(free) cost = 0;

  if(gold < cost) return;
  gold -= cost;

  shop = [];
  const candidates = pool.filter(m => m.tier <= tavernTier);
  const shopSize = 3 + Math.floor((tavernTier - 1) / 2);

  for(let i=0;i<shopSize;i++){
    shop.push({...candidates[Math.floor(Math.random()*candidates.length)]});
  }

  if(hero?.onRefresh) hero.onRefresh(getCtx());
  render();
}

function getBuyCost(m){
  const ctx = getCtx();
  if(hero?.modifyBuyCost){
    const r = hero.modifyBuyCost(m, ctx);
    if(typeof r === "number") return r;
  }
  return 3;
}

/* 磁力：貼到戰場第一個機械 */
function applyMagneticToBoard(m){
  const target = board.find(x => x.mech);
  if(target){
    target.atk += m.atk;
    target.hp  += m.hp;
    return true;
  }
  return false;
}

function buy(i){
  if(gameOver) return;
  if(!hero) return; // 沒選職業不能買
  const m = shop[i];
  const cost = getBuyCost(m);
  if(gold < cost) return;

  gold -= cost;
  shop.splice(i,1);

  if(hero?.onBuy) hero.onBuy(m, getCtx());

  if(m.magnetic && applyMagneticToBoard(m)){
    checkTriplesAll();
    render();
    return;
  }

  bag.push(m);
  checkTriplesAll();
  render();
}

function upgradeTavern(){
  if(gameOver) return;
  if(!hero) return;
  const cost = getUpgradeCost();
  if(tavernTier >= MAX_TAVERN) return;
  if(gold < cost) return;
  gold -= cost;
  tavernTier += 1;

  if(hero?.onUpgrade) hero.onUpgrade(getCtx());
  refreshShop(true, true);
}

/* =============== 上場/下場/賣出 =============== */
function canBoard(){ return board.length < 7; }

function bagToBoard(idx){
  if(gameOver) return;
  if(!hero) return;
  if(!canBoard()) return;
  const m = bag[idx];
  bag.splice(idx,1);

  if(hero?.onBoardEnter) hero.onBoardEnter(m, getCtx());

  board.push(m);
  checkTriplesAll();
  render();
}
function boardToBag(idx){
  if(gameOver) return;
  if(!hero) return;
  const m = board[idx];
  board.splice(idx,1);
  bag.push(m);
  checkTriplesAll();
  render();
}

function sellFromBag(idx){
  if(gameOver) return;
  if(!hero) return;
  if(idx<0 || idx>=bag.length) return;
  bag.splice(idx,1);
  gold += 1;
  if(hero?.onSell) hero.onSell(getCtx());
  render();
}
function sellFromBoard(idx){
  if(gameOver) return;
  if(!hero) return;
  if(idx<0 || idx>=board.length) return;
  board.splice(idx,1);
  gold += 1;
  if(hero?.onSell) hero.onSell(getCtx());
  render();
}

/* =============== 敵人（會隨回合增強） =============== */
function makeEnemy(){
  const enemyTier = Math.min(6, 1 + Math.floor((turn - 1) / 2));
  const count = Math.min(7, 2 + Math.floor((turn - 1) / 2));
  const base = 2 + enemyTier + Math.floor((turn - 1) / 3);

  const shieldRate = Math.min(0.55, 0.18 + turn * 0.02);
  const mechRate   = Math.min(0.70, 0.25 + turn * 0.02);
  const magRate    = Math.min(0.45, 0.10 + turn * 0.015);

  const candidates = pool.filter(m => (m.tier ?? 1) <= enemyTier);

  const pick = () => {
    const m = {...candidates[Math.floor(Math.random()*candidates.length)]};

    const bonus = Math.floor((turn - 1) / 4);
    m.atk += bonus;
    m.hp  += bonus;

    if(!m.shield && Math.random() < shieldRate) m.shield = true;
    if(!m.mech && Math.random() < mechRate) m.mech = true;
    if(!m.magnetic && Math.random() < magRate) m.magnetic = true;

    m.atk += Math.floor(enemyTier / 2);
    m.hp  += enemyTier;

    m.name = "敵·" + m.name;
    m.img = "";
    return m;
  };

  const arr = [];
  for(let i=0;i<count;i++){
    const m = pick();
    if(i % 2 === 0){ m.hp += Math.floor(base * 0.8); m.atk += Math.floor(base * 0.3); }
    else{ m.atk += Math.floor(base * 0.8); m.hp += Math.floor(base * 0.3); }
    m.atk = Math.max(1, m.atk);
    m.hp  = Math.max(1, m.hp);
    arr.push(m);
  }
  return arr.slice(0,7);
}

/* =============== 戰鬥（模擬） =============== */
function cloneMinion(m){ return {...m}; }
function spawnTo(arr, name){
  const base = pool.find(x => x.name === name);
  if(base && arr.length < 7) arr.push(cloneMinion(base));
}
function attackOnce(a,b, ctx){
  let bShieldBroken = false;
  let aShieldBroken = false;

  if(b.shield){ b.shield=false; bShieldBroken=true; } else { b.hp -= a.atk; }
  if(a.shield){ a.shield=false; aShieldBroken=true; } else { a.hp -= b.atk; }

  const diedA = a.hp <= 0;
  const diedB = b.hp <= 0;
  if(diedA && a.deathSpawnName) spawnTo(ctx.my, a.deathSpawnName);
  if(diedB && b.deathSpawnName) spawnTo(ctx.enemy, b.deathSpawnName);

  return { bShieldBroken, aShieldBroken, diedA, diedB };
}

function makeBattleCard(m, side){
  const d = document.createElement("div");
  d.className = `minion ${tierGlowClass(Math.max(1, m.tier || 1))}`;
  d.innerHTML = `
    <div class="tag tierTag">${side==="L" ? "你" : "敵"}</div>
    <img class="cardArt" src="${artUrl(m)}" alt="art">
    <div class="minionName">${m.name}</div>
    <div class="minionStat"><span class="atk">${m.atk}</span>/<span class="hp">${Math.max(0,m.hp)}</span></div>
  `;
  if(m.golden) d.innerHTML += `<div class="tag goldTag">⭐</div>`;
  else if(m.shield) d.innerHTML += `<div class="tag shieldTag">🛡</div>`;
  if(m.mech) d.innerHTML += `<div class="tag iconTag">⚙️</div>`;
  if(m.magnetic) d.innerHTML += `<div class="tag iconTag2">🧲</div>`;
  return d;
}

function renderBattleCards(leftArr, rightArr){
  const L = document.getElementById("battleLeft");
  const R = document.getElementById("battleRight");
  L.innerHTML = "";
  R.innerHTML = "";
  leftArr.slice(0,7).forEach(m => L.appendChild(makeBattleCard(m, "L")));
  rightArr.slice(0,7).forEach(m => R.appendChild(makeBattleCard(m, "R")));
}

function findFrontCardEl(side){
  const container = side==="L" ? document.getElementById("battleLeft") : document.getElementById("battleRight");
  return container.querySelector(".minion");
}
function updateFrontCardStats(el, minion){
  if(!el) return;
  const hpEl = el.querySelector(".hp");
  if(hpEl) hpEl.textContent = Math.max(0, minion.hp);
  if(minion.golden) return;
  const hasShield = !!minion.shield;
  const shieldEl = el.querySelector(".shieldTag");
  if(hasShield && !shieldEl){
    const s = document.createElement("div");
    s.className = "tag shieldTag";
    s.textContent = "🛡";
    el.appendChild(s);
  }
  if(!hasShield && shieldEl) shieldEl.remove();
}
function burstShield(el){
  if(!el) return;
  const burst = document.createElement("div");
  burst.className = "shieldBurst";
  burst.textContent = "🛡";
  el.appendChild(burst);
  setTimeout(()=> burst.remove(), 350);
}

async function runBattleAnimation(){
  const overlay = document.getElementById("battleOverlay");
  overlay.classList.add("show");

  const my = board.map(cloneMinion);
  const enemy = makeEnemy().map(cloneMinion);
  const ctx = { my, enemy };

  let round = 1;
  renderBattleCards(my, enemy);

  while(my.length && enemy.length){
    document.getElementById("battleRound").textContent = `Round ${round}`;
    await sleep(160);

    const a = my[0];
    const b = enemy[0];

    const leftEl = findFrontCardEl("L");
    const rightEl = findFrontCardEl("R");

    leftEl?.classList.add("lungeLeft");
    rightEl?.classList.add("lungeRight");
    await sleep(160);

    leftEl?.classList.add("hitFlash");
    rightEl?.classList.add("hitFlash");
    await sleep(110);
    leftEl?.classList.remove("hitFlash");
    rightEl?.classList.remove("hitFlash");

    const r = attackOnce(a,b, ctx);

    if(r.bShieldBroken) burstShield(rightEl);
    if(r.aShieldBroken) burstShield(leftEl);

    updateFrontCardStats(leftEl, a);
    updateFrontCardStats(rightEl, b);

    await sleep(200);

    if(r.diedA){
      leftEl?.classList.add("dead");
      await sleep(140);
      my.shift();
    }
    if(r.diedB){
      rightEl?.classList.add("dead");
      await sleep(140);
      enemy.shift();
    }

    renderBattleCards(my, enemy);
    round += 1;
    await sleep(110);
  }

  overlay.classList.remove("show");
  return { myLeft: my.length, enemyLeft: enemy.length };
}

/* =============== 回合結算 =============== */
function checkGameOver(){
  if(hpVal <= 0){
    hpVal = 0;
    gameOver = true;

    // ✅ 強制重開：短暫停留一下（讓戰鬥動畫/結果有時間收尾）
    setTimeout(()=>{
      restartGame(); // 會回到「選職業」並重新開始
    }, 700);
  }
}

function onTurnStart(){
  turnFlags = {}; // 每回合重置技能使用狀態
  if(hero?.onTurnStart) hero.onTurnStart(getCtx());
}
function onTurnEnd(){
  if(hero?.onTurnEnd) hero.onTurnEnd(getCtx());
}

async function endTurnBattle(){
  if(gameOver) return;
  if(!hero) return;

  onTurnEnd();
  const { myLeft, enemyLeft } = await runBattleAnimation();

  let outcome = "loss";
  if(myLeft === 0 && enemyLeft === 0) outcome = "tie";
  else if(myLeft > 0 && enemyLeft === 0) outcome = "win";

  let reward = 0, dmg = 0, title = "", pill = "", cls = "";

  if(outcome === "win"){
    winStreak += 1;
    reward = winReward();
    turn += 1;
    gold = startGoldForTurn() + reward;
    title="WIN"; pill=`獎金 +${reward}`; cls="winC";
  }else if(outcome === "tie"){
    winStreak = 0;
    turn += 1;
    gold = startGoldForTurn();
    title="TIE"; pill="平手不扣血"; cls="tieC";
  }else{
    dmg = enemyLeft + tavernTier;
    hpVal -= dmg;
    winStreak = 0;
    turn += 1;
    gold = startGoldForTurn();
    title="LOSE"; pill=`傷害 -${dmg}`; cls="loseC";
  }

  checkGameOver();

  // 下一回合開始
  onTurnStart();

  // 刷新酒館
  if(shop.length === 0) refreshShop(true, true);
  else refreshShop(true, false);

  render();
  showResultOverlay({ outcome, enemyLeft, reward, dmg, title, pill, cls });
}

/* =============== 結果 Overlay =============== */
function showResultOverlay({ outcome, enemyLeft, reward, dmg, title, pill, cls }){
  const overlay = document.getElementById("overlay");
  const big = document.getElementById("resultBig");
  const rp = document.getElementById("resultPill");
  const body = document.getElementById("resultBody");
  const go = document.getElementById("gameoverText");
  const btnRow = document.getElementById("resultBtnRow");

  big.textContent = title;
  big.className = `resultBig ${cls}`;
  rp.textContent = pill;
  rp.className = `pill ${cls}`;

  const enemyText = (outcome === "loss") ? `敵方剩餘 ${enemyLeft} 隻` : `敵方剩餘 0 隻`;

  const dmgLine = (outcome === "loss")
    ? `<div class="line"><div class="k">本回合傷害</div><div class="v ${cls}">-${dmg}</div></div>`
    : `<div class="line"><div class="k">本回合傷害</div><div class="v tieC">0</div></div>`;

  const rewardLine = (outcome === "win")
    ? `<div class="line"><div class="k">勝利獎金</div><div class="v winC">+${reward}</div></div>`
    : `<div class="line"><div class="k">勝利獎金</div><div class="v tieC">+0</div></div>`;

  body.innerHTML = `
    <div class="line"><div class="k">回合</div><div class="v">第 ${turn-1} 回合</div></div>
    <div class="line"><div class="k">結果</div><div class="v ${cls}">${title}</div></div>
    <div class="line"><div class="k">敵方</div><div class="v">${enemyText}</div></div>
    ${dmgLine}
    ${rewardLine}
    <div class="line"><div class="k">下回合起始金</div><div class="v">${coinHTML("coinIcon sm")} ${startGoldForTurn()}</div></div>
    <div class="line"><div class="k">英雄</div><div class="v">${hero?.name || "-"}</div></div>
  `;

  if(gameOver){
  go.innerHTML = `<span class="loseC" style="font-weight:1000;">💀 HP 歸零！強制重開中…</span>`;
  btnRow.innerHTML = `
    <button class="btn btnPrimary" disabled>🔁 重新開始</button>
  `;
}
else{
    go.textContent = "（點繼續或點背景關閉）";
    btnRow.innerHTML = `<button class="btn btnPrimary" onclick="closeOverlay()">繼續</button>`;
  }

  overlay.classList.add("show");
}
function closeOverlay(){ document.getElementById("overlay").classList.remove("show"); }

/* =============== Render =============== */
function renderEnemyPreview(){
  const enemy = makeEnemy();
  const wrap = document.getElementById("enemyPreview");
  wrap.innerHTML = "";
  enemy.slice(0,7).forEach(m=>{
    const d = document.createElement("div");
    d.className = `minion ${tierGlowClass(1)}`;
    d.innerHTML = `
      <div class="tag tierTag">敵</div>
      <img class="cardArt" src="${artUrl(m)}" alt="art">
      <div class="minionName">${m.name}</div>
      <div class="minionStat">${m.atk}/${m.hp}</div>
    `;
    if(m.shield) d.innerHTML += `<div class="tag shieldTag">🛡</div>`;
    if(m.mech) d.innerHTML += `<div class="tag iconTag">⚙️</div>`;
    if(m.magnetic) d.innerHTML += `<div class="tag iconTag2">🧲</div>`;
    wrap.appendChild(d);
  });
}

function render(){
  const noHeroYet = !hero;

  document.getElementById("heroName").textContent = hero?.name || "（尚未選職業）";
  document.getElementById("heroDesc").textContent = hero ? ("技能：" + hero.desc) : "請先選擇職業才開始";
  document.getElementById("heroNote").textContent = hero?.note ? ("提示：" + hero.note) : "";

  document.getElementById("hp").textContent = hpVal;
  document.getElementById("gold").textContent = gold;
  document.getElementById("tavern").textContent = tavernTier;
  document.getElementById("turn").textContent = turn;
  document.getElementById("streak").textContent = winStreak;

  const pct = Math.max(0, Math.min(1, hpVal / maxHP));
  document.getElementById("hpFill").style.width = `${pct*100}%`;

  const st = document.getElementById("statusText");
  st.textContent = gameOver ? "💀 Game Over" : (frozen ? "🧊 酒館已凍結" : "✨ 酒館可刷新");

  document.getElementById("upgradeCost").textContent = getUpgradeCost() ? getUpgradeCost() : "MAX";
  document.getElementById("upgradeBtn").disabled = (!canUpgrade()) || noHeroYet;
  document.getElementById("refreshBtn").disabled = gameOver || noHeroYet;
  document.getElementById("freezeBtn").disabled = gameOver || noHeroYet;
  document.getElementById("battleBtn").disabled = gameOver || noHeroYet;

  document.getElementById("freezeState").textContent = frozen ? "開" : "關";
  const fBtn = document.getElementById("freezeBtn");
  if(frozen) fBtn.classList.add("toggleOn"); else fBtn.classList.remove("toggleOn");

  renderEnemyPreview();

  // shop
  const s = document.getElementById("shop");
  s.innerHTML = "";
  shop.forEach((m,i)=>{
    const d = document.createElement("div");
    d.className = `minion ${tierGlowClass(m.tier)}`;
    const price = hero ? getBuyCost(m) : 999;
    d.innerHTML = `
      <div class="tag tierTag">T${m.tier}</div>
      <img class="cardArt" src="${artUrl(m)}" alt="art">
      <div class="minionName">${m.name}</div>
      <div class="minionStat">${m.atk}/${m.hp}</div>
      <div class="tag priceTag">${coinHTML()} ${price}</div>
    `;
    if(m.golden) d.innerHTML += `<div class="tag goldTag">⭐</div>`;
    else if(m.shield) d.innerHTML += `<div class="tag shieldTag">🛡</div>`;
    if(m.mech) d.innerHTML += `<div class="tag iconTag">⚙️</div>`;
    if(m.magnetic) d.innerHTML += `<div class="tag iconTag2">🧲</div>`;
    if(!gameOver && hero) d.onclick = ()=>buy(i);
    s.appendChild(d);
  });

  // bag
  const g = document.getElementById("bag");
  g.innerHTML = "";
  bag.forEach((m,idx)=>{
    const d = document.createElement("div");
    d.className = `minion ${tierGlowClass(m.tier ?? 1)}`;
    d.innerHTML = `
      <div class="tag tierTag">T${m.tier ?? 1}</div>
      <img class="cardArt" src="${artUrl(m)}" alt="art">
      <div class="minionName">${m.name}</div>
      <div class="minionStat">${m.atk}/${m.hp}</div>
      <div class="tag actionTag">點上場（${board.length}/7）</div>
    `;
    if(m.golden) d.innerHTML += `<div class="tag goldTag">⭐</div>`;
    else if(m.shield) d.innerHTML += `<div class="tag shieldTag">🛡</div>`;
    if(m.mech) d.innerHTML += `<div class="tag iconTag">⚙️</div>`;
    if(m.magnetic) d.innerHTML += `<div class="tag iconTag2">🧲</div>`;

    if(hero){
      d.onclick = ()=>bagToBoard(idx);
      d.oncontextmenu = (e)=>{ e.preventDefault(); sellFromBag(idx); };
    }
    g.appendChild(d);
  });

  // board
  const b = document.getElementById("board");
  b.innerHTML = "";
  board.forEach((m,idx)=>{
    const d = document.createElement("div");
    d.className = `minion ${tierGlowClass(m.tier ?? 1)}`;
    d.innerHTML = `
      <div class="tag tierTag">T${m.tier ?? 1}</div>
      <img class="cardArt" src="${artUrl(m)}" alt="art">
      <div class="minionName">${m.name}</div>
      <div class="minionStat">${m.atk}/${m.hp}</div>
      <div class="tag actionTag">點下場回背包</div>
    `;
    if(m.golden) d.innerHTML += `<div class="tag goldTag">⭐</div>`;
    else if(m.shield) d.innerHTML += `<div class="tag shieldTag">🛡</div>`;
    if(m.mech) d.innerHTML += `<div class="tag iconTag">⚙️</div>`;
    if(m.magnetic) d.innerHTML += `<div class="tag iconTag2">🧲</div>`;

    if(hero){
      d.onclick = ()=>boardToBag(idx);
      d.oncontextmenu = (e)=>{ e.preventDefault(); sellFromBoard(idx); };
    }
    b.appendChild(d);
  });
}

/* =============== 正式開始（選完職業後） =============== */
function startGameAfterHeroPick(){
  turnFlags = {};
  gold = startGoldForTurn();
  onTurnStart();
  refreshShop(true, true);
  render();
}

/* =============== 開場 =============== */
function initGame(){
  // 初始化 UI 選單
  buildHeroSelect();
  buildHeroPickSelect();

  // reset 狀態
  hpVal = 30;
  gold = 0;
  turn = 1;
  tavernTier = 1;
  winStreak = 0;
  frozen = false;
  gameOver = false;
  shop = [];
  bag = [];
  board = [];
  turnFlags = {};

  // 主面板先不鎖（等選完才鎖）
  const mainSel = document.getElementById("heroSelect");
  const applyBtn = document.getElementById("applyHeroBtn");
  if(mainSel){ mainSel.disabled = false; mainSel.value = HEROES[0].id; }
  if(applyBtn){ applyBtn.disabled = false; }

  // 顯示「選職業」遮罩
  document.getElementById("heroPickOverlay").classList.add("show");
  render();
}

initGame();
