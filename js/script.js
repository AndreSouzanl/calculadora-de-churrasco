document.getElementById('calcular').addEventListener('click', function() {
  // Obter os valores dos campos de entrada
  const homens = parseInt(document.getElementById('homens').value) || 0;
  const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
  const criancas = parseInt(document.getElementById('criancas').value) || 0;

  // Calcular as quantidades (em kg e litros)
  const totalCarne = (homens * 0.5 + mulheres * 0.3 + criancas * 0.2).toFixed(1);
  const totalFrango = (homens * 0.2 + mulheres * 0.2 + criancas * 0.1).toFixed(1);
  const totalLinguica = (homens * 0.2 + mulheres * 0.2 + criancas * 0.2).toFixed(1);
  const totalRefrigerante = (homens * 0.3 + mulheres * 0.4 + criancas * 0.2).toFixed(1);
  const totalCerveja = (homens * 0.8 + mulheres * 0.5).toFixed(1);

  // Obter o elemento ul onde os resultados serão inseridos
  const resultados = document.getElementById('resultados');

  // Limpar quaisquer resultados anteriores
  resultados.innerHTML = '';

  // Criar e adicionar os itens da lista dinamicamente
  const itens = [
    { id: 'carne', text: `${totalCarne} kg de carne bovina` },
    { id: 'frango', text: `${totalFrango} kg de frango` },
    { id: 'linguica', text: `${totalLinguica} kg de linguiça` },
    { id: 'refrigerante', text: `${totalRefrigerante} l de refrigerante` },
    { id: 'cerveja', text: `${totalCerveja} l de cerveja` }
  ];
    // percore os item e adiona no html criando li atraves do javascrit 
  itens.forEach(item => {
    const li = document.createElement('li');
    li.id = item.id;
    li.innerText = item.text;
    resultados.appendChild(li);
  });
  // Limpar todos os campos de entrada
  document.getElementById('homens').value = '';
  document.getElementById('mulheres').value = '';
  document.getElementById('criancas').value = '';
});
