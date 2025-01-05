# ⚔️ fightGame

Este é um projeto simples de um simulador de luta em estilo RPG, desenvolvido com HTML, CSS e JavaScript. Ele permite a interação entre personagens (lutadores) e monstros, com ataques, defesas e barra de vida dinâmica.

## 📜 Descrição

O jogo é composto por:

- 🛡️ **Personagens**: Pode-se escolher entre um Cavaleiro (Knight) ou Feiticeiro (Sorcerer).
- 👾 **Monstros**: Inclui monstros menores (Little Monster) e maiores (Big Monster).
- ⚡ **Sistema de combate**: Inclui ataques, defesas e a possibilidade de exibir logs das ações realizadas durante o combate.

### 🌟 Principais Características

1. 🩸 Atualização dinâmica de vida para ambos os lutadores na interface.
2. 📝 Log detalhado de ações realizadas (ataques, defesas, etc.).
3. 🛠️ Implementação de objetos e classes em JavaScript.
4. 📊 Barra de vida ajustada dinamicamente com limite de valor mínimo (0).

---

## 🕹️ Como Usar

### ✅ Requisitos

- Navegador moderno com suporte a JavaScript.

### ⚙️ Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/tscouto/fightGame.git
   ```

Abra o arquivo index.html em seu navegador.

### 🗂️ Estrutura do Projeto

### 📁 Arquivos

- index.html: Estrutura básica do HTML.
- styles.css: Estilização das barras de vida, botões e layout.
- newClasses.js: Contém as classes principais como Character, Knight, Sorcerer, LittleMonster, BigMonster, Stage e Log.
- newScript.js: Script que inicializa os personagens e começa o jogo.

## 🏗️ Classes

1. Character 🧙‍♂️

- Classe base para todos os personagens e monstros.
- Propriedades: name, life, maxLife, attack, defense.
- Proteção contra valores negativos de vida.

2.  Knight 🛡️ e Sorcerer 🔮

- Subclasses de Character.
- Possuem características específicas como attack e defense.

3. LittleMonster 👾 e BigMonster 🐉

- Subclasses de Character.
- Monstros com características definidas.

4. Stage 🎭

- Gerencia o combate entre dois lutadores.
- Atualização dinâmica da interface com barra de vida e logs.

5. Log 📝

- Gerencia as mensagens do combate.
- Renderiza a lista de ações no DOM.

## 🎮 Como Funciona o Jogo

1. Ao carregar a página, um lutador e um monstro são inicializados.
2. Cada personagem possui botões para atacar seu oponente.
3. A cada ataque:
   - Um cálculo é feito considerando fatores aleatórios para ataque e defesa.
   - Se o ataque supera a defesa, o oponente perde vida.
   - Logs são gerados para registrar os eventos do combate.
4. O combate termina quando a vida de um dos participantes chega a zero.

# 💻 Exemplo de Código

## Classe Base Character

```bash
class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._life;
  }

  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}
```

## Iniciar o Combate

```bash
let log = new Log(document.querySelector('.log'));
let char = new Knight('Tiago');
let monster = new LittleMonster();

const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster'),
  log
);

stage.start();
```

## 🚀 Melhorias Futuras

- 🔥 Adicionar habilidades especiais para personagens.
- ♻️ Implementar um sistema de rodada para alternar turnos entre lutadores.
- 🎨 Melhorar a interface com animações.
- 👥 Adicionar múltiplos personagens e monstros para escolha.

## 🤝 Contribuições

São bem-vindas contribuições para melhorias e novas funcionalidades! Abra uma issue ou envie um pull request.
