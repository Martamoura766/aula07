import './App.css'

function App() {
  return (
    <div className="container">
      {/* Título e Subtítulo */}
      <h1>Pop Art Camisetas</h1>
      <h2>Crie Seu Look Cheio de Arte</h2>

      {/* Parágrafo explicativo */}
      <p>
        Transforme seu estilo com estampas exclusivas e cheias de atitude. 
        Simulate o valor do seu pedido e vista arte no seu dia a dia!
      </p>

      {/* Lista com 3 benefícios/recursos */}
      <ul className="lista-beneficios">
        <li>🎨 <strong>Estampas Exclusivas:</strong> Artes inspiradas no universo pop e em quadrinhos.</li>
        <li>⚡ <strong>Cálculo Rápido:</strong> Descubra o valor total das suas camisetas em poucos cliques.</li>
        <li>👕 <strong>Algodão Premium:</strong> Conforto, durabilidade e cores vibrantes que duram.</li>
      </ul>

      {/* Botão de Ação */}
      <button onClick={() => alert('Simulador em breve!')}>
        Criar Meu Orçamento Pop
      </button>
    </div>
  )
}

export default App