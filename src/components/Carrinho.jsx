export default function Carrinho({ produtos }) {
  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {produtos.map((p, index) => (
          <li key={index}>
            {p.nome} — R$ {p.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
