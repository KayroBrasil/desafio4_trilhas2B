document.addEventListener('DOMContentLoaded', function () {
    const loadingElement = document.getElementById('loading')
    const errorElement = document.getElementById('error')
    const cardsContainer = document.getElementById('cardsContainer')

    const buscarDadosBotao = document.getElementById('buscarDados');
    const localizacaoSelect = document.getElementById('localizacao');
    const infoTextElement = document.getElementById('infoText');

    const baseURL = 'https://api.qedu.org.br/v1/ideb'

    buscarDadosBotao.addEventListener('click', buscarDadosIDEB);

    /*const params = {
      id: 7,
      ano: 2019,
      //dependencia_id: 2,
      //ciclo_id: 'AI'
    }*/

    const token = 'uCepcSkwipY8IqOGft3XWe8RWvUTyjr94abLkYN6'

    function buscarDadosIDEB() {
        const localizacao = localizacaoSelect.value;
        let params = {
            ano: 2019,
            dependencia_id: 0,
            /*ciclo_id: 'AI'*/
        };

        if (localizacao !== 7) {
            params.id = localizacao;
        }

    const options = {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      params
    }

    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    cardsContainer.style.display = 'none';
    cardsContainer.innerHTML = '';
    //infoTextElement.textContent = `Dados do IDEB (2019) - Rede Estadual - Anos Iniciais - Filtrado por: ${localizacao === '7' ? 'Brasil' : obterNomeEstado(localizacao)}.`;

    axios
      .get(baseURL, options)
      .then((response) => {

        if (!response.data || !response.data.data || !response.data.data.length) {
          throw new Error('Nenhum dado encontrado na resposta da API')
        }

        loadingElement.style.display = 'none'
        cardsContainer.style.display = 'grid'
      
        createCards(response.data)
      })
      .catch((error) => {
        console.error('Erro na requisição:', error)

        let errorMessage = 'Erro na requisição: ' + error.message

        if (error.response) {
          errorMessage += ` (Status: ${error.response.status})`
          console.log('Dados do erro:', error.response.data)
        }

        errorElement.textContent = errorMessage
        errorElement.style.display = 'block'
        loadingElement.style.display = 'none'
      })
    }

    function createCards(data) {
        console.log(data);
        for (let i = 0; i < data.data.length; i++) {
      try {
        const dataItem = data.data[i]

        const indicators = [
          {
            title: 'IDEB',
            value: parseFloat(dataItem.ideb),
            description: 'Índice de Desenvolvimento da Educação Básica'
          },
          {
            title: 'Aprendizado',
            value: parseFloat(dataItem.aprendizado),
            description: 'Indicador de aprendizado'
          },
          {
            title: 'Fluxo',
            value: parseFloat(dataItem.fluxo),
            description: 'Indicador de fluxo escolar'
          },
          {
            title: 'Aprovação',
            value: parseFloat(dataItem.aprovacao),
            description: 'Taxa de aprovação (%)'
          }
        ]

        indicators.forEach(indicator => {
          const card = document.createElement('div')
          card.className = 'card'

          const title = document.createElement('div')
          title.className = 'card-title'
          title.textContent = indicator.title

          const value = document.createElement('div')
          value.className = 'card-value'
          value.style.color = indicator.color
          value.textContent = indicator.value

          const description = document.createElement('div')
          description.className = 'card-description'
          description.textContent = indicator.description

          card.appendChild(title)
          card.appendChild(value)
          card.appendChild(description)

          cardsContainer.appendChild(card)
        })
      } catch (error) {
        console.error('Erro ao criar cards:', error)
        errorElement.textContent = 'Erro ao criar cards: ' + error.message
        errorElement.style.display = 'block'
      }
    }
    }

    function obterNomeEstado(sigla) {
        const estados = {
            12: 'Acre', 27: 'Alagoas', 16: 'Amapá', 13: 'Amazonas', 29: 'Bahia', 23: 'Ceará',
            53: 'Distrito Federal', 32: 'Espírito Santo', 52: 'Goiás', 21: 'Maranhão', 51: 'Mato Grosso',
            50: 'Mato Grosso do Sul', 31: 'Minas Gerais', 15: 'Pará', 25: 'Paraíba', 41: 'Paraná',
            26: 'Pernambuco', 22: 'Piauí', 33: 'Rio de Janeiro', 24: 'Rio Grande do Norte', 43: 'Rio Grande do Sul',
            11: 'Rondônia', 14: 'Roraima', 42: 'Santa Catarina', 35: 'São Paulo', 28: 'Sergipe', 17: 'Tocantins'
        };
        return estados[sigla] || sigla;
    }
  })