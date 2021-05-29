import React from 'react';

class Acao extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ticker: null,
            valor: null
        }
    }

    componentDidMount(){
        this.pegarValorAcao();
    }

    pegarValorAcao(){
        const pointerToThis = this;
        console.log(pointerToThis);
        const CHAVE_API = '6YNX5I3ETWHM01XK';
        let ticker = 'OIBR3.SAO';
        let chamarApi = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+ticker+'&apikey=' + CHAVE_API;
        let valorFuncao = [];
        let tickerFuncao = [];
        fetch(chamarApi)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log(data);
                valorFuncao.push(data['Global Quote']['05. price']);
                tickerFuncao.push(data['Global Quote']['01. symbol']);
                pointerToThis.setState({
                    ticker: tickerFuncao,
                    valor: valorFuncao
                })
            }
        )
    }
    render(){
        return(
            <div>
                <h1>Acoes Teste</h1>
                <p>Valor {this.state.ticker}: R${this.state.valor}</p>
            </div>
        )
    }
}

export default Acao;