import React from "react";
import api from "./services/api";


export default class Filiacoes extends React.Component {
  //Metodo construtor
  constructor(props) {
    super(props);
    this.state = {
      filiacoes: null
    };
  }

  //Responsável pelo carregamento dos dados da API
  componentDidMount() {
    api.get("55/filiacoes").then((response) => {
      this.setFiliacoes(response.data.FiliacaoParlamentar.Parlamentar);
    });
  }

  setFiliacoes(data) {
    this.setState({
      filiacoes: data
    });
  }

  render() {
    const { filiacoes } = this.state;

    if (!filiacoes)
      return <div></div>;

    let filiacoesHtml = filiacoes.Filiacoes.Filiacao.map((item) => (
      `<p>Código Partido: ${item.Partido.CodigoPartido}</p>
        <p>Sigla Partido: ${item.Partido.SiglaPartido}</p>
        <p>Nome Partido: ${item.Partido.NomePartido}</p>
        <p>Data Filiação: ${item.DataFiliacao}</p>
        <p>Data DesFiliação: ${item.DataDesfiliacao}</p>
        <br/>`
    ));

    return (
      //verifica se está em carregamento para exibir loading ou conteúdo
      filiacoes != null ? (
        <div>
          <div className="body">
            <div>
              <h3>{filiacoes.Nome}</h3>
              <h3>Filiações</h3>
              <div dangerouslySetInnerHTML={{ __html: filiacoesHtml }} />
            </div>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )
    );
  }
}
