

export class AviarioService {

    
    constructor(url,bearer=null){
        this.url = `http://localhost:5245/${url}`;
        this.bearer = bearer;
        this.return = null;
    }

    setBearear(token){
        this.bearer = token;
    }

  
//#region Administradores
    async logar(formData){
        
       await fetch(this.url,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              
            }, 
            body: JSON.stringify({
              email: formData.email,
              password: formData.password
            }),
            
          }).then((response)=>response.json())
          .then((token) => {
            this.setBearear(token);
        })
          .catch((error)=>this.setBearear(null));
          return this.bearer;
    }
//#endregion
//#region Lotes
    async getLotes(){
      await fetch(this.url,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Authorization': `Bearer ${this.bearer}`,
        }, 
        
      }).then((response)=>response.json())
      .then((responseJson) => {
        this.return = responseJson;
    })
      .catch((error)=>this.return = null);
      return this.return;
    }


    async createLote(formData){

      var response = null;
      await fetch(this.url,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:3000',
              'Authorization': `Bearer ${this.bearer}`,
              
            }, 
            body: JSON.stringify({
              dataEntrada: formData.dataEntrada,
              quantidadeAnimais: formData.quantidadeAnimais,
              linhagem: formData.linhagem,
              aviarioOrigem: formData.aviarioOrigem,
              precoLote: formData.precoLote,
              dataVenda: formData.dataEntrada,
            }),
            
          }).then((response)=>response.json())
          .then((status) => {
            response=status;
        })
          .catch((error)=>console.log(error));
          return response;

    }
//#endregion

//#region Refeições
    async getRefeicoes(){
      await fetch(this.url,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Authorization': `Bearer ${this.bearer}`,
        }, 
        
      }).then((response)=>response.json())
      .then((responseJson) => {
        this.return = responseJson;
    })
      .catch((error)=>this.return = null);
      return this.return;
    }


    async createRefeicao(formData){

      var response = null;
      await fetch(`http://localhost:5245/Refeicao?IdRacao=${formData.idRacao}`,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:3000',
              'Authorization': `Bearer ${this.bearer}`,
              
            }, 
            body: JSON.stringify({
              numeroLote: formData.idLote,
              quantidadeRacao: formData.quantidadeRacao,
              dataAdministracao: formData.dataAdministracao
            }),
            
          }).then((response)=>response.json())
          .then((status) => {
            response=status;
        })
          .catch((error)=>console.log(error));
          return response;

    }

}