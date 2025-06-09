// --- Ingredientes padrão (20 exemplos, valores fictícios didáticos) ---
const INGREDIENTES_PADRAO = [
  {nome:'Feno de Tifton', tipo:'Volumoso', custo:1.2, ms:87, pb:10, ndt:55, ca:0.45, p:0.25, pdr:70},
  {nome:'Feno de Coast-cross', tipo:'Volumoso', custo:1.1, ms:88, pb:8, ndt:52, ca:0.4, p:0.22, pdr:68},
  {nome:'Silagem de Milho', tipo:'Volumoso', custo:0.7, ms:34, pb:7, ndt:62, ca:0.25, p:0.22, pdr:66},
  {nome:'Silagem de Sorgo', tipo:'Volumoso', custo:0.68, ms:32, pb:6.5, ndt:58, ca:0.22, p:0.19, pdr:65},
  {nome:'Cana-de-açúcar', tipo:'Volumoso', custo:0.6, ms:30, pb:3, ndt:60, ca:0.15, p:0.09, pdr:55},
  {nome:'Casca de soja', tipo:'Volumoso', custo:1.7, ms:90, pb:12, ndt:74, ca:0.6, p:0.22, pdr:60},
  {nome:'Palha de arroz', tipo:'Volumoso', custo:0.8, ms:89, pb:4.5, ndt:40, ca:0.3, p:0.13, pdr:55},
  {nome:'Polpa cítrica', tipo:'Volumoso', custo:1.2, ms:88, pb:7, ndt:78, ca:1.1, p:0.12, pdr:50},
  {nome:'Capim Elefante', tipo:'Volumoso', custo:0.5, ms:22, pb:8, ndt:52, ca:0.33, p:0.16, pdr:65},
  {nome:'Alfafa', tipo:'Volumoso', custo:2.0, ms:87, pb:18, ndt:58, ca:1.5, p:0.3, pdr:75},
  {nome:'Milho moído', tipo:'Concentrado', custo:1.6, ms:88, pb:8.5, ndt:89, ca:0.03, p:0.32, pdr:55},
  {nome:'Farelo de soja', tipo:'Concentrado', custo:2.7, ms:89, pb:46, ndt:82, ca:0.29, p:0.65, pdr:68},
  {nome:'Farelo de algodão', tipo:'Concentrado', custo:2.5, ms:90, pb:28, ndt:77, ca:0.17, p:1.13, pdr:68},
  {nome:'Farelo de trigo', tipo:'Concentrado', custo:2.0, ms:89, pb:16, ndt:75, ca:0.15, p:1.17, pdr:65},
  {nome:'Farelo de arroz', tipo:'Concentrado', custo:1.9, ms:90, pb:13, ndt:73, ca:0.09, p:1.23, pdr:62},
  {nome:'Casca de algodão', tipo:'Concentrado', custo:1.3, ms:89, pb:12, ndt:45, ca:0.12, p:0.18, pdr:60},
  {nome:'Ureia pecuária', tipo:'Concentrado', custo:4.5, ms:100, pb:281, ndt:0, ca:0, p:0, pdr:100},
  {nome:'Torta de girassol', tipo:'Concentrado', custo:2.7, ms:90, pb:28, ndt:76, ca:0.38, p:1.2, pdr:65},
  {nome:'Grão de sorgo', tipo:'Concentrado', custo:1.5, ms:89, pb:10, ndt:85, ca:0.07, p:0.34, pdr:60},
  {nome:'Mineral Ovinos', tipo:'Concentrado', custo:4.0, ms:100, pb:0, ndt:0, ca:21, p:6, pdr:0},

   // Tabela 28 - Alimentos para ovinos (com PDR real ou estimado)

{nome:'Arroz farelo desengordurado', tipo:'Concentrado', custo:1.2, ms:88.2, pb:16.8, ndt:24.9, ca:0.09, p:1.8, pdr:50}, // PDR estimado
{nome:'Arroz farelo desfinitizado', tipo:'Concentrado', custo:1.2, ms:90.8, pb:18.0, ndt:0, ca:0.31, p:2.04, pdr:50}, // PDR estimado
{nome:'Arroz farelo integral', tipo:'Concentrado', custo:1.2, ms:88.9, pb:13.4, ndt:87.5, ca:0.11, p:1.73, pdr:50}, // PDR estimado
{nome:'Milho grão/fubá', tipo:'Concentrado', custo:1.6, ms:88, pb:9, ndt:87.7, ca:0.03, p:0.26, pdr:55}, // PDR estimado
{nome:'Farelo de soja', tipo:'Concentrado', custo:2.0, ms:87, pb:45, ndt:73, ca:0.3, p:0.61, pdr:78.5}, // PDR real
{nome:'Farelo de algodão 38 PB', tipo:'Concentrado', custo:1.8, ms:89.7, pb:38, ndt:65.6, ca:0.24, p:0.97, pdr:76}, // PDR real
{nome:'Farelo de amendoim', tipo:'Concentrado', custo:2.1, ms:89.4, pb:56, ndt:89.5, ca:0.18, p:0.62, pdr:27.8}, // PDR real
{nome:'Farelo de girassol', tipo:'Concentrado', custo:1.8, ms:90.2, pb:31.4, ndt:71.1, ca:0.3, p:0.9, pdr:45.6}, // PDR real
{nome:'Milho glúten farelo', tipo:'Concentrado', custo:2.4, ms:60, pb:90.6, ndt:83.9, ca:0.05, p:0.44, pdr:83}, // PDR real
{nome:'Milho silagem grão úmido', tipo:'Volumoso', custo:0.7, ms:66.7, pb:9.2, ndt:88.2, ca:0.03, p:0.25, pdr:25}, // PDR real
{nome:'Silagem de capim-elefante', tipo:'Volumoso', custo:0.4, ms:27.5, pb:5.5, ndt:50, ca:0.31, p:0.2, pdr:36}, // PDR real
{nome:'Cana-de-açúcar', tipo:'Volumoso', custo:0.3, ms:28.9, pb:2.8, ndt:64.5, ca:0.24, p:0.08, pdr:41}, // PDR real
{nome:'Alfafa feno', tipo:'Volumoso', custo:2.0, ms:85.8, pb:18.7, ndt:66.4, ca:1.17, p:0.33, pdr:40}, // PDR estimado
{nome:'Aveia feno', tipo:'Volumoso', custo:1.5, ms:90, pb:10, ndt:54, ca:0.4, p:0.27, pdr:40}, // PDR estimado
{nome:'Trevo feno', tipo:'Volumoso', custo:1.8, ms:89, pb:16, ndt:57, ca:1.73, p:0.24, pdr:40}, // PDR estimado
{nome:'Sorgo grão', tipo:'Concentrado', custo:1.4, ms:88, pb:9.3, ndt:84.4, ca:0.07, p:0.29, pdr:50}, // PDR estimado
{nome:'Polpa cítrica', tipo:'Concentrado', custo:1.3, ms:88.4, pb:6.9, ndt:78.3, ca:1.8, p:0.13, pdr:50}, // PDR estimado
{nome:'Capim tifton 85 feno', tipo:'Volumoso', custo:1.4, ms:88, pb:9.9, ndt:57.7, ca:0.33, p:0.27, pdr:40}, // PDR estimado
{nome:'Capim mombaça', tipo:'Volumoso', custo:1.2, ms:27, pb:11, ndt:53, ca:0.74, p:0.19, pdr:40}, // PDR estimado
{nome:'Capim elefante', tipo:'Volumoso', custo:1.1, ms:21.7, pb:7, ndt:50, ca:0.36, p:0.23, pdr:40}, // PDR estimado
{nome:'Aveia grão', tipo:'Concentrado', custo:1.6, ms:90.4, pb:14.6, ndt:83.3, ca:0.13, p:0.35, pdr:50}, // PDR estimado
{nome:'Cevada grão', tipo:'Concentrado', custo:1.5, ms:89.9, pb:12.4, ndt:76.8, ca:0.05, p:0.37, pdr:50}, // PDR estimado
{nome:'Trigo farelo', tipo:'Concentrado', custo:1.6, ms:87.6, pb:16.7, ndt:77.3, ca:0.17, p:1.01, pdr:50}, // PDR estimado
{nome:'Cacau farelo', tipo:'Concentrado', custo:2.5, ms:88.8, pb:15.9, ndt:64.5, ca:0.74, p:0.5, pdr:50}, // PDR estimado
{nome:'Capim elefante colmo', tipo:'Volumoso', custo:0.7, ms:22, pb:5.8, ndt:55.9, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim coast cross feno', tipo:'Volumoso', custo:1.2, ms:87, pb:10.5, ndt:53, ca:0.27, p:0.38, pdr:40}, // PDR estimado
{nome:'Capim massai (61-90 dias)', tipo:'Volumoso', custo:1.1, ms:29.5, pb:8, ndt:51.6, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim tanzânia', tipo:'Volumoso', custo:1.3, ms:23.4, pb:9.5, ndt:51, ca:0.59, p:0.14, pdr:40}, // PDR estimado
{nome:'Leucena feno', tipo:'Volumoso', custo:2.0, ms:91, pb:21, ndt:55, ca:1.18, p:0.29, pdr:40}, // PDR estimado
{nome:'Maniçoba feno', tipo:'Volumoso', custo:1.5, ms:86, pb:12, ndt:56.2, ca:0, p:0, pdr:40}, // PDR estimado

// Tabela 28 - Concentrados proteicos

  { nome: 'Algodão caroço', tipo: 'Concentrado', custo: 1.87, ms: 90.6, pb: 23.1, ndt: 88.2, ca: 0.27, p: 0.75, pdr: 21.6 },
  { nome: 'Algodão farelo 28', tipo: 'Concentrado', custo: 1.87, ms: 89.8, pb: 28, ndt: 68.1, ca: 0.26, p: 0.77, pdr: 30 }, 
  { nome: 'Algodão farelo 38', tipo: 'Concentrado', custo: 2.20, ms: 89.7, pb: 38, ndt: 65.6, ca: 0.24, p: 0.97, pdr: 16 },
  { nome: 'Algodão farelo 42', tipo: 'Concentrado', custo: 2.20, ms: 90.5, pb: 42, ndt: 69.8, ca: 0.22, p: 0.96, pdr: 16 },
  { nome: 'Algodão torta', tipo: 'Concentrado', custo: 2.40, ms: 90.4, pb: 29.6, ndt: 75.6, ca: 0.28, p: 0.58, pdr: 40 },
  { nome: 'Amendoim farelo', tipo: 'Concentrado', custo: 0, ms: 89.4, pb: 56, ndt: 89.5, ca: 0.18, p: 0.62, pdr: 90 },
  { nome: 'Amiréia (ureia)', tipo: 'Concentrado', custo: 0, ms: 90.6, pb: 200, ndt: 22, ca: 0.12, p: 0.08, pdr: 90 },
  { nome: 'Babaçu farelo', tipo: 'Concentrado', custo: 0, ms: 90, pb: 20.6, ndt: 71.9, ca: 0.13, p: 0.36, pdr: 40 },
  { nome: 'Babaçu torta', tipo: 'Concentrado', custo: 0, ms: 90.8, pb: 19.3, ndt: 78, ca: 0.15, p: 0.69, pdr: 40 },
  { nome: 'Crambe farelo', tipo: 'Concentrado', custo: 0, ms: 89.1, pb: 35.9, ndt: 73.9, ca: 0.29, p: 0.47, pdr: 40 },
  { nome: 'Canola farelo', tipo: 'Concentrado', custo: 0, ms: 89.4, pb: 40.1, ndt: 83.4, ca: 0.62, p: 0.82, pdr: 40 },
  { nome: 'Colza farelo', tipo: 'Concentrado', custo: 0, ms: 91.2, pb: 40, ndt: 0, ca: 0.65, p: 1.34, pdr: 50 },
  { nome: 'Feijão moído', tipo: 'Concentrado', custo: 0, ms: 89.6, pb: 24.2, ndt: 80.8, ca: 0.54, p: 0.43, pdr: 30 },
  { nome: 'Girassol farelo', tipo: 'Concentrado', custo: 0, ms: 90.2, pb: 31.4, ndt: 71.1, ca: 0.3, p: 0.9, pdr: 40},
  { nome: 'Linhaça farelo', tipo: 'Concentrado', custo: 0, ms: 92, pb: 34, ndt: 0, ca: 0.6, p: 0.6, pdr: 40 },
  { nome: 'Mamona farelo detoxificado', tipo: 'Concentrado', custo: 0, ms: 89.2, pb: 38.1, ndt: 69.3, ca: 1.46, p: 0.65, pdr: 30 },
  { nome: 'Milho glúten 60', tipo: 'Concentrado', custo: 0, ms: 90.6, pb: 60, ndt: 83.9, ca: 0.05, p: 0.44, pdr: 30 },
  { nome: 'Milho (DDGS)', tipo: 'Concentrado', custo: 0, ms: 91.2, pb: 31.8, ndt: 89, ca: 0.05, p: 0.86, pdr: 30 },
  { nome: 'Resíduo de cervejaria', tipo: 'Concentrado', custo: 0.45, ms: 22.3, pb: 25.6, ndt: 92.2, ca: 0.33, p: 0.78, pdr: 40 },
  { nome: 'Soja farelo', tipo: 'Concentrado', custo: 1.62, ms: 87, pb: 45, ndt: 73, ca: 0.3, p: 0.61, pdr: 48.9 },
  { nome: 'Soja grão tostado', tipo: 'Concentrado', custo: 0, ms: 91.7, pb: 39.1, ndt: 94.2, ca: 0.25, p: 0.49, pdr: 40.2 },

// Tabela 28 - Alimentos para ovinos (com PDR real ou estimado)

// Forragens verdes
{nome:'Amendoim forrageiro', tipo:'Volumoso', custo:0.8, ms:22.8, pb:18.4, ndt:54.5, ca:2.1, p:0.22, pdr:40}, // PDR estimado
{nome:'Cana-de-açúcar', tipo:'Volumoso', custo:0.3, ms:28.9, pb:2.8, ndt:64.5, ca:0.24, p:0.08, pdr:41}, // PDR real
{nome:'Capim braquiária brizantha', tipo:'Volumoso', custo:0.6, ms:34, pb:6.9, ndt:52, ca:0.31, p:0.11, pdr:40}, // PDR estimado
{nome:'Capim bb (46-60 dias)', tipo:'Volumoso', custo:0.6, ms:20.8, pb:9.5, ndt:55.7, ca:0.71, p:0.47, pdr:40}, // PDR estimado
{nome:'Capim bb (61-90 dias)', tipo:'Volumoso', custo:0.6, ms:24.9, pb:6.5, ndt:58, ca:0.46, p:0.38, pdr:40}, // PDR estimado
{nome:'Capim bb (91-120 dias)', tipo:'Volumoso', custo:0.6, ms:27.7, pb:4.8, ndt:54, ca:0.58, p:0.17, pdr:40}, // PDR estimado
{nome:'Capim braquiária marandu', tipo:'Volumoso', custo:0.6, ms:33.2, pb:7.7, ndt:51.5, ca:0.28, p:0.09, pdr:40}, // PDR estimado
{nome:'Capim bm (61-90 dias)', tipo:'Volumoso', custo:0.6, ms:37.8, pb:5.5, ndt:53, ca:0.08, p:0.05, pdr:40}, // PDR estimado
{nome:'Capim braq. marandu outono', tipo:'Volumoso', custo:0.6, ms:31, pb:11.8, ndt:55, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim bm primavera', tipo:'Volumoso', custo:0.6, ms:27, pb:11.3, ndt:58.7, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim bm verão', tipo:'Volumoso', custo:0.6, ms:29, pb:12.3, ndt:54, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim bb MG4', tipo:'Volumoso', custo:0.6, ms:23, pb:9.2, ndt:52.6, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim bb MG4 (61-90 dias)', tipo:'Volumoso', custo:0.6, ms:29, pb:6.4, ndt:53, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim bb piatã (61-90 dias)', tipo:'Volumoso', custo:0.6, ms:34, pb:4.7, ndt:55.8, ca:0, p:0, pdr:40}, // PDR estimado
{nome:'Capim bb xaraés', tipo:'Volumoso', custo:0.6, ms:23, pb:9.3, ndt:56, ca:0.6, p:0.09, pdr:40}, // PDR estimado
{nome:'Capim braquiária decumbens', tipo:'Volumoso', custo:0.6, ms:28.5, pb:6.7, ndt:51.5, ca:0.4, p:0.1, pdr:40}, // PDR estimado
{nome:'Capim bd (61-90 dias)', tipo:'Volumoso', custo:0.6, ms:27.8, pb:7.2, ndt:49.3, ca:0.3, p:0.19, pdr:40}, // PDR estimado
{nome:'Capim bb (91-120 dias)', tipo:'Volumoso', custo:0.6, ms:30, pb:5.7, ndt:55.2, ca:0.3, p:0.2, pdr:40}, // PDR estimado
{nome:'Capim bd (121-150 dias)', tipo:'Volumoso', custo:0.6, ms:43.7, pb:5.1, ndt:56.7, ca:0.72, p:0.28, pdr:40}, // PDR estimado
{nome:'Capim braquiária humidícola', tipo:'Volumoso', custo:0.6, ms:28, pb:7.4, ndt:54.8, ca:0.38, p:0.12, pdr:40}, // PDR estimado
{nome:'Capim buffel (61-90 dias)', tipo:'Volumoso', custo:0.6, ms:34.6, pb:7.8, ndt:52.3, ca:0, p:0, pdr:40}, // PDR estimado
];

let ingredientes = INGREDIENTES_PADRAO.map(x=>({...x}));
let ingredientesSelecionados = [];
let limites = {
  pb: {min: null, max: null},
  ndt: {min: null, max: null},
  ca: {min: null, max: null},
  p: {min: null, max: null}
};
let limitesIngrSelecionados = [];

// ---- UI geral ----
function atualizarTabelaIngredientes() {
  const tbody = document.querySelector('#ingredientes-table tbody');
  tbody.innerHTML = '';
  ingredientesSelecionados.forEach(idx => {
    const ing = ingredientes[idx];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${ing.nome}</td>
      <td>${ing.tipo}</td>
      <td>R$ ${ing.custo.toFixed(2)}</td>
      <td>${ing.ms.toFixed(1)}</td>
      <td>${ing.pb.toFixed(1)}</td>
      <td>${ing.ndt.toFixed(1)}</td>
      <td>${ing.ca.toFixed(2)}</td>
      <td>${ing.p.toFixed(2)}</td>
      <td>${ing.pdr.toFixed(1)}</td>
      <td><button onclick="removerIngredienteSelecionado(${idx})" title="Remover">✖</button></td>
    `;
    tbody.appendChild(tr);
  });
  atualizarSelecaoIngredientes();
}

function removerIngredienteSelecionado(idx) {
  ingredientesSelecionados = ingredientesSelecionados.filter(i => i !== idx);
  limitesIngrSelecionados = limitesIngrSelecionados.filter(x => x.idx !== idx);
  atualizarTabelaIngredientes();
  atualizarSelecaoIngredientes();
}

function limparCamposIngrediente() {
  ['nome','tipo','custo','ms','pb','ndt','ca','p','pdr'].forEach(id => document.getElementById(id).value = '');
}

function preencherLimitesUI() {
  document.getElementById('pb-min').value = limites.pb.min ?? '';
  document.getElementById('pb-max').value = limites.pb.max ?? '';
  document.getElementById('ndt-min').value = limites.ndt.min ?? '';
  document.getElementById('ndt-max').value = limites.ndt.max ?? '';
  document.getElementById('ca-min').value = limites.ca.min ?? '';
  document.getElementById('ca-max').value = limites.ca.max ?? '';
  document.getElementById('p-min').value = limites.p.min ?? '';
  document.getElementById('p-max').value = limites.p.max ?? '';
}

// ---- Seleção de Ingredientes ----
function atualizarSelecaoIngredientes() {
  const div = document.getElementById('ingredientes-selecao-list');
  div.innerHTML = '';
  ingredientesSelecionados.forEach(idx => {
    const ing = ingredientes[idx];
    let limMin = 0, limMax = 100;
    const lim = limitesIngrSelecionados.find(obj=>obj.idx===idx);
    if (lim) { limMin = lim.min; limMax = lim.max; }
    const card = document.createElement('div');
    card.className = "ingrediente-selecao-card";
    card.innerHTML = `
      <label style="min-width:110px">${ing.nome} <span style="color:${ing.tipo==='Volumoso'?'#2d9c72':'#5c76f6'}">[${ing.tipo}]</span></label>
      <span style="font-size:90%;color:var(--muted)">Limite:</span>
      <input type="number" id="limite-min-${idx}" value="${limMin}" min="0" max="100" step="0.1">
      <span style="margin:0 2px;font-size:90%;">a</span>
      <input type="number" id="limite-max-${idx}" value="${limMax}" min="0" max="100" step="0.1">
      <span style="font-size:90%;">%MS</span>
    `;
    div.appendChild(card);
    setTimeout(()=>{
      document.getElementById(`limite-min-${idx}`).oninput = e => {
        let obj = limitesIngrSelecionados.find(x=>x.idx===idx);
        if (obj) obj.min = parseFloat(e.target.value)||0;
      }
      document.getElementById(`limite-max-${idx}`).oninput = e => {
        let obj = limitesIngrSelecionados.find(x=>x.idx===idx);
        if (obj) obj.max = parseFloat(e.target.value)||100;
      }
    }, 10);
  });
}

// ---- Modal de ingredientes ----
const modalBg = document.getElementById('modal-ingredientes');
const abrirModalBtn = document.getElementById('abrir-modal-btn');
const fecharModalBtn = document.getElementById('fechar-modal-btn');
const modalIngredientesList = document.getElementById('modal-ingredientes-list');
const modalIngredientesForm = document.getElementById('modal-ingredientes-form');

abrirModalBtn.onclick = () => {
  renderModalIngredientes();
  modalBg.classList.add('active');
}
fecharModalBtn.onclick = ()=> modalBg.classList.remove('active');
modalBg.onclick = e => { if (e.target===modalBg) modalBg.classList.remove('active'); }

function renderModalIngredientes() {
  let header = `<div class="modal-ingrediente-row" style="background:#e0e5ea;font-weight:600;">
    <span></span>
    <span>Nome</span>
    <span>Tipo</span>
    <span>Custo</span>
    <span>%MS</span>
    <span>PB</span>
    <span>NDT</span>
    <span>Ca</span>
    <span>P</span>
    <span>PDR</span>
    <span></span>
  </div>`;
  let linhas = ingredientes.map((ing, idx) => {
    const checked = ingredientesSelecionados.includes(idx) ? 'checked' : '';
    return `<div class="modal-ingrediente-row" data-idx="${idx}">
      <input type="checkbox" name="select-ing" value="${idx}" ${checked}>
      <input type="text" name="nome-${idx}" value="${ing.nome}" required>
      <select name="tipo-${idx}">
        <option value="Volumoso"${ing.tipo==='Volumoso'?' selected':''}>Volumoso</option>
        <option value="Concentrado"${ing.tipo==='Concentrado'?' selected':''}>Concentrado</option>
      </select>
      <input type="number" name="custo-${idx}" value="${ing.custo}" step="0.01" min="0" required>
      <input type="number" name="ms-${idx}" value="${ing.ms}" step="0.1" min="0" required>
      <input type="number" name="pb-${idx}" value="${ing.pb}" step="0.1" min="0" required>
      <input type="number" name="ndt-${idx}" value="${ing.ndt}" step="0.1" min="0" max="100" required>
      <input type="number" name="ca-${idx}" value="${ing.ca}" step="0.01" min="0" max="100" required>
      <input type="number" name="p-${idx}" value="${ing.p}" step="0.01" min="0" max="100" required>
      <input type="number" name="pdr-${idx}" value="${ing.pdr}" step="0.1" min="0" required>
      <button type="button" onclick="removerIngredienteModal(${idx})" title="Remover" style="background:var(--danger);color:#fff;padding:0 0.6em;">✖</button>
    </div>`;
  }).join('');
  modalIngredientesList.innerHTML = header + linhas;
}
window.removerIngredienteModal = function(idx) {
  ingredientes.splice(idx,1);
  ingredientesSelecionados = ingredientesSelecionados.filter(i=>i!==idx);
  limitesIngrSelecionados = limitesIngrSelecionados.filter(x=>x.idx!==idx);
  ingredientesSelecionados = ingredientesSelecionados.map(i=>i>idx ? i-1 : i);
  limitesIngrSelecionados = limitesIngrSelecionados.map(obj=>({idx: obj.idx>idx?obj.idx-1:obj.idx, min: obj.min, max: obj.max}));
  renderModalIngredientes();
}

modalIngredientesForm.onsubmit = function(e){
  e.preventDefault();
  for (let i=0; i<ingredientes.length; ++i) {
    if (!modalIngredientesForm[`nome-${i}`]) continue;
    ingredientes[i].nome = modalIngredientesForm[`nome-${i}`].value;
    ingredientes[i].tipo = modalIngredientesForm[`tipo-${i}`].value;
    ingredientes[i].custo = parseFloat(modalIngredientesForm[`custo-${i}`].value);
    ingredientes[i].ms = parseFloat(modalIngredientesForm[`ms-${i}`].value);
    ingredientes[i].pb = parseFloat(modalIngredientesForm[`pb-${i}`].value);
    ingredientes[i].ndt = parseFloat(modalIngredientesForm[`ndt-${i}`].value);
    ingredientes[i].ca = parseFloat(modalIngredientesForm[`ca-${i}`].value);
    ingredientes[i].p = parseFloat(modalIngredientesForm[`p-${i}`].value);
    ingredientes[i].pdr = parseFloat(modalIngredientesForm[`pdr-${i}`].value);
  }
  let novasSelecoes = [];
  let novaLimiteObjs = [];
  let cbs = Array.from(modalIngredientesForm.querySelectorAll('input[type="checkbox"][name="select-ing"]'));
  cbs.forEach(cb=>{
    if(cb.checked) {
      let idx = parseInt(cb.value);
      novasSelecoes.push(idx);
      let lim = limitesIngrSelecionados.find(x=>x.idx===idx);
      novaLimiteObjs.push(lim?{...lim}:{idx,min:0,max:100});
    }
  });
  ingredientesSelecionados = novasSelecoes;
  limitesIngrSelecionados = novaLimiteObjs;
  atualizarTabelaIngredientes();
  setTimeout(atualizarSelecaoIngredientes, 0);
  modalBg.classList.remove('active');
}

// ---- Cadastro novo ingrediente ----
document.getElementById('ingrediente-form').onsubmit = e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const tipo = document.getElementById('tipo').value;
  const custo = parseFloat(document.getElementById('custo').value);
  const ms = parseFloat(document.getElementById('ms').value);
  const pb = parseFloat(document.getElementById('pb').value);
  const ndt = parseFloat(document.getElementById('ndt').value);
  const ca = parseFloat(document.getElementById('ca').value);
  const p = parseFloat(document.getElementById('p').value);
  const pdr = parseFloat(document.getElementById('pdr').value);

  if (!nome || !tipo || isNaN(custo) || isNaN(ms) || isNaN(pb) || isNaN(ndt) || isNaN(ca) || isNaN(p) || isNaN(pdr)) {
    alert('Preencha todos os campos corretamente.');
    return;
  }
  ingredientes.push({nome, tipo, custo, ms, pb, ndt, ca, p, pdr});
  atualizarTabelaIngredientes();
  limparCamposIngrediente();
}

// ---- Limites gerais ----
document.getElementById('limites-form').oninput = () => {
  limites.pb.min = parseFloat(document.getElementById('pb-min').value) || null;
  limites.pb.max = parseFloat(document.getElementById('pb-max').value) || null;
  limites.ndt.min = parseFloat(document.getElementById('ndt-min').value) || null;
  limites.ndt.max = parseFloat(document.getElementById('ndt-max').value) || null;
  limites.ca.min = parseFloat(document.getElementById('ca-min').value) || null;
  limites.ca.max = parseFloat(document.getElementById('ca-max').value) || null;
  limites.p.min = parseFloat(document.getElementById('p-min').value) || null;
  limites.p.max = parseFloat(document.getElementById('p-max').value) || null;
}

// ---- Botões principais ----
document.getElementById('calcular-btn').onclick = calcularDieta;
document.getElementById('limpar-btn').onclick = limparTudo;
document.getElementById('exportar-btn').onclick = exportarPDF;

// ---- Spinner ----
function mostrarSpinner(flag) {
  document.getElementById('spinner-busca').style.display = flag ? 'flex' : 'none';
}

// ---- Lógica de cálculo de dieta (busca aleatória, precisa e rápida) ----
function calcularDieta() {
  if (ingredientesSelecionados.length < 2) {
    alert('Selecione pelo menos dois ingredientes.');
    return;
  }
  const ingredientesUsar = ingredientesSelecionados.map(idx => ingredientes[idx]);
  const limitesIndiv = ingredientesSelecionados.map(idx => {
    const obj = limitesIngrSelecionados.find(x=>x.idx===idx);
    return {min: obj?obj.min:0, max: obj?obj.max:100};
  });

  // Mostra o spinner de carregamento
  mostrarSpinner(true);

  // Parâmetros para busca aleatória
  const tentativas = 60000; // Aumente para mais precisão, diminua se ficar lento
  const step = 2; // precisão em %, igual à anterior

  setTimeout(() => {
    let melhor = null;
    let melhorCusto = Infinity;

    for (let t = 0; t < tentativas; t++) {
      // Gera proporções aleatórias, mas que somem 100%
      let props = [];
      let soma = 0;
      let ok = true;
      for (let i = 0; i < ingredientesUsar.length; i++) {
        let min = limitesIndiv[i].min;
        let max = limitesIndiv[i].max;
        if (i === ingredientesUsar.length - 1) {
          let ult = 100 - soma;
          if (ult < min || ult > max) { ok = false; break; }
          props.push(ult / 100);
        } else {
          let restMax = 100 - soma - (ingredientesUsar.length - i - 1) * step;
          let localMax = Math.min(max, restMax);
          let localMin = Math.max(min, 0, 100 - soma - (ingredientesUsar.length - i - 1) * max);
          if(localMax < localMin) { ok = false; break; }
          let val = Math.round((Math.random() * (localMax - localMin) + localMin) / step) * step;
          soma += val;
          props.push(val / 100);
        }
      }
      if (!ok) continue;
      if (Math.abs(props.reduce((a, b) => a + b, 0) - 1) > 0.0001) continue;
      let totalPB = 0, totalNDT = 0, totalCa = 0, totalP = 0, totalMS = 0, totalPDR = 0, custo = 0;
      let volMS = 0, concMS = 0;
      ingredientesUsar.forEach((ing, idx) => {
        let prop = props[idx];
        totalPB += prop * ing.pb;
        totalNDT += prop * ing.ndt;
        totalCa += prop * ing.ca;
        totalP += prop * ing.p;
        totalMS += prop * 100;
        totalPDR += prop * ing.pb * (ing.pdr / 100);
        custo += prop * (100 / ing.ms) * ing.custo;
        if (ing.tipo === 'Volumoso') volMS += prop * 100;
        else concMS += prop * 100;
      });
      if (
        (limites.pb.min === null || totalPB >= limites.pb.min) &&
        (limites.pb.max === null || totalPB <= limites.pb.max) &&
        (limites.ndt.min === null || totalNDT >= limites.ndt.min) &&
        (limites.ndt.max === null || totalNDT <= limites.ndt.max) &&
        (limites.ca.min === null || totalCa >= limites.ca.min) &&
        (limites.ca.max === null || totalCa <= limites.ca.max) &&
        (limites.p.min === null || totalP >= limites.p.min) &&
        (limites.p.max === null || totalP <= limites.p.max)
      ) {
        if (custo < melhorCusto) {
          melhorCusto = custo;
          melhor = {props, totalPB, totalNDT, totalCa, totalP, totalMS, totalPDR, volMS, concMS, custo, ingredientesUsar};
        }
      }
    }

    mostrarSpinner(false);

    if (!melhor) {
      mostrarResultados(null, ingredientesUsar);
      alert('Não foi encontrada uma combinação de ingredientes que respeite os limites definidos.');
      return;
    }
    mostrarResultados(melhor, ingredientesUsar);

  }, 100); // timeout para garantir renderização do spinner
}

function mostrarResultados(res, ingredientesUsar) {
  const sec = document.getElementById('resultado-section');
  const out = document.getElementById('resultados');
  if (!res) { sec.style.display='block'; out.innerHTML = '<p style="color:var(--danger)">Nenhum resultado.</p>'; desenharGrafico(null); return; }
  let t = '<table class="result-table"><thead><tr><th>Ingrediente</th><th>Tipo</th><th>kg/dia (NATURAL)</th><th>kg/dia (MS)</th></tr></thead><tbody>';
  let totalNatural=0, totalMS=0;
  res.ingredientesUsar.forEach((ing,idx) => {
    let kgMS = res.props[idx];
    let kgNatural = kgMS * 100 / ing.ms;
    t += `<tr>
      <td>${ing.nome}</td>
      <td>${ing.tipo}</td>
      <td>${kgNatural.toFixed(2)}</td>
      <td>${(kgMS).toFixed(2)}</td>
    </tr>`;
    totalNatural += kgNatural;
    totalMS += kgMS;
  });
  t += `<tr style="font-weight:bold;"><td colspan="2">Total</td><td>${totalNatural.toFixed(2)}</td><td>${totalMS.toFixed(2)}</td></tr>`;
  t += '</tbody></table>';

  t += `<h3>Resumo Nutricional</h3>
  <ul>
    <li><strong>PB:</strong> ${res.totalPB.toFixed(2)} %MS</li>
    <li><strong>NDT:</strong> ${res.totalNDT.toFixed(2)} %MS</li>
    <li><strong>Ca:</strong> ${res.totalCa.toFixed(3)} %MS</li>
    <li><strong>P:</strong> ${res.totalP.toFixed(3)} %MS</li>
    <li><strong>PDR:</strong> ${res.totalPDR.toFixed(2)} %MS</li>
    <li><strong>Relação Ca/P:</strong> ${(res.totalCa/res.totalP).toFixed(2)}</li>
    <li><strong>Relação Concentrado/Volumoso:</strong> ${((res.concMS/res.totalMS)*100).toFixed(1)}% / ${((res.volMS/res.totalMS)*100).toFixed(1)}%</li>
    <li><strong>Custo total da dieta:</strong> R$ ${res.custo.toFixed(2)} por dia</li>
  </ul>
  `;
  out.innerHTML = t;
  sec.style.display = 'block';
  desenharGrafico(res);
}

// ---- Limpar ----
function limparTudo() {
  if (!confirm('Deseja limpar todos os dados e resultados?')) return;
  ingredientes = INGREDIENTES_PADRAO.map(x=>({...x}));
  ingredientesSelecionados = [];
  limitesIngrSelecionados = [];
  atualizarTabelaIngredientes();
  document.getElementById('resultado-section').style.display='none';
  atualizarSelecaoIngredientes();
}


// ---- Gráfico ajustado para não sobrepor textos ----
function desenharGrafico(res) {
  const cv = document.getElementById('grafico');
  const ctx = cv.getContext('2d');
  ctx.clearRect(0,0,cv.width,cv.height);
  if (!res) return;

  // Ajuste dinâmico para até 20 barras
  let n = res.ingredientesUsar.length;
  let margin = 35;
  let bararea = cv.width - margin * 2;
  let barWidth = Math.min(32, Math.floor(bararea / n * 0.7));
  let gap = (bararea - n * barWidth) / (n - 1 >= 1 ? n - 1 : 1);

  let x0 = margin, y0 = 40, h = 110;
  ctx.font = "14px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Participação dos ingredientes (%MS)", cv.width / 2, y0-15);

  let max = Math.max(...res.props.map(v=>v*100), 10);
  res.ingredientesUsar.forEach((ing,idx) => {
    let v = res.props[idx]*100;
    let barh = v/max*h;
    let x = x0 + idx * (barWidth + gap);

    ctx.fillStyle = ing.tipo==='Volumoso' ? "#2d9c72" : "#5c76f6";
    ctx.fillRect(x, y0+h-barh, barWidth, barh);

    // Valor no topo da barra
    ctx.save();
    ctx.font = "11px Arial";
    ctx.fillStyle = "#222";
    ctx.textAlign = "center";
    ctx.fillText(v.toFixed(1)+'%', x + barWidth/2, y0+h-barh-7);

    // Nome vertical (se muitos ingredientes, rotaciona)
    ctx.save();
    ctx.translate(x + barWidth/2, y0+h+15);
    if (n > 12) {
      ctx.rotate(-Math.PI/2.5);
      ctx.textAlign = "right";
      ctx.font = "10px Arial";
      ctx.fillText(ing.nome.slice(0,12), 0, 0);
    } else {
      ctx.rotate(0);
      ctx.font = "11px Arial";
      ctx.fillText(ing.nome.slice(0,14), 0, 0);
    }
    ctx.restore();
    ctx.restore();
  });
}

// ---- Exportar PDF (em nova página, formato organizado) ----
function exportarPDF() {
  // Busca a última mistura calculada
  const resultadoSection = document.getElementById('resultado-section');
  const resultadosDiv = document.getElementById('resultados');
  if (resultadoSection.style.display === "none" || !resultadosDiv.innerHTML) {
    alert("Calcule uma dieta antes de exportar.");
    return;
  }

  // Extrai dados do último cálculo
  let sec = resultadosDiv.querySelector('.result-table');
  if (!sec) {
    alert("Calcule uma dieta antes de exportar.");
    return;
  }

  // Dados dos ingredientes
  let linhas = [];
  let totalKgNat = 0, totalKgMS = 0, totalCustoMS = 0;

  sec.querySelectorAll("tbody tr").forEach(tr => {
    let tds = tr.querySelectorAll("td");
    if (tds.length === 4) {
      let nome = tds[0].innerText;
      //let tipo = tds[1].innerText; // não usar mais
      let kgNat = parseFloat(tds[2].innerText.replace(",", "."));
      let kgMS = parseFloat(tds[3].innerText.replace(",", "."));
      totalKgNat += kgNat;
      totalKgMS += kgMS;

      // Encontrar o ingrediente para custo
      let ing = ingredientes.find(i => i.nome === nome);
      let custoMS = ing ? ((100 / ing.ms) * ing.custo) : 0;
      let custoPropMS = custoMS * kgMS; // custo para a quantidade na MS

      totalCustoMS += custoPropMS;

      linhas.push({
        ingrediente: nome,
        kgNat,
        kgMS,
        custoUnitMS: custoMS,
        custoPropMS
      });
    }
  });

  // Para ajustar para 100 kg MS e proporcional MN:
  let fatorMS = totalKgMS > 0 ? 100 / totalKgMS : 1;
  let linhas100 = linhas.map(l => ({
    ingrediente: l.ingrediente,
    kgMS: l.kgMS * fatorMS,
    kgNat: l.kgNat * fatorMS,
    custoUnitMS: l.custoUnitMS,
    custoPropMS: l.custoUnitMS * l.kgMS * fatorMS
  }));
  let totalKgNat100 = linhas100.reduce((a, b) => a + b.kgNat, 0);
  let totalCustoMS100 = linhas100.reduce((a, b) => a + b.custoPropMS, 0);

  // Dados do resumo nutricional
  let resumo = {};
  resultadosDiv.querySelectorAll("ul li").forEach(li => {
    let key = li.innerText.split(":")[0].replace("Relação ","relacao_").replace(" ", "_").replace("/", "_").toLowerCase();
    let val = li.innerText.split(":")[1] ? li.innerText.split(":")[1].trim() : "";
    resumo[key] = val;
  });

  // Gera HTML do PDF
  let html = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Relatório da Dieta - PDF</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #232323; }
    h1, h2 { color: #2d9c72; }
    table { width: 100%; border-collapse: collapse; margin-top: 1.2em;}
    th, td { border: 1px solid #e0e5ea; padding: 6px 10px; text-align: center;}
    th { background: #f5f7fa;}
    .nutr-table { margin-top: 1.5em; width: 70%; }
    .nutr-table td { text-align: left; }
    .nutr-label { font-weight: bold; color: #5c76f6;}
    .footer { margin-top: 3em; color: #999; font-size: 12px;}
    .titulo { margin-bottom: 0.2em;}
    .right { text-align: right; }
    .bold { font-weight: bold; }
    td, th { font-size: 14px; }
  </style>
</head>
<body>
  <h1 class="titulo">Relatório da Dieta Otimizada</h1>
  <h2>Composição da Mistura (proporção para 100 kg de Matéria Seca)</h2>
  <table>
    <thead>
      <tr>
        <th>Ingrediente</th>
        <th>kg<br>(Matéria Seca)</th>
        <th>kg<br>(Matéria Natural)</th>
        <th>Custo por ingrediente<br>(R$ na MS)</th>
      </tr>
    </thead>
    <tbody>
      ${linhas100.map(l=>`
        <tr>
          <td>${l.ingrediente}</td>
          <td>${l.kgMS.toFixed(2)}</td>
          <td>${l.kgNat.toFixed(2)}</td>
          <td>R$ ${l.custoPropMS.toFixed(2)}</td>
        </tr>`).join("")}
      <tr class="bold">
        <td>Total</td>
        <td>${(linhas100.reduce((a, b) => a + b.kgMS, 0)).toFixed(2)}</td>
        <td>${totalKgNat100.toFixed(2)}</td>
        <td>R$ ${totalCustoMS100.toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
  <h2>Resumo Nutricional e Custos</h2>
  <table class="nutr-table">
    <tbody>
      <tr><td class="nutr-label">PB (%MS):</td><td>${resumo.pb || ''}</td></tr>
      <tr><td class="nutr-label">NDT (%MS):</td><td>${resumo.ndt || ''}</td></tr>
      <tr><td class="nutr-label">Ca (%MS):</td><td>${resumo.ca || ''}</td></tr>
      <tr><td class="nutr-label">P (%MS):</td><td>${resumo.p || ''}</td></tr>
      <tr><td class="nutr-label">Relação Ca/P:</td><td>${resumo.relacao_ca_p || ''}</td></tr>
      <tr><td class="nutr-label">Custo total da dieta (R$/Kg):</td><td> R$ ${((totalCustoMS100)/100).toFixed(2) || ''}</td></tr>
    </tbody>
  </table>
  <div class="footer">
    Gerado por: AgroCrat LTDA - ${new Date().toLocaleString('pt-BR')}
  </div>
  <script>
    window.onload = function() { window.print(); }
  </script>
</body>
</html>
  `.trim();

  // Abre nova aba com o relatório
  let win = window.open("", "_blank");
  win.document.write(html);
  win.document.close();
}

// ---- Inicialização ----
atualizarTabelaIngredientes();
preencherLimitesUI();
