const $ = s => document.querySelector(s);
const state = { q:"", tag:null, sort:"new", likes: loadLikes() };

function loadLikes(){ try{ return JSON.parse(localStorage.getItem("likes-v1")||"{}"); }catch(e){ return {}; } }
function saveLikes(){ localStorage.setItem("likes-v1", JSON.stringify(state.likes)); }
function like(id){ state.likes[id]=(state.likes[id]||0)+1; saveLikes(); render(); }

const uniqTags = Array.from(new Set(GAMES.flatMap(g=>g.tags))).sort();

function renderTags(){
  const a = $("#tagArea"); a.innerHTML = "";
  const mk = (label, tag=null) => {
    const el = document.createElement("div");
    el.className = "chip"+(state.tag===tag?" active":"");
    el.textContent = label;
    el.onclick = ()=>{ state.tag = (state.tag===tag? null : tag); render(); };
    return el;
  };
  a.appendChild(mk("すべて", null));
  uniqTags.forEach(t => a.appendChild(mk("#"+t, t)));
}

function render(){
  const q = state.q.trim().toLowerCase();
  let list = GAMES.filter(g=>{
    const hitQ = !q || [g.title,g.desc,(g.tags||[]).join(" ")].join(" ").toLowerCase().includes(q);
    const hitT = !state.tag || g.tags.includes(state.tag);
    return hitQ && hitT;
  });

  if (state.sort==="name") list.sort((a,b)=>a.title.localeCompare(b.title,"ja"));
  else if (state.sort==="pop") list.sort((a,b)=>(state.likes[b.id]||0)-(state.likes[a.id]||0));
  else list.sort((a,b)=> new Date(b.addedAt)-new Date(a.addedAt)); // new

  const grid = $("#list"); grid.innerHTML="";
  list.forEach(g=>{
    const card = document.createElement("div"); card.className="card";
    card.innerHTML = `
      <div class="thumb">${g.cover||"🎮"}</div>
      <div class="pad">
        <div class="title">${g.title}</div>
        <div class="desc">${g.desc}</div>
        <div class="row">
          <div class="tag">#${g.tags.join(" #")}</div>
          <div>
            <a class="btn play" href="${g.url}" target="_blank" rel="noopener">あそぶ</a>
            <button class="btn ghost" data-like="${g.id}">★ ${state.likes[g.id]||0}</button>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  grid.querySelectorAll("button[data-like]").forEach(b=> b.onclick = ()=>like(b.dataset.like));
}

function init(){
  $("#q").addEventListener("input", e=>{ state.q=e.target.value; render(); });
  $("#sort").addEventListener("change", e=>{ state.sort=e.target.value; render(); });
  $("#year").textContent = new Date().getFullYear();
  renderTags(); render();
}
init();
