function tocarSom() {
  let audio = new Audio('salamisound-4622627-water-drops-throwing-small.mp3');
  audio.play();
}


let nosVisitados = [];
    let valorBuscado = null;
    let canvasWidth = 1000;
    let canvasHeight = 600;

    class No {
      constructor(valor) {
        this.valor = valor;
        this.esq = null;
        this.dir = null;
        this.x = 0;
        this.y = 0;
        this.largura = 0;
      }
    }

    class Arvore {
      constructor() {
        this.raiz = null;
      }

      calcularLarguras(no) {
        if (!no) return 0;
        
        let larguraEsq = this.calcularLarguras(no.esq);
        let larguraDir = this.calcularLarguras(no.dir);
        
        let larguraMinima = 60;
        
        no.largura = Math.max(larguraMinima, larguraEsq + larguraDir);
        
        return no.largura;
      }

      posicionarNos(no, x, y, larguraDisponivel) {
        if (!no) return;
        
        no.x = x;
        no.y = y;
        
        if (no.esq || no.dir) {
          let larguraEsq = no.esq ? no.esq.largura : 0;
          let larguraDir = no.dir ? no.dir.largura : 0;
          let larguraTotal = larguraEsq + larguraDir;
          
          if (larguraTotal < larguraDisponivel) {
            let espacoExtra = (larguraDisponivel - larguraTotal) / 2;
            larguraEsq += espacoExtra / 2;
            larguraDir += espacoExtra / 2;
          }
          
          if (no.esq) {
            let xEsq = x - larguraEsq / 2;
            this.posicionarNos(no.esq, xEsq, y + 80, larguraEsq);
          }
          
          if (no.dir) {
            let xDir = x + larguraDir / 2;
            this.posicionarNos(no.dir, xDir, y + 80, larguraDir);
          }
        }
      }

      bfsBusca(valor) {
        nosVisitados = [];
        let fila = [this.raiz];
        while (fila.length > 0) {
          let atual = fila.shift();
          if (atual) {
            nosVisitados.push(atual.valor);
            if (atual.valor === valor) return atual;
            if (atual.esq) fila.push(atual.esq);
            if (atual.dir) fila.push(atual.dir);
          }
        }
        return null;
      }

      dfsBusca(valor) {
        nosVisitados = [];
        let pilha = [this.raiz];
        while (pilha.length > 0) {
          let atual = pilha.pop();
          if (atual) {
            nosVisitados.push(atual.valor);
            if (atual.valor === valor) return atual;
            if (atual.dir) pilha.push(atual.dir);
            if (atual.esq) pilha.push(atual.esq);
          }
        }
        return null;
      }

      inserir(valor) {
        this.raiz = this._inserir(this.raiz, valor);
      }

      _inserir(no, valor) {
  if (no == null) {
    tocarSom();
    return new No(valor);
  }
  if (valor < no.valor) no.esq = this._inserir(no.esq, valor);
  else if (valor > no.valor) no.dir = this._inserir(no.dir, valor);
  return no;
}


      buscar(valor) {
        return this._buscar(this.raiz, valor);
      }

      _buscar(no, valor) {
        if (no == null || no.valor == valor) return no;
        if (valor < no.valor) return this._buscar(no.esq, valor);
        return this._buscar(no.dir, valor);
      }

      remover(valor) {
        this.raiz = this._remover(this.raiz, valor);
      }

      _remover(no, valor) {
        if (no == null) return null;
        if (valor < no.valor) no.esq = this._remover(no.esq, valor);
        else if (valor > no.valor) no.dir = this._remover(no.dir, valor);
        else {
          if (!no.esq) return no.dir;
          if (!no.dir) return no.esq;
          let min = this._min(no.dir);
          no.valor = min.valor;
          no.dir = this._remover(no.dir, min.valor);
        }
        return no;
      }

      _min(no) {
        while (no.esq != null) no = no.esq;
        return no;
      }

      emOrdem() {
        let r = [];
        this._emOrdem(this.raiz, r);
        return r;
      }

      _emOrdem(no, r) {
        if (!no) return;
        this._emOrdem(no.esq, r);
        r.push(no.valor);
        this._emOrdem(no.dir, r);
      }

      preOrdem() {
        let r = [];
        this._preOrdem(this.raiz, r);
        return r;
      }

      _preOrdem(no, r) {
        if (!no) return;
        r.push(no.valor);
        this._preOrdem(no.esq, r);
        this._preOrdem(no.dir, r);
      }

      posOrdem() {
        let r = [];
        this._posOrdem(this.raiz, r);
        return r;
      }

      _posOrdem(no, r) {
        if (!no) return;
        this._posOrdem(no.esq, r);
        this._posOrdem(no.dir, r);
        r.push(no.valor);
      }

      bfs() {
        let fila = [this.raiz];
        let r = [];
        while (fila.length > 0) {
          let atual = fila.shift();
          if (atual) {
            r.push(atual.valor);
            fila.push(atual.esq);
            fila.push(atual.dir);
          }
        }
        return r;
      }

      dfs() {
        let pilha = [this.raiz];
        let r = [];
        while (pilha.length > 0) {
          let atual = pilha.pop();
          if (atual) {
            r.push(atual.valor);
            pilha.push(atual.dir);
            pilha.push(atual.esq);
          }
        }
        return r;
      }

      desenhar(no) {
        if (no == null) return;

        stroke(0);
        strokeWeight(2);

        if (no.esq) {
          line(no.x, no.y, no.esq.x, no.esq.y);
        }
        if (no.dir) {
          line(no.x, no.y, no.dir.x, no.dir.y);
        }

        this.desenhar(no.esq);
        this.desenhar(no.dir);

        if (no.valor === valorBuscado) {
          fill("#2ecc71");
        } else if (nosVisitados.includes(no.valor)) {
          fill("#0077cc");
        } else {
          fill(240);
        }

        ellipse(no.x, no.y, 40, 40);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(14);
        text(no.valor, no.x, no.y);
      }

      limpar() {
        this.raiz = null;
        nosVisitados = [];
        valorBuscado = null;
      }
    }

    let arvore = new Arvore();

    function setup() {
      createCanvas(canvasWidth, canvasHeight);
      background(255);
    }

    function draw() {
      background(255);
      
      if (arvore.raiz) {
        arvore.calcularLarguras(arvore.raiz);
        arvore.posicionarNos(arvore.raiz, width / 2, 60, width - 40);
        arvore.desenhar(arvore.raiz);
      }
      
    }

    function inserir() {
      let valor = parseInt(document.getElementById("valor").value);
      if (!isNaN(valor)) {
        arvore.inserir(valor);
        document.getElementById("valor").value = "";
        nosVisitados = [];
        valorBuscado = null;
      }
    }

    function remover() {
      let valor = parseInt(document.getElementById("valor").value);
      if (!isNaN(valor)) {
        arvore.remover(valor);
        document.getElementById("valor").value = "";
        nosVisitados = [];
        valorBuscado = null;
      }
    }

    function buscar() {
      let valor = parseInt(document.getElementById("valor").value);
      let resultado = arvore.buscar(valor);
      valorBuscado = resultado ? valor : null;
      nosVisitados = [];
      
      document.getElementById("resultado").innerText = resultado
        ? "Valor " + valor + " encontrado na árvore."
        : "Valor " + valor + " não encontrado na árvore.";
    }

    function mostrarTravessia(tipo) {
      valorBuscado = null;
      nosVisitados = [];

      let resultado = "";
      if (tipo === "in") resultado = arvore.emOrdem();
      else if (tipo === "pre") resultado = arvore.preOrdem();
      else if (tipo === "post") resultado = arvore.posOrdem();

      document.getElementById("resultado").innerText =
        "Travessia " + tipo.toUpperCase() + ": " + resultado.join(" → ");
    }

    function buscarDFS() {
      let valor = parseInt(document.getElementById("valor").value);
      if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Digite um número válido.";
        return;
      }

      let resultado = arvore.dfsBusca(valor);
      valorBuscado = resultado ? valor : null;

      document.getElementById("resultado").innerText = resultado
        ? "DFS: Valor " + valor + " encontrado.\nCaminho: " + nosVisitados.join(" → ")
        : "DFS: Valor " + valor + " não encontrado.\nCaminho: " + nosVisitados.join(" → ");
    }

    function buscarBFS() {
      let valor = parseInt(document.getElementById("valor").value);
      if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Digite um número válido.";
        return;
      }

      let resultado = arvore.bfsBusca(valor);
      valorBuscado = resultado ? valor : null;

      document.getElementById("resultado").innerText = resultado
        ? "BFS: Valor " + valor + " encontrado.\nCaminho: " + nosVisitados.join(" → ")
        : "BFS: Valor " + valor + " não encontrado.\nCaminho: " + nosVisitados.join(" → ");
    }

    function limparArvore() {
      arvore.limpar();
      document.getElementById("resultado").innerText = "Árvore limpa.";
      document.getElementById("valor").value = "";
    }

    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById("valor").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          inserir();
        }
      });
    });