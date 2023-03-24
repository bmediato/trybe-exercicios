class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _itemConsumido: itemdoPedido[] = [];
  private _pagamento: string;
  private _desconto = 0;

  constructor(cliente: Cliente, item: itemdoPedido[], pagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itemConsumido = item;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get item(): itemdoPedido[] {
    return this._itemConsumido;
  }

  set item(value: itemdoPedido[]) {
    this._itemConsumido = value;
  }

  get pagamento(): string {
    return this._pagamento;
  }

  set pagamento(value: string) {
    this._pagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    this._desconto = value;
  }
}

class itemdoPedido {
  private _nomeProduto: string;
  private _preco: number;

  constructor(nomeProduto: string, preco: number) {
    this._nomeProduto = nomeProduto;
    this._preco = preco;
  }

  get nomeProduto(): string {
    return this._nomeProduto;
  }

  set nomeProduto(value: string) {
    this._nomeProduto = value
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    this._preco = value;
  }
}