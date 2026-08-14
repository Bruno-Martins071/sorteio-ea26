/* ---------- Banco de jogadores embutido (curado, aproximado FC26) ---------- */
const BUILT_IN_PLAYERS = [
  // GOL
  {name:"Gianluigi Donnarumma", pos:"GOL", ovr:89, club:"Man City"},
  {name:"Thibaut Courtois", pos:"GOL", ovr:89, club:"Real Madrid"},
  {name:"Alisson", pos:"GOL", ovr:89, club:"Liverpool"},
  {name:"Jan Oblak", pos:"GOL", ovr:88, club:"Atlético Madrid"},
  {name:"Yann Sommer", pos:"GOL", ovr:87, club:"Bayern"},
  {name:"David Raya", pos:"GOL", ovr:87, club:"Arsenal"},
  {name:"Mike Maignan", pos:"GOL", ovr:87, club:"Milan"},
  {name:"Ederson", pos:"GOL", ovr:85, club:"Man City"},
  {name:"Marc-André ter Stegen", pos:"GOL", ovr:85, club:"Barcelona"},
  {name:"Emiliano Martínez", pos:"GOL", ovr:85, club:"Aston Villa"},
  {name:"Gregor Kobel", pos:"GOL", ovr:84, club:"Dortmund"},
  {name:"Diogo Costa", pos:"GOL", ovr:84, club:"Porto"},
  {name:"Bernd Leno", pos:"GOL", ovr:83, club:"Fulham"},
  {name:"Wojciech Szczęsny", pos:"GOL", ovr:83, club:"Barcelona"},
  {name:"Unai Simón", pos:"GOL", ovr:83, club:"Athletic Bilbao"},

  // ZAG
  {name:"Virgil van Dijk", pos:"ZAG", ovr:90, club:"Liverpool"},
  {name:"Gabriel Magalhães", pos:"ZAG", ovr:88, club:"Arsenal"},
  {name:"Jules Koundé", pos:"ZAG", ovr:87, club:"Barcelona"},
  {name:"Alessandro Bastoni", pos:"ZAG", ovr:87, club:"Inter"},
  {name:"William Saliba", pos:"ZAG", ovr:87, club:"Arsenal"},
  {name:"Jonathan Tah", pos:"ZAG", ovr:87, club:"Bayern"},
  {name:"Rúben Dias", pos:"ZAG", ovr:86, club:"Man City"},
  {name:"Ibrahima Konaté", pos:"ZAG", ovr:86, club:"Liverpool"},
  {name:"Willian Pacho", pos:"ZAG", ovr:86, club:"PSG"},
  {name:"Éder Militão", pos:"ZAG", ovr:85, club:"Real Madrid"},
  {name:"Antonio Rüdiger", pos:"ZAG", ovr:85, club:"Real Madrid"},
  {name:"Kim Min-jae", pos:"ZAG", ovr:85, club:"Bayern"},
  {name:"Cristian Romero", pos:"ZAG", ovr:85, club:"Tottenham"},
  {name:"Josko Gvardiol", pos:"ZAG", ovr:85, club:"Man City"},
  {name:"Marquinhos", pos:"ZAG", ovr:85, club:"PSG"},
  {name:"Lisandro Martínez", pos:"ZAG", ovr:84, club:"Man Utd"},
  {name:"Dayot Upamecano", pos:"ZAG", ovr:84, club:"Bayern"},
  {name:"Milan Škriniar", pos:"ZAG", ovr:83, club:"PSG"},
  {name:"Piero Hincapié", pos:"ZAG", ovr:83, club:"Leverkusen"},
  {name:"Presnel Kimpembe", pos:"ZAG", ovr:81, club:"PSG"},

  // LAT
  {name:"Achraf Hakimi", pos:"LAT", ovr:89, club:"PSG"},
  {name:"Trent Alexander-Arnold", pos:"LAT", ovr:87, club:"Real Madrid"},
  {name:"Nuno Mendes", pos:"LAT", ovr:86, club:"PSG"},
  {name:"Theo Hernández", pos:"LAT", ovr:85, club:"Al-Hilal"},
  {name:"Alphonso Davies", pos:"LAT", ovr:85, club:"Bayern"},
  {name:"Federico Dimarco", pos:"LAT", ovr:85, club:"Inter"},
  {name:"João Cancelo", pos:"LAT", ovr:84, club:"Al-Hilal"},
  {name:"Reece James", pos:"LAT", ovr:84, club:"Chelsea"},
  {name:"Denzel Dumfries", pos:"LAT", ovr:84, club:"Inter"},
  {name:"Pedro Porro", pos:"LAT", ovr:83, club:"Tottenham"},
  {name:"Andrew Robertson", pos:"LAT", ovr:83, club:"Liverpool"},
  {name:"Benjamin Pavard", pos:"LAT", ovr:82, club:"Inter"},
  {name:"Daniel Carvajal", pos:"LAT", ovr:82, club:"Real Madrid"},
  {name:"Rafael Guerreiro", pos:"LAT", ovr:82, club:"PSG"},
  {name:"Diogo Dalot", pos:"LAT", ovr:82, club:"Man Utd"},
  {name:"Kyle Walker", pos:"LAT", ovr:82, club:"Burnley"},
  {name:"Ben Chilwell", pos:"LAT", ovr:81, club:"Chelsea"},
  {name:"Marcos Acuña", pos:"LAT", ovr:81, club:"River Plate"},
  {name:"Ricardo Pereira", pos:"LAT", ovr:80, club:"Porto"},
  {name:"Vladimír Coufal", pos:"LAT", ovr:79, club:"West Ham"},

  // MEI
  {name:"Jude Bellingham", pos:"MEI", ovr:90, club:"Real Madrid"},
  {name:"Rodri", pos:"MEI", ovr:90, club:"Man City"},
  {name:"Pedri", pos:"MEI", ovr:89, club:"Barcelona"},
  {name:"Vitinha", pos:"MEI", ovr:89, club:"PSG"},
  {name:"Federico Valverde", pos:"MEI", ovr:89, club:"Real Madrid"},
  {name:"Florian Wirtz", pos:"MEI", ovr:89, club:"Liverpool"},
  {name:"Joshua Kimmich", pos:"MEI", ovr:89, club:"Bayern"},
  {name:"Jamal Musiala", pos:"MEI", ovr:87, club:"Bayern"},
  {name:"Bruno Fernandes", pos:"MEI", ovr:87, club:"Man Utd"},
  {name:"Kevin De Bruyne", pos:"MEI", ovr:87, club:"Napoli"},
  {name:"Martin Ødegaard", pos:"MEI", ovr:87, club:"Arsenal"},
  {name:"Declan Rice", pos:"MEI", ovr:87, club:"Arsenal"},
  {name:"Moisés Caicedo", pos:"MEI", ovr:87, club:"Chelsea"},
  {name:"Sandro Tonali", pos:"MEI", ovr:86, club:"Newcastle"},
  {name:"Bruno Guimarães", pos:"MEI", ovr:86, club:"Newcastle"},
  {name:"Frenkie de Jong", pos:"MEI", ovr:85, club:"Barcelona"},
  {name:"Enzo Fernández", pos:"MEI", ovr:85, club:"Chelsea"},
  {name:"Aurélien Tchouaméni", pos:"MEI", ovr:85, club:"Real Madrid"},
  {name:"Alexis Mac Allister", pos:"MEI", ovr:85, club:"Liverpool"},
  {name:"Warren Zaïre-Emery", pos:"MEI", ovr:84, club:"PSG"},
  {name:"Eduardo Camavinga", pos:"MEI", ovr:84, club:"Real Madrid"},
  {name:"Fabián Ruiz", pos:"MEI", ovr:84, club:"PSG"},
  {name:"Marco Verratti", pos:"MEI", ovr:83, club:"Al-Arabi"},
  {name:"Rúben Neves", pos:"MEI", ovr:84, club:"Al-Hilal"},
  {name:"Manuel Ugarte", pos:"MEI", ovr:82, club:"Man Utd"},

  // ATA
  {name:"Kylian Mbappé", pos:"ATA", ovr:91, club:"Real Madrid"},
  {name:"Mohamed Salah", pos:"ATA", ovr:91, club:"Liverpool"},
  {name:"Erling Haaland", pos:"ATA", ovr:90, club:"Man City"},
  {name:"Vini Jr.", pos:"ATA", ovr:89, club:"Real Madrid"},
  {name:"Lamine Yamal", pos:"ATA", ovr:89, club:"Barcelona"},
  {name:"Raphinha", pos:"ATA", ovr:89, club:"Barcelona"},
  {name:"Robert Lewandowski", pos:"ATA", ovr:88, club:"Barcelona"},
  {name:"Bukayo Saka", pos:"ATA", ovr:88, club:"Arsenal"},
  {name:"Lautaro Martínez", pos:"ATA", ovr:88, club:"Inter"},
  {name:"Alexander Isak", pos:"ATA", ovr:88, club:"Liverpool"},
  {name:"Harry Kane", pos:"ATA", ovr:88, club:"Bayern"},
  {name:"Khvicha Kvaratskhelia", pos:"ATA", ovr:87, club:"PSG"},
  {name:"Victor Osimhen", pos:"ATA", ovr:87, club:"Galatasaray"},
  {name:"Ousmane Dembélé", pos:"ATA", ovr:87, club:"PSG"},
  {name:"Julian Álvarez", pos:"ATA", ovr:86, club:"Atlético Madrid"},
  {name:"Paulo Dybala", pos:"ATA", ovr:86, club:"Roma"},
  {name:"Cole Palmer", pos:"ATA", ovr:86, club:"Chelsea"},
  {name:"Phil Foden", pos:"ATA", ovr:85, club:"Man City"},
  {name:"Rodrygo", pos:"ATA", ovr:85, club:"Real Madrid"},
  {name:"Heung-min Son", pos:"ATA", ovr:85, club:"Tottenham"},
  {name:"Bryan Mbeumo", pos:"ATA", ovr:85, club:"Man Utd"},
  {name:"Désiré Doué", pos:"ATA", ovr:85, club:"PSG"},
  {name:"Nico Williams", pos:"ATA", ovr:84, club:"Athletic Bilbao"},
  {name:"Christian Pulisic", pos:"ATA", ovr:84, club:"Milan"},
  {name:"Randal Kolo Muani", pos:"ATA", ovr:82, club:"Juventus"},
];

const POS_LABELS = {GOL:"Gol", ZAG:"Zagueiros", LAT:"Laterais", MEI:"Meias", ATA:"Atacantes", RES:"Reservas"};
const POS_ORDER = ["GOL","ZAG","LAT","MEI","ATA"];

/* ---------- Estado / persistência local ---------- */
let state = {
  participants: [],
  customPlayers: [],
  results: null
};

function loadState(){
  try{
    const saved = localStorage.getItem('sorteioFC26State');
    if(saved){
      const parsed = JSON.parse(saved);
      state.participants = parsed.participants || [];
      state.customPlayers = parsed.customPlayers || [];
    }
    const savedFormation = localStorage.getItem('sorteioFC26Formation');
    if(savedFormation){
      const f = JSON.parse(savedFormation);
      Object.keys(f).forEach(k=>{
        const el = document.getElementById('f-'+k);
        if(el) el.value = f[k];
      });
    }
  }catch(e){ console.warn('Não foi possível carregar dados salvos:', e); }
}

function saveState(){
  try{
    localStorage.setItem('sorteioFC26State', JSON.stringify({
      participants: state.participants,
      customPlayers: state.customPlayers
    }));
  }catch(e){ console.warn('Não foi possível salvar:', e); }
}

function saveFormation(){
  try{
    const f = {};
    [...POS_ORDER,'RES'].forEach(k=> f[k] = document.getElementById('f-'+k).value);
    localStorage.setItem('sorteioFC26Formation', JSON.stringify(f));
  }catch(e){}
}

function getAllPlayers(){
  return [...BUILT_IN_PLAYERS, ...state.customPlayers];
}

/* ---------- Participantes ---------- */
const participantInput = document.getElementById('participantInput');
const addParticipantBtn = document.getElementById('addParticipantBtn');
const participantChips = document.getElementById('participantChips');
const participantHint = document.getElementById('participantHint');

function renderParticipants(){
  participantChips.innerHTML = '';
  state.participants.forEach((name, i)=>{
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `<span>${escapeHtml(name)}</span><span class="x" data-i="${i}">✕</span>`;
    participantChips.appendChild(chip);
  });
  participantChips.querySelectorAll('.x').forEach(x=>{
    x.addEventListener('click', ()=>{
      state.participants.splice(parseInt(x.dataset.i),1);
      saveState();
      renderParticipants();
      renderOrder();
    });
  });
  addParticipantBtn.disabled = state.participants.length >= 5;
  participantInput.disabled = state.participants.length >= 5;
  participantHint.textContent = state.participants.length >= 5
    ? 'Limite de 5 participantes atingido.'
    : state.participants.length < 2
      ? 'Adicione pelo menos 2 participantes pra sortear.'
      : '';
  updateGrandTotal();
}

function addParticipant(){
  const name = participantInput.value.trim();
  if(!name || state.participants.length >= 5) return;
  if(state.participants.includes(name)){ participantInput.value=''; return; }
  state.participants.push(name);
  participantInput.value = '';
  saveState();
  renderParticipants();
  renderOrder();
}

addParticipantBtn.addEventListener('click', addParticipant);
participantInput.addEventListener('keydown', e=>{ if(e.key==='Enter') addParticipant(); });

function escapeHtml(s){
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

/* ---------- Formação ---------- */
function getFormation(){
  const f = {};
  POS_ORDER.forEach(p=> f[p] = parseInt(document.getElementById('f-'+p).value)||0);
  f.RES = parseInt(document.getElementById('f-RES').value)||0;
  return f;
}

function perTeamCount(f){
  return POS_ORDER.reduce((s,p)=>s+f[p],0) + f.RES;
}

function updatePoolCounts(){
  const all = getAllPlayers();
  POS_ORDER.forEach(p=>{
    const count = all.filter(pl=>pl.pos===p).length;
    document.getElementById('pc-'+p).textContent = count + ' no banco';
  });
}

function updateGrandTotal(){
  const f = getFormation();
  const per = perTeamCount(f);
  document.getElementById('perTeamTotal').textContent = per;
  const n = state.participants.length;
  document.getElementById('grandTotal').textContent = n ? (per*n)+' jogadores' : '--';
}

[...POS_ORDER,'RES'].forEach(p=>{
  document.getElementById('f-'+p).addEventListener('input', ()=>{ updateGrandTotal(); saveFormation(); });
});

/* ---------- Banco de jogadores (custom) ---------- */
function renderPoolCounts(){
  const all = getAllPlayers();
  const el = document.getElementById('poolCounts');
  el.innerHTML = POS_ORDER.map(p=>{
    const c = all.filter(pl=>pl.pos===p).length;
    return `<div class="pool-tag">${POS_LABELS[p]}: <b>${c}</b></div>`;
  }).join('');
  updatePoolCounts();
}

function renderCustomPlayerList(){
  const el = document.getElementById('customPlayerList');
  if(state.customPlayers.length===0){ el.innerHTML=''; return; }
  el.innerHTML = state.customPlayers.map((p,i)=>`
    <div class="custom-player-item">
      <span>${escapeHtml(p.name)} <span style="color:var(--muted);">(${p.pos} · ${p.ovr}${p.club? ' · '+escapeHtml(p.club):''})</span></span>
      <span class="x" data-i="${i}" style="cursor:pointer;color:var(--muted);">✕ remover</span>
    </div>`).join('');
  el.querySelectorAll('.x').forEach(x=>{
    x.addEventListener('click', ()=>{
      state.customPlayers.splice(parseInt(x.dataset.i),1);
      saveState();
      renderCustomPlayerList();
      renderPoolCounts();
    });
  });
}


/* ---------- Regras: jogadores que não podem ficar juntos ---------- */
let forbiddenGroups = [];

function parseForbiddenGroups(text){
  return text.split('\n').map(line=>{
    return line.split(',').map(s=>s.trim()).filter(Boolean).map(s=>s.toLowerCase());
  }).filter(g=>g.length>0);
}

function loadForbiddenGroups(){
  try{
    const txt = localStorage.getItem('sorteioFC26Forbidden') || '';
    forbiddenGroups = parseForbiddenGroups(txt);
    const el = document.getElementById('forbiddenGroupsInput');
    if(el) el.value = txt;
  }catch(e){ console.warn('Erro ao carregar regras proibidas', e); }
}

function saveForbiddenGroups(){
  try{
    const el = document.getElementById('forbiddenGroupsInput');
    const txt = el ? el.value : '';
    localStorage.setItem('sorteioFC26Forbidden', txt);
    forbiddenGroups = parseForbiddenGroups(txt);
  }catch(e){ console.warn('Erro ao salvar regras proibidas', e); }
}

function violatesForbidden(teamPlayers, candidate){
  if(!forbiddenGroups || forbiddenGroups.length===0) return false;
  const teamNames = new Set(teamPlayers.map(p=>p.name.toLowerCase()));
  const can = candidate.name.toLowerCase();
  for(const g of forbiddenGroups){
    if(g.includes(can)){
      for(const member of g){ if(teamNames.has(member)) return true; }
    }
  }
  return false;
}

document.addEventListener('click', (e)=>{
  if(e.target && e.target.id === 'saveForbiddenBtn'){
    saveForbiddenGroups();
    const s = document.getElementById('drawStatus');
    if(s) { s.textContent = 'Regras salvas.'; setTimeout(()=> s.textContent = '', 1200); }
  }
  if(e.target && e.target.id === 'exampleForbiddenBtn'){
    const el = document.getElementById('forbiddenGroupsInput');
    if(el){ el.value = 'Kylian Mbappé, Vini Jr., Lamine Yamal'; }
  }
});

document.getElementById('addPlayerBtn').addEventListener('click', ()=>{
  const name = document.getElementById('newPlayerName').value.trim();
  const pos = document.getElementById('newPlayerPos').value;
  const ovr = parseInt(document.getElementById('newPlayerOvr').value) || 75;
  const club = document.getElementById('newPlayerClub').value.trim();
  if(!name) return;
  state.customPlayers.push({name, pos, ovr, club});
  document.getElementById('newPlayerName').value = '';
  document.getElementById('newPlayerClub').value = '';
  saveState();
  renderCustomPlayerList();
  renderPoolCounts();
});

/* ---------- Ordem (par ou ímpar) ---------- */
let order = [];

function shuffleArray(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

// Ordena por overall decrescente. Em empate de overall, a ordem entre eles
// é embaralhada (pra não ser sempre o mesmo "desempate" alfabético).
function sortByOverallDesc(players){
  const withJitter = players.map(p=>({p, tie: Math.random()}));
  withJitter.sort((a,b)=> b.p.ovr - a.p.ovr || a.tie - b.tie);
  return withJitter.map(x=>x.p);
}

function renderOrder(){
  const el = document.getElementById('orderDisplay');
  if(order.length===0){ el.innerHTML=''; return; }
  el.innerHTML = order.map((name,i)=>`<div class="order-pill"><span class="n">${i+1}º</span> ${escapeHtml(name)}</div>`).join('');
}

document.getElementById('rollOrderBtn').addEventListener('click', ()=>{
  if(state.participants.length < 2){
    order = [];
    renderOrder();
    return;
  }
  order = shuffleArray(state.participants);
  renderOrder();
});

/* ---------- Sorteio (draft em cobrinha, priorizando overall) ----------
   Regra: dentro de cada posição, os jogadores ficam ordenados do maior
   pro menor overall. Quem estiver na vez (seguindo a ordem do par ou
   ímpar, em formato cobrinha 1-2-3 / 3-2-1...) sempre leva o melhor
   jogador disponível daquela posição. Isso garante que os cracks sejam
   aproveitados e, ao mesmo tempo, ninguém escolhe duas vezes seguidas
   sem o time adversário responder.
------------------------------------------------------------------------ */
document.getElementById('drawBtn').addEventListener('click', ()=>{
  const status = document.getElementById('drawStatus');
  status.className='';
  if(state.participants.length < 2){
    status.textContent = 'Adicione pelo menos 2 participantes.';
    status.className = 'error';
    return;
  }
  const draftOrder = order.length === state.participants.length ? order : shuffleArray(state.participants);
  order = draftOrder;
  renderOrder();

  const f = getFormation();
  const all = getAllPlayers();
  const n = draftOrder.length;

  // checar disponibilidade por posição
  for(const p of POS_ORDER){
    const need = f[p]*n;
    const have = all.filter(pl=>pl.pos===p).length;
    if(need > have){
      status.textContent = `Faltam jogadores no banco: precisa de ${need} de ${POS_LABELS[p]}, só tem ${have}. Adicione mais no banco de jogadores ou reduza a formação.`;
      status.className = 'error';
      return;
    }
  }
  const totalStarters = POS_ORDER.reduce((s,p)=>s+f[p]*n,0);
  const remainingAfterStarters = all.length - totalStarters;
  if(f.RES*n > remainingAfterStarters){
    status.textContent = `Não sobram jogadores suficientes pros reservas (precisa de ${f.RES*n}, sobram ${remainingAfterStarters}). Reduza os reservas ou adicione mais jogadores.`;
    status.className = 'error';
    return;
  }

  // montar squads — tentativas para respeitar regras proibidas (se houver)
  function tryAllocate(maxAttempts = 2000){
    const key = p => p.name+'|'+p.pos+'|'+p.ovr;
    for(let attempt=0; attempt<maxAttempts; attempt++){
      const squadsTry = {};
      draftOrder.forEach(name=> squadsTry[name] = {GOL:[],ZAG:[],LAT:[],MEI:[],ATA:[],RES:[]});
      const usedTry = new Set();
      let failed = false;

      const snakeOrder = (round) => round % 2 === 0 ? draftOrder : [...draftOrder].reverse();

      for(const pos of POS_ORDER){
        const rounds = f[pos];
        if(rounds===0) continue;
        const availableForPos = sortByOverallDesc(all.filter(pl=> pl.pos===pos));
        for(let r=0; r<rounds; r++){
          const seq = snakeOrder(r);
          for(const name of seq){
            let chosen = null;
            for(const player of availableForPos){
              if(usedTry.has(key(player))) continue;
              if(violatesForbidden(squadsTry[name][pos].concat(...Object.values(squadsTry[name]).flat()), player)) continue;
              chosen = player; break;
            }
            if(!chosen){ failed = true; break; }
            usedTry.add(key(chosen));
            squadsTry[name][pos].push(chosen);
          }
          if(failed) break;
        }
        if(failed) break;
      }
      if(failed) continue;

      // reservas
      const leftover = sortByOverallDesc(all.filter(pl=> !usedTry.has(key(pl))));
      for(let r=0; r<f.RES; r++){
        const seq = snakeOrder(r);
        for(const name of seq){
          let chosen = null;
          for(const player of leftover){
            if(usedTry.has(key(player))) continue;
            if(violatesForbidden([].concat(...Object.values(squadsTry[name])), player)) continue;
            chosen = player; break;
          }
          if(!chosen){ failed = true; break; }
          usedTry.add(key(chosen));
          squadsTry[name].RES.push(chosen);
        }
        if(failed) break;
      }
      if(failed) continue;

      return squadsTry;
    }
    return null;
  }

  const finalSquads = tryAllocate(2000);
  if(!finalSquads){
    status.textContent = 'Não foi possível montar times respeitando as regras. Tente ajustar a formação, banco ou as regras.';
    status.className = 'error';
    return;
  }

  state.results = { order: draftOrder, squads: finalSquads, formation: f };
  status.textContent = 'Sorteio concluído!';
  status.className = '';
  renderResults();
  document.getElementById('resetResultsBtn').style.display = 'inline-block';
});

document.getElementById('resetResultsBtn').addEventListener('click', ()=>{
  state.results = null;
  document.getElementById('resultsSection').style.display = 'none';
  document.getElementById('resetResultsBtn').style.display = 'none';
  document.getElementById('drawStatus').textContent = '';
});

function renderResults(){
  const grid = document.getElementById('resultsGrid');
  const { order: ord, squads } = state.results;
  grid.innerHTML = ord.map((name, i)=>{
    const sq = squads[name];
    const allPlayers = [...sq.GOL, ...sq.ZAG, ...sq.LAT, ...sq.MEI, ...sq.ATA, ...sq.RES];
    const avg = allPlayers.length ? Math.round(allPlayers.reduce((s,p)=>s+p.ovr,0)/allPlayers.length) : 0;
    const groups = [...POS_ORDER, 'RES'].map(pos=>{
      if(sq[pos].length===0) return '';
      return `
        <div class="pos-group">
          <div class="pg-title">${POS_LABELS[pos]}</div>
          ${sq[pos].map(p=>`
            <div class="player-row">
              <span>
                <span class="pname">${escapeHtml(p.name)}</span>
                ${p.club ? `<span class="pclub">${escapeHtml(p.club)}</span>` : ''}
              </span>
              <span class="povr">${p.ovr}</span>
            </div>`).join('')}
        </div>`;
    }).join('');
    return `
      <div class="team-card">
        <div class="head">
          <span class="name">${escapeHtml(name)}</span>
          <span class="pick-order">${i+1}ª escolha</span>
        </div>
        ${groups}
        <div class="avg-overall">
          <span>Overall médio</span>
          <b>${avg}</b>
        </div>
      </div>`;
  }).join('');
  document.getElementById('resultsSection').style.display = 'block';
}

/* ---------- Init ---------- */
loadState();
loadForbiddenGroups();
renderParticipants();
renderOrder();
renderPoolCounts();
renderCustomPlayerList();
updateGrandTotal();