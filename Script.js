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

db.produto.insertMany([
  // Jugemu (Barato, bastante desconto)
  {
    "categoria": ["Salgado"],
    "desconto": 3.0,
    "descricao": "Onigiri simples com recheio de atum",
    "marca": "Jugemu",
    "nome": "TunaBall",
    "preco": 12.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Doce"],
    "desconto": 2.0,
    "descricao": "Dango doce com calda de açúcar",
    "marca": "Jugemu",
    "nome": "SugarDango",
    "preco": 14.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW98sgaelSwCCHQShK-HmW-2Mu6KyFSxunIX68ZR-gUhh7oTBrBXH8y3byHIe9ixrsA3cgLsH06o3UI83TD4WFOx2sair0XnT660TMcePdrn2d4Ut9BIyt0APHroWNyxvaRBT0WJQWJATR/s800/sweets_dango06_mitarashi.png"
  },
  {
    "categoria": ["Bebida"],
    "desconto": 1.5,
    "descricao": "Chá verde gelado simples",
    "marca": "Jugemu",
    "nome": "GreenIced",
    "preco": 6.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGuOeE4kXo24Zu9VIylDTebQsDt_v1cKybA9kfYBOBpJ_EOrOHMwkKMYK2BHLyunujsMPX-dAn3VALILAOyL8-hhdm-_HCHZRSym_JX93xsJg-dcnqmeevGD-FF94CJ7tQ6pfiRKYO2Vc/s800/tea_lemon.png"
  },

  // Yamaha (Barato)
  {
    "categoria": ["Salgado", "Quente"],
    "desconto": 0,
    "descricao": "Onigiri grelhado com shoyu",
    "marca": "Yamaha",
    "nome": "GrillSoy",
    "preco": 15.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Doce"],
    "desconto": 1.0,
    "descricao": "Donut com cobertura de chocolate",
    "marca": "Yamaha",
    "nome": "ChocoRing",
    "preco": 13.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLIufLMGhZntmXSNGTirbVttwnqAzCQxvIpuOfZMaGOR_ZOunlOPP1kTfxnoB0g1-97G_UgVkxR2dGCOufxsragaDveSews1MWzfao2r-kOJjHkU1rAfB-6nEWlhM5Aacsc-67kOk7rg0B/s800/sweets_donut.png"
  },
  {
    "categoria": ["Bebida", "Gelado"],
    "desconto": 0.5,
    "descricao": "Soda refrescante de limão",
    "marca": "Yamaha",
    "nome": "LemonFizz",
    "preco": 7.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
  },

  // Sakura (Mediana, preços na média)
  {
    "categoria": ["Salgado"],
    "desconto": 1.4,
    "descricao": "Onigiri branco clássico com toque de gergelim",
    "marca": "Sakura",
    "nome": "Shirogiri",
    "preco": 19.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Salgado", "Quente"],
    "desconto": 2.5,
    "descricao": "Onigiri grelhado com crosta crocante",
    "marca": "Sakura",
    "nome": "YakiGiri",
    "preco": 27.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Bebida"],
    "desconto": 1.0,
    "descricao": "Café quente suave",
    "marca": "Sakura",
    "nome": "SmoothBrew",
    "preco": 9.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm7j4O9Fre9FhRX8tdlNhppCwhjAkoOPtG4s0-j8ClpkGFCix3cpZ9Kys7usPGEpOBmGGTZ70wgZSJEXKog8MP_BV0JJIHYEV9zPfjdJnOiWV2eWiCIZcMMP5-Wfyiv5r9caNxvFAm0Mg/s400/cafe_coffee_cup.png"
  },

  // Takaru (Cara, porém acessível)
  {
    "categoria": ["Doce"],
    "desconto": 1.5,
    "descricao": "Dango tricolor premium",
    "marca": "Takaru",
    "nome": "TriadDango",
    "preco": 25.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4nhiR-t6nn8j42_I5WNuNwMB41bEL9S32AjQfKp52u1WOfQTeKjL4w5dXxXlc1a19mVi-DKO8V3uB1POkKAM1J5ejToKYg8rtMtWhfMzaQTPuMhG5TKTIXvQIjrd8VKn-6MhilzIVS0g/s800/sweets_sansyoku_dango.png"
  },
  {
    "categoria": ["Salgado"],
    "desconto": 2.0,
    "descricao": "Onigiri com recheio de camarão",
    "marca": "Takaru",
    "nome": "ShrimpBall",
    "preco": 28.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Bebida", "Gelado"],
    "desconto": 1.0,
    "descricao": "Soda artesanal de cereja",
    "marca": "Takaru",
    "nome": "CherryPop",
    "preco": 12.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
  },

  // Fujiwara (Careira, melhor qualidade)
  {
    "categoria": ["Salgado"],
    "desconto": 0,
    "descricao": "Onigiri de salmão com um toque cítrico",
    "marca": "Fujiwara",
    "nome": "NigiriSun",
    "preco": 29.30,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Doce"],
    "desconto": 1.0,
    "descricao": "Donut artesanal com recheio de creme",
    "marca": "Fujiwara",
    "nome": "CreamDream",
    "preco": 29.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgciOe8t5Tlot1ADpSSXG-SrbtlpglIi3f10aSpOEWKnfaTQFjT5yMhzsVkdT-2cb6boofA7fDZ5Xyf8Cxdvo0YxrvF5oPHfuTAntAhgbChKFZ0UXiG6Z-0kCrWdJ0BbNrN0tNTnwHMjbs7/s800/pan_anko_donut.png"
  },
  {
    "categoria": ["Bebida", "Quente"],
    "desconto": 0,
    "descricao": "Café premium com notas de caramelo",
    "marca": "Fujiwara",
    "nome": "CaramelBrew",
    "preco": 14.99,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm7j4O9Fre9FhRX8tdlNhppCwhjAkoOPtG4s0-j8ClpkGFCix3cpZ9Kys7usPGEpOBmGGTZ70wgZSJEXKog8MP_BV0JJIHYEV9zPfjdJnOiWV2eWiCIZcMMP5-Wfyiv5r9caNxvFAm0Mg/s400/cafe_coffee_cup.png"
  },

  // Adicionando mais produtos para chegar a 30
  {
    "categoria": ["Doce"],
    "desconto": 0.5,
    "descricao": "Dango com pasta de feijão doce",
    "marca": "Jugemu",
    "nome": "BeanDango",
    "preco": 13.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKi1wsdV_Y-W-2C-0QwKXyJSGrl2ur1hLmKTA7wvKv_AOCRKaKL6WS26ttuFoS3NafrsoXv26l6Eu7XErRB9LO24wFuDNSQ6NTxJBtdqGcUcH-YRcdJ-blGkYgm9BhszZECuJzJB-0xx8K/s800/sweets_dango02_koshian.png"
  },
  {
    "categoria": ["Salgado"],
    "desconto": 0,
    "descricao": "Onigiri com umeboshi",
    "marca": "Yamaha",
    "nome": "UmeBall",
    "preco": 14.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Bebida", "Gelado"],
    "desconto": 0.8,
    "descricao": "Chá gelado com limão",
    "marca": "Sakura",
    "nome": "LemonTea",
    "preco": 10.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGuOeE4kXo24Zu9VIylDTebQsDt_v1cKybA9kfYBOBpJ_EOrOHMwkKMYK2BHLyunujsMPX-dAn3VALILAOyL8-hhdm-_HCHZRSym_JX93xsJg-dcnqmeevGD-FF94CJ7tQ6pfiRKYO2Vc/s800/tea_lemon.png"
  },
  {
    "categoria": ["Doce"],
    "desconto": 1.2,
    "descricao": "Donut colorido de unicórnio",
    "marca": "Takaru",
    "nome": "UnicornRing",
    "preco": 26.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7uMiml3LkioMZ0KhAyv0JVzRcNeYqOSsDE_kFV78pmovpnxWQGSizHoTH6DbjuClEJ6mts2dKihrftLPKhj9aqIfrNEB0m_RfVquncIXJuFX8WQPuIgHA2Motg1_rA0ps73fpq8_kDBBU/s800/unicorn_food_sweets_donut.png"
  },
  {
    "categoria": ["Salgado", "Quente"],
    "desconto": 0,
    "descricao": "Onigiri grelhado com miso",
    "marca": "Fujiwara",
    "nome": "MisoGrill",
    "preco": 29.80,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Bebida"],
    "desconto": 2.0,
    "descricao": "Soda de laranja artesanal",
    "marca": "Jugemu",
    "nome": "OrangePop",
    "preco": 8.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
  },
  {
    "categoria": ["Doce"],
    "desconto": 0,
    "descricao": "Dango com calda de mitarashi",
    "marca": "Yamaha",
    "nome": "MitaDango",
    "preco": 16.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW98sgaelSwCCHQShK-HmW-2Mu6KyFSxunIX68ZR-gUhh7oTBrBXH8y3byHIe9ixrsA3cgLsH06o3UI83TD4WFOx2sair0XnT660TMcePdrn2d4Ut9BIyt0APHroWNyxvaRBT0WJQWJATR/s800/sweets_dango06_mitarashi.png"
  },
  {
    "categoria": ["Salgado"],
    "desconto": 1.0,
    "descricao": "Onigiri com alga crocante",
    "marca": "Sakura",
    "nome": "NoriCrisp",
    "preco": 22.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Bebida", "Quente"],
    "desconto": 0.5,
    "descricao": "Café espresso intenso",
    "marca": "Takaru",
    "nome": "EspressoShot",
    "preco": 13.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm7j4O9Fre9FhRX8tdlNhppCwhjAkoOPtG4s0-j8ClpkGFCix3cpZ9Kys7usPGEpOBmGGTZ70wgZSJEXKog8MP_BV0JJIHYEV9zPfjdJnOiWV2eWiCIZcMMP5-Wfyiv5r9caNxvFAm0Mg/s400/cafe_coffee_cup.png"
  },
  {
    "categoria": ["Doce"],
    "desconto": 0,
    "descricao": "Dango tricolor artesanal",
    "marca": "Fujiwara",
    "nome": "EliteDango",
    "preco": 29.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4nhiR-t6nn8j42_I5WNuNwMB41bEL9S32AjQfKp52u1WOfQTeKjL4w5dXxXlc1a19mVi-DKO8V3uB1POkKAM1J5ejToKYg8rtMtWhfMzaQTPuMhG5TKTIXvQIjrd8VKn-6MhilzIVS0g/s800/sweets_sansyoku_dango.png"
  },
  {
    "categoria": ["Salgado"],
    "desconto": 1.5,
    "descricao": "Onigiri com frango teriyaki",
    "marca": "Jugemu",
    "nome": "TeriBall",
    "preco": 15.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Bebida", "Gelado"],
    "desconto": 0,
    "descricao": "Soda de maçã verde",
    "marca": "Yamaha",
    "nome": "AppleFizz",
    "preco": 8.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
  },
  {
    "categoria": ["Doce"],
    "desconto": 1.0,
    "descricao": "Donut com recheio de azuki",
    "marca": "Sakura",
    "nome": "AzukiRing",
    "preco": 23.50,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgciOe8t5Tlot1ADpSSXG-SrbtlpglIi3f10aSpOEWKnfaTQFjT5yMhzsVkdT-2cb6boofA7fDZ5Xyf8Cxdvo0YxrvF5oPHfuTAntAhgbChKFZ0UXiG6Z-0kCrWdJ0BbNrN0tNTnwHMjbs7/s800/pan_anko_donut.png"
  },
  {
    "categoria": ["Salgado", "Quente"],
    "desconto": 0,
    "descricao": "Onigiri grelhado com katsu",
    "marca": "Takaru",
    "nome": "KatsuGrill",
    "preco": 27.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
  },
  {
    "categoria": ["Bebida", "Quente"],
    "desconto": 0,
    "descricao": "Chá preto com especiarias",
    "marca": "Fujiwara",
    "nome": "SpiceTea",
    "preco": 14.00,
    "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGuOeE4kXo24Zu9VIylDTebQsDt_v1cKybA9kfYBOBpJ_EOrOHMwkKMYK2BHLyunujsMPX-dAn3VALILAOyL8-hhdm-_HCHZRSym_JX93xsJg-dcnqmeevGD-FF94CJ7tQ6pfiRKYO2Vc/s800/tea_lemon.png"
  }
]);
