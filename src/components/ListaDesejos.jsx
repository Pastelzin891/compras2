export default function ListaDesejos({ produtos }) {
  return (
    <div>
      <h2>Lista de Desejos</h2>
      <ul>
        {produtos.map((p, index) => (
          <li key={index}>{p.nome}</li>
        ))}
      </ul>
    </div>
  );
}
