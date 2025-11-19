import Carrinho from "./Carrinho";
import ListaDesejos from "./ListaDesejos";
import HistoricoCompras from "./HistoricoCompras";

export default function Loja() {
  const carrinho = [
    { nome: "Mouse Gamer", preco: 129.90 },
    { nome: "Teclado Mecânico", preco: 299.99 }
  ];

  const listaDesejos = [
    { nome: "Monitor 144hz" },
    { nome: "Headset HyperX" }
  ];

  const historicoCompras = [
    { nome: "SSD 480GB", data: "05/11/2025" },
    { nome: "Cadeira Gamer", data: "22/10/2025" }
  ];

  return (
    <div>
      <h1>Minha Loja</h1>

      <Carrinho produtos={carrinho} />
      <ListaDesejos produtos={listaDesejos} />
      <HistoricoCompras compras={historicoCompras} />
    </div>
  );
}
