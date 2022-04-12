import React from "react";
import api from "./services/api";

export default class Senador extends React.Component {
  //Metodo construtor
  constructor(props) {
    super(props);
    this.state = {
      senador: null
    };
  }

  //Responsável pelo carregamento dos dados da API
  componentDidMount() {
    api.get("/55").then((response) => {
      this.setSenador(response.data.DetalheParlamentar.Parlamentar);
    });
  }

  setSenador(data) {
    this.setState({
      senador: data
    });
  }

  render() {
    const { senador } = this.state;
    
    if(!senador)
      return <div></div>;

      let servicos = senador.OutrasInformacoes.Servico.map((item) => (
        `<p>Nome Serviço: ${item.NomeServico}</p>
        <p>Descrição Serviço: ${item.DescricaoServico}</p>
        <a href="${item.UrlServico}">${item.UrlServico}</a> <br/>`
      ));

    return (
      //verifica se está em carregamento para exibir loading ou conteúdo
      senador != null ? (
        <div>
          <div className="body">
            <div>
              <h3>{ senador.IdentificacaoParlamentar.NomeParlamentar }</h3>
              <img src={senador.IdentificacaoParlamentar.UrlFotoParlamentar} alt={senador.IdentificacaoParlamentar.NomeParlamentar}/>
              
              <h3>Identificação</h3>
              <p>Código: { senador.IdentificacaoParlamentar.CodigoParlamentar }</p>
              <p>Nome: { senador.IdentificacaoParlamentar.NomeParlamentar }</p>
              <p>Nome Completo: { senador.IdentificacaoParlamentar.NomeCompletoParlamentar }</p>
              <p>Sexo: { senador.IdentificacaoParlamentar.SexoParlamentar }</p>
              <a href={senador.IdentificacaoParlamentar.UrlPaginaParlamentar}>Web Site</a>

              <h3>Dados Básicos</h3>
              <p>Data de Nascimento: { senador.DadosBasicosParlamentar.DataNascimento }</p>
              <p>Naturalidade: { senador.DadosBasicosParlamentar.Naturalidade }</p>
              <p>UF Naturalidade: { senador.DadosBasicosParlamentar.UfNaturalidade }</p>

              <h3>Informações</h3>
              <div dangerouslySetInnerHTML={{ __html: servicos }} />
            </div>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )
    );
  }
}
