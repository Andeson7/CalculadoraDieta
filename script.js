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