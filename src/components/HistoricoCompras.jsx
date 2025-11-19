export default function HistoricoCompras({ compras }) {
  return (
    <div>
      <h2>Histórico de Compras</h2>
      <ul>
        {compras.map((c, index) => (
          <li key={index}>
            {c.nome} — comprado em {c.data}
          </li>
        ))}
      </ul>
    </div>
  );
}
