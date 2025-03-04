use dbChibi;

// Coleção cliente
db.cliente.insertMany([
  {
    "_id": ObjectId("67bde97cbad2e60660df4813"),
    "carrinho": [],
    "cartao": [
      {
        "tipo_pagamento": "Cartão de Crédito",
        "saldo": 200,
        "limite": 6000,
        "validade": { "mes": 11, "ano": 27 }
      }
    ],
    "cpf": "22334455667",
    "email": "ricardo.mendes@email.com",
    "endereco": {
      "rua": "Avenida Central",
      "estado": "Bahia",
      "cep": "40020-200"
    },
    "idade": 40,
    "nome": "Ricardo Mendes",
    "senha": "rickyM@2025"
  },
  {
    "_id": ObjectId("67bde97cbad2e60660df4810"),
    "carrinho": [],
    "cartao": [
      {
        "tipo_pagamento": "Cartão de Crédito",
        "saldo": 100,
        "limite": 5000,
        "validade": { "mes": 3, "ano": 24 }
      }
    ],
    "cpf": "12345678901",
    "email": "ana.souza@email.com",
    "endereco": {
      "rua": "Takei Abonba",
      "estado": "Acre",
      "cep": "04113-481"
    },
    "idade": 29,
    "nome": "Ana Souza",
    "senha": "oavnivn123456"
  },
  {
    "_id": ObjectId("67bde97cbad2e60660df4811"),
    "carrinho": [],
    "cartao": [
      {
        "tipo_pagamento": "Cartão de Débito",
        "saldo": 1200,
        "limite": 0,
        "validade": { "mes": 8, "ano": 25 }
      }
    ],
    "cpf": "98765432100",
    "email": "carlos.lima@email.com",
    "endereco": {
      "rua": "Avenida Brasil",
      "estado": "São Paulo",
      "cep": "01010-000"
    },
    "idade": 35,
    "nome": "Carlos Lima",
    "senha": "senha123abc"
  },
  {
    "_id": ObjectId("67bde97cbad2e60660df4812"),
    "carrinho": [],
    "cartao": [
      {
        "tipo_pagamento": "Cartão de Crédito",
        "saldo": 500,
        "limite": 4000,
        "validade": { "mes": 6, "ano": 26 }
      }
    ],
    "cpf": "11223344556",
    "email": "mariana.oliveira@email.com",
    "endereco": {
      "rua": "Rua da Liberdade",
      "estado": "Minas Gerais",
      "cep": "30130-100"
    },
    "idade": 27,
    "nome": "Mariana Oliveira",
    "senha": "mari2024secure"
  },
  {
    "_id": ObjectId("67bde97cbad2e60660df4814"),
    "carrinho": [],
    "cartao": [
      {
        "tipo_pagamento": "Cartão de Débito",
        "saldo": 2500,
        "limite": 0,
        "validade": { "mes": 4, "ano": 29 }
      }
    ],
    "cpf": "33445566778",
    "email": "juliana.castro@email.com",
    "endereco": {
      "rua": "Rua das Palmeiras",
      "estado": "Rio de Janeiro",
      "cep": "20031-050"
    },
    "idade": 31,
    "nome": "Juliana Castro",
    "senha": "JuhSecurePass12"
  }
]);

// Coleção produto
db.produto.insertMany([
  {
    "_id": ObjectId("67bdee05bad2e60660df4832"),
    "categoria": ["Salgado"],
    "desconto": 2.8,
    "descricao": "Onigiri de salmão com um toque cítrico",
    "marca": "Fujiwara",
    "nome": "NigiriSun",
    "preco": 29.3,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "_id": ObjectId("67bdee05bad2e60660df4830"),
    "categoria": ["Salgado", "Quente"],
    "desconto": 2.5,
    "descricao": "Onigiri grelhado com crosta crocante",
    "marca": "Sakura",
    "nome": "YakiGiri",
    "preco": 27.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "_id": ObjectId("67bdee05bad2e60660df4833"),
    "categoria": ["Salgado"],
    "desconto": 1.4,
    "descricao": "Onigiri branco clássico com toque de gergelim",
    "marca": "Sakura",
    "nome": "Shirogiri",
    "preco": 19.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "_id": ObjectId("67bdee05bad2e60660df482f"),
    "categoria": ["Salgado", "Gelado"],
    "desconto": 1.9,
    "descricao": "Onigiri com arroz temperado e toque de cerejeira",
    "marca": "Fujiwara",
    "nome": "Sakuragiri",
    "preco": 24.75,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "_id": ObjectId("67bdee05bad2e60660df4831"),
    "categoria": ["Salgado"],
    "desconto": 1.7,
    "descricao": "Onigiri especial com chá matcha e gergelim",
    "marca": "Yamaha",
    "nome": "Matchagiri",
    "preco": 22.5,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  }
]);
