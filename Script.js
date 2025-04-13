// use dbChibi;

// Coleção cliente
db.cliente.insertMany([
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a336c"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Ana Beatriz Souza",
          "numero": "1234 5678 9012 3456",
          "cvv": "123",
          "tipo_pagamento": "Crédito",
          "saldo": 5000,
          "limite": 2000,
          "validade": {
            "mes": 12,
            "ano": 2030
          },
          "bandeira": "Visa"
        }
      ],
      "cpf": "123.456.789-01",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "ana.souza@gmail.com",
      "endereco": {
        "rua": "Av. Paulista",
        "estado": "SP",
        "cep": "01311-000"
      },
      "nome": "Ana Beatriz Souza",
      "senha": "ana@2025"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a336d"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Carlos Eduardo Lima",
          "numero": "2345 6789 0123 4567",
          "cvv": "234",
          "tipo_pagamento": "Débito",
          "saldo": 3000,
          "limite": 0,
          "validade": {
            "mes": 11,
            "ano": 2029
          },
          "bandeira": "MasterCard"
        }
      ],
      "cpf": "234.567.890-12",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "carlos.lima@gmail.com",
      "endereco": {
        "rua": "Rua das Palmeiras",
        "estado": "RJ",
        "cep": "22270-070"
      },
      "nome": "Carlos Eduardo Lima",
      "senha": "carlim123"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a336e"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Juliana Ferreira",
          "numero": "3456 7890 1234 5678",
          "cvv": "345",
          "tipo_pagamento": "Crédito",
          "saldo": 1500,
          "limite": 1000,
          "validade": {
            "mes": 8,
            "ano": 2031
          },
          "bandeira": "Elo"
        }
      ],
      "cpf": "345.678.901-23",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "juliana.ferreira@gmail.com",
      "endereco": {
        "rua": "Rua dos Andradas",
        "estado": "MG",
        "cep": "30120-010"
      },
      "nome": "Juliana Ferreira",
      "senha": "ju_fer@mg"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a336f"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Marcos Vinícius Ribeiro",
          "numero": "4567 8901 2345 6789",
          "cvv": "456",
          "tipo_pagamento": "Débito",
          "saldo": 700,
          "limite": 0,
          "validade": {
            "mes": 4,
            "ano": 2030
          },
          "bandeira": "Visa"
        }
      ],
      "cpf": "456.789.012-34",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "marcos.ribeiro@gmail.com",
      "endereco": {
        "rua": "Av. Sete de Setembro",
        "estado": "BA",
        "cep": "40060-001"
      },
      "nome": "Marcos Vinícius Ribeiro",
      "senha": "mvr_bahia"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a3370"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Fernanda Oliveira",
          "numero": "5678 9012 3456 7890",
          "cvv": "567",
          "tipo_pagamento": "Crédito",
          "saldo": 12000,
          "limite": 3000,
          "validade": {
            "mes": 1,
            "ano": 2033
          },
          "bandeira": "MasterCard"
        }
      ],
      "cpf": "567.890.123-45",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "fernanda.oliveira@gmail.com",
      "endereco": {
        "rua": "Rua dos Andradas",
        "estado": "RS",
        "cep": "90020-005"
      },
      "nome": "Fernanda Oliveira",
      "senha": "nandaOlv88"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a3371"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Lucas Martins",
          "numero": "6789 0123 4567 8901",
          "cvv": "678",
          "tipo_pagamento": "Débito",
          "saldo": 950,
          "limite": 0,
          "validade": {
            "mes": 6,
            "ano": 2031
          },
          "bandeira": "Elo"
        }
      ],
      "cpf": "678.901.234-56",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "lucas.martins@gmail.com",
      "endereco": {
        "rua": "Rua da Aurora",
        "estado": "PE",
        "cep": "50050-000"
      },
      "nome": "Lucas Martins",
      "senha": "luc4sAurora"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a3372"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Patrícia Mendes",
          "numero": "7890 1234 5678 9012",
          "cvv": "789",
          "tipo_pagamento": "Crédito",
          "saldo": 300,
          "limite": 500,
          "validade": {
            "mes": 2,
            "ano": 2032
          },
          "bandeira": "Visa"
        }
      ],
      "cpf": "789.012.345-67",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "patricia.mendes@gmail.com",
      "endereco": {
        "rua": "Av. Beira Mar",
        "estado": "CE",
        "cep": "60060-610"
      },
      "nome": "Patrícia Mendes",
      "senha": "pat_ce99"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a3373"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Rafael Costa",
          "numero": "8901 2345 6789 0123",
          "cvv": "890",
          "tipo_pagamento": "Débito",
          "saldo": 150,
          "limite": 0,
          "validade": {
            "mes": 10,
            "ano": 2031
          },
          "bandeira": "MasterCard"
        }
      ],
      "cpf": "890.123.456-78",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "rafael.costa@gmail.com",
      "endereco": {
        "rua": "Av. Djalma Batista",
        "estado": "AM",
        "cep": "69050-010"
      },
      "nome": "Rafael Costa",
      "senha": "rc_am80@"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a3374"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Larissa Silva",
          "numero": "9012 3456 7890 1234",
          "cvv": "901",
          "tipo_pagamento": "Crédito",
          "saldo": 999.99,
          "limite": 999.99,
          "validade": {
            "mes": 9,
            "ano": 2034
          },
          "bandeira": "Elo"
        }
      ],
      "cpf": "901.234.567-89",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "larissa.silva@gmail.com",
      "endereco": {
        "rua": "Av. Vicente Machado",
        "estado": "PR",
        "cep": "80420-011"
      },
      "nome": "Larissa Silva",
      "senha": "lari!pr93"
    },
    {
      "_id": {"$oid": "67f9040b191a3b7acc1a3375"},
      "_class": "com.example.Chibi.model.ClientModel",
      "adm": false,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Diego Rocha",
          "numero": "0123 4567 8901 2345",
          "cvv": "012",
          "tipo_pagamento": "Débito",
          "saldo": 50,
          "limite": 0,
          "validade": {
            "mes": 5,
            "ano": 2030
          },
          "bandeira": "Visa"
        },
        {
          "titular": "Diego Rocha",
          "numero": "0987 3674 8762 1233",
          "cvv": "012",
          "tipo_pagamento": "Crédito",
          "saldo": 0,
          "limite": 249.58,
          "validade": {
            "mes": 5,
            "ano": 2030
          },
          "bandeira": "Visa"
        }
      ],
      "cpf": "111.111.111-11",
      "data_nascimento": {"$date": "1989-12-31T02:00:00.000Z"},
      "email": "diego.rocha@gmail.com",
      "endereco": {
        "rua": "Av. Mauro Ramos",
        "estado": "SC",
        "cep": "88020-300"
      },
      "nome": "Diego Rocha",
      "senha": "diego2025@sc"
    },
    {
      "_id": {"$oid": "67fc11678e18d150c3973cfd"},
      "adm": true,
      "carrinho": [],
      "cartao": [
        {
          "titular": "Chibi Loja",
          "numero": "0123 4567 8901 2345",
          "cvv": "924",
          "tipo_pagamento": "Débito",
          "saldo": 5000,
          "limite": 0,
          "validade": {
            "mes": 2,
            "ano": 2032
          },
          "bandeira": "Visa"
        }
      ],
      "cpf": "012.345.678-90",
      "data_nascimento": {"$date": "1990-01-01T00:00:00.000Z"},
      "email": "chibi.loja.oficial@gmail.com",
      "endereco": {
        "rua": "Irineu José Bourdon, 335",
        "estado": "SP",
        "cep": "88020-300"
      },
      "nome": "Chibi Loja",
      "senha": "12345678"
    }
]);

// Coleção produto
db.produto.insertMany(
  [
    {
      "_id": {"$oid": "67bdee05bad2e60660df4833"},
      "categoria": ["Salgado"],
      "desconto": 0,
      "descricao": "Onigiri branco clássico com toque de gergelim",
      "marca": "Sakura",
      "nome": "Shirogiri",
      "preco": 19.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67bdee05bad2e60660df4831"},
      "categoria": ["Salgado"],
      "desconto": 0,
      "descricao": "Onigiri especial com chá matcha e gergelim",
      "marca": "Yamaha",
      "nome": "Matchagiri",
      "preco": 22.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67bdee05bad2e60660df4832"},
      "categoria": ["Salgado"],
      "desconto": 2.8,
      "descricao": "Onigiri de salmão com um toque cítrico",
      "marca": "Fujiwara",
      "nome": "NigiriSon",
      "preco": 29.3,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png",
      "_class": "com.example.Chibi.model.ProductModel"
    },
    {
      "_id": {"$oid": "67bdee05bad2e60660df4830"},
      "categoria": ["Salgado", "Quente"],
      "desconto": 0,
      "descricao": "Onigiri grelhado com crosta crocante",
      "marca": "Sakura",
      "nome": "YakiGiri",
      "preco": 27.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67bdee05bad2e60660df482f"},
      "categoria": ["Salgado", "Gelado"],
      "desconto": 1.9,
      "descricao": "Onigiri com arroz temperado e toque de cerejeira",
      "marca": "Fujiwara",
      "nome": "Sakuragiri",
      "preco": 24.75,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f524c"},
      "categoria": ["Salgado"],
      "desconto": 3,
      "descricao": "Onigiri simples com recheio de atum",
      "marca": "Jugemu",
      "nome": "TunaBall",
      "preco": 12.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5250"},
      "categoria": ["Doce"],
      "desconto": 0,
      "descricao": "Donut com cobertura de chocolate",
      "marca": "Yamaha",
      "nome": "ChocoRing",
      "preco": 13.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLIufLMGhZntmXSNGTirbVttwnqAzCQxvIpuOfZMaGOR_ZOunlOPP1kTfxnoB0g1-97G_UgVkxR2dGCOufxsragaDveSews1MWzfao2r-kOJjHkU1rAfB-6nEWlhM5Aacsc-67kOk7rg0B/s800/sweets_donut.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5251"},
      "categoria": ["Bebida", "Gelado"],
      "desconto": 0,
      "descricao": "Soda refrescante de limão",
      "marca": "Yamaha",
      "nome": "LemonFizz",
      "preco": 7.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5257"},
      "categoria": ["Bebida", "Gelado"],
      "desconto": 1,
      "descricao": "Soda artesanal de cereja",
      "marca": "Takaru",
      "nome": "CherryPop",
      "preco": 12.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f525b"},
      "categoria": ["Doce"],
      "desconto": 0.5,
      "descricao": "Dango com pasta de feijão doce",
      "marca": "Jugemu",
      "nome": "BeanDango",
      "preco": 13.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKi1wsdV_Y-W-2C-0QwKXyJSGrl2ur1hLmKTA7wvKv_AOCRKaKL6WS26ttuFoS3NafrsoXv26l6Eu7XErRB9LO24wFuDNSQ6NTxJBtdqGcUcH-YRcdJ-blGkYgm9BhszZECuJzJB-0xx8K/s800/sweets_dango02_koshian.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f525d"},
      "categoria": ["Bebida", "Gelado"],
      "desconto": 0,
      "descricao": "Chá gelado com limão",
      "marca": "Sakura",
      "nome": "LemonTea",
      "preco": 10.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGuOeE4kXo24Zu9VIylDTebQsDt_v1cKybA9kfYBOBpJ_EOrOHMwkKMYK2BHLyunujsMPX-dAn3VALILAOyL8-hhdm-_HCHZRSym_JX93xsJg-dcnqmeevGD-FF94CJ7tQ6pfiRKYO2Vc/s800/tea_lemon.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f525f"},
      "categoria": ["Salgado", "Quente"],
      "desconto": 0,
      "descricao": "Onigiri grelhado com miso",
      "marca": "Fujiwara",
      "nome": "MisoGrill",
      "preco": 29.8,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5260"},
      "categoria": ["Bebida"],
      "desconto": 2,
      "descricao": "Soda de laranja artesanal",
      "marca": "Jugemu",
      "nome": "OrangePop",
      "preco": 8,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5263"},
      "categoria": ["Bebida", "Quente"],
      "desconto": 0.5,
      "descricao": "Café espresso intenso",
      "marca": "Takaru",
      "nome": "EspressoShot",
      "preco": 13.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm7j4O9Fre9FhRX8tdlNhppCwhjAkoOPtG4s0-j8ClpkGFCix3cpZ9Kys7usPGEpOBmGGTZ70wgZSJEXKog8MP_BV0JJIHYEV9zPfjdJnOiWV2eWiCIZcMMP5-Wfyiv5r9caNxvFAm0Mg/s400/cafe_coffee_cup.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5266"},
      "categoria": ["Bebida", "Gelado"],
      "desconto": 0,
      "descricao": "Soda de maçã verde",
      "marca": "Yamaha",
      "nome": "AppleFizz",
      "preco": 8.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhwvBzyP7KBRHD8T-XzMnAmn4Jm0x23e40S-LrxsSglGjlK_HIgZEOPQJU8Mmpny7qqU9Wr6pHw2E6_in6Kz49rN9P693dlJT5WIW0X8X1A7xAsPgiXlTEFvQYEjYEl6fYnEHyE9bzy5Z/s1600/drink_cola_petbottle.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f524d"},
      "categoria": ["Doce"],
      "desconto": 2,
      "descricao": "Dango doce com calda de açúcar",
      "marca": "Jugemu",
      "nome": "SugarDango",
      "preco": 14.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW98sgaelSwCCHQShK-HmW-2Mu6KyFSxunIX68ZR-gUhh7oTBrBXH8y3byHIe9ixrsA3cgLsH06o3UI83TD4WFOx2sair0XnT660TMcePdrn2d4Ut9BIyt0APHroWNyxvaRBT0WJQWJATR/s800/sweets_dango06_mitarashi.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f525c"},
      "categoria": ["Salgado"],
      "desconto": 0,
      "descricao": "Onigiri com umeboshi",
      "marca": "Yamaha",
      "nome": "UmeBall",
      "preco": 14,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f525e"},
      "categoria": ["Doce"],
      "desconto": 1.2,
      "descricao": "Donut colorido de unicórnio",
      "marca": "Takaru",
      "nome": "UnicornRing",
      "preco": 26,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7uMiml3LkioMZ0KhAyv0JVzRcNeYqOSsDE_kFV78pmovpnxWQGSizHoTH6DbjuClEJ6mts2dKihrftLPKhj9aqIfrNEB0m_RfVquncIXJuFX8WQPuIgHA2Motg1_rA0ps73fpq8_kDBBU/s800/unicorn_food_sweets_donut.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5261"},
      "categoria": ["Doce"],
      "desconto": 0,
      "descricao": "Dango com calda de mitarashi",
      "marca": "Yamaha",
      "nome": "MitaDango",
      "preco": 16.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW98sgaelSwCCHQShK-HmW-2Mu6KyFSxunIX68ZR-gUhh7oTBrBXH8y3byHIe9ixrsA3cgLsH06o3UI83TD4WFOx2sair0XnT660TMcePdrn2d4Ut9BIyt0APHroWNyxvaRBT0WJQWJATR/s800/sweets_dango06_mitarashi.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f524e"},
      "categoria": ["Bebida"],
      "desconto": 1.5,
      "descricao": "Chá verde gelado simples",
      "marca": "Jugemu",
      "nome": "GreenIced",
      "preco": 6.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGuOeE4kXo24Zu9VIylDTebQsDt_v1cKybA9kfYBOBpJ_EOrOHMwkKMYK2BHLyunujsMPX-dAn3VALILAOyL8-hhdm-_HCHZRSym_JX93xsJg-dcnqmeevGD-FF94CJ7tQ6pfiRKYO2Vc/s800/tea_lemon.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5253"},
      "categoria": ["Salgado", "Quente"],
      "desconto": 0,
      "descricao": "Onigiri grelhado com crosta crocante",
      "marca": "Sakura",
      "nome": "YakiGiri",
      "preco": 27.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5254"},
      "categoria": ["Bebida"],
      "desconto": 0,
      "descricao": "Café quente suave",
      "marca": "Sakura",
      "nome": "SmoothBrew",
      "preco": 9.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm7j4O9Fre9FhRX8tdlNhppCwhjAkoOPtG4s0-j8ClpkGFCix3cpZ9Kys7usPGEpOBmGGTZ70wgZSJEXKog8MP_BV0JJIHYEV9zPfjdJnOiWV2eWiCIZcMMP5-Wfyiv5r9caNxvFAm0Mg/s400/cafe_coffee_cup.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5264"},
      "categoria": ["Doce"],
      "desconto": 0,
      "descricao": "Dango tricolor artesanal",
      "marca": "Fujiwara",
      "nome": "EliteDango",
      "preco": 29.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4nhiR-t6nn8j42_I5WNuNwMB41bEL9S32AjQfKp52u1WOfQTeKjL4w5dXxXlc1a19mVi-DKO8V3uB1POkKAM1J5ejToKYg8rtMtWhfMzaQTPuMhG5TKTIXvQIjrd8VKn-6MhilzIVS0g/s800/sweets_sansyoku_dango.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5265"},
      "categoria": ["Salgado"],
      "desconto": 1.5,
      "descricao": "Onigiri com frango teriyaki",
      "marca": "Jugemu",
      "nome": "TeriBall",
      "preco": 15,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5268"},
      "categoria": ["Salgado", "Quente"],
      "desconto": 0,
      "descricao": "Onigiri grelhado com katsu",
      "marca": "Takaru",
      "nome": "KatsuGrill",
      "preco": 27,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5269"},
      "categoria": ["Bebida", "Quente"],
      "desconto": 0,
      "descricao": "Chá preto com especiarias",
      "marca": "Fujiwara",
      "nome": "SpiceTea",
      "preco": 14,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGuOeE4kXo24Zu9VIylDTebQsDt_v1cKybA9kfYBOBpJ_EOrOHMwkKMYK2BHLyunujsMPX-dAn3VALILAOyL8-hhdm-_HCHZRSym_JX93xsJg-dcnqmeevGD-FF94CJ7tQ6pfiRKYO2Vc/s800/tea_lemon.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f524f"},
      "categoria": ["Salgado", "Quente"],
      "desconto": 0,
      "descricao": "Onigiri grelhado com shoyu",
      "marca": "Yamaha",
      "nome": "GrillSoy",
      "preco": 15.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5252"},
      "categoria": ["Salgado"],
      "desconto": 0,
      "descricao": "Onigiri branco clássico com toque de gergelim",
      "marca": "Sakura",
      "nome": "Shirogiri",
      "preco": 19.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5255"},
      "categoria": ["Doce"],
      "desconto": 1.5,
      "descricao": "Dango tricolor premium",
      "marca": "Takaru",
      "nome": "TriadDango",
      "preco": 25,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4nhiR-t6nn8j42_I5WNuNwMB41bEL9S32AjQfKp52u1WOfQTeKjL4w5dXxXlc1a19mVi-DKO8V3uB1POkKAM1J5ejToKYg8rtMtWhfMzaQTPuMhG5TKTIXvQIjrd8VKn-6MhilzIVS0g/s800/sweets_sansyoku_dango.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5256"},
      "categoria": ["Salgado"],
      "desconto": 2,
      "descricao": "Onigiri com recheio de camarão",
      "marca": "Takaru",
      "nome": "ShrimpBall",
      "preco": 28.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5259"},
      "categoria": ["Doce"],
      "desconto": 1,
      "descricao": "Donut artesanal com recheio de creme",
      "marca": "Fujiwara",
      "nome": "CreamDream",
      "preco": 29.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgciOe8t5Tlot1ADpSSXG-SrbtlpglIi3f10aSpOEWKnfaTQFjT5yMhzsVkdT-2cb6boofA7fDZ5Xyf8Cxdvo0YxrvF5oPHfuTAntAhgbChKFZ0UXiG6Z-0kCrWdJ0BbNrN0tNTnwHMjbs7/s800/pan_anko_donut.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f525a"},
      "categoria": ["Bebida", "Quente"],
      "desconto": 0,
      "descricao": "Café premium com notas de caramelo",
      "marca": "Fujiwara",
      "nome": "CaramelBrew",
      "preco": 14.99,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm7j4O9Fre9FhRX8tdlNhppCwhjAkoOPtG4s0-j8ClpkGFCix3cpZ9Kys7usPGEpOBmGGTZ70wgZSJEXKog8MP_BV0JJIHYEV9zPfjdJnOiWV2eWiCIZcMMP5-Wfyiv5r9caNxvFAm0Mg/s400/cafe_coffee_cup.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5262"},
      "categoria": ["Salgado"],
      "desconto": 0,
      "descricao": "Onigiri com alga crocante",
      "marca": "Sakura",
      "nome": "NoriCrisp",
      "preco": 22,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5VsD60JSuXklQr5dxCgcxAlKLTgz-FGPBNgiXP0E7NSAZEnPp1WYAZRFbk3jbXFmLyF7snR62YHhf-S5G9zrh22cgCmZcsZq_0H8Ie6Mb_cGFzdfsmlKy85jMam0FTrwsvijBiSemBbID/s180-c/onigiri_maru.png"
    },
    {
      "_id": {"$oid": "67f2a06cd0c8b797886f5267"},
      "categoria": ["Doce"],
      "desconto": 0,
      "descricao": "Donut com recheio de azuki",
      "marca": "Sakura",
      "nome": "AzukiRing",
      "preco": 23.5,
      "url_imagem": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgciOe8t5Tlot1ADpSSXG-SrbtlpglIi3f10aSpOEWKnfaTQFjT5yMhzsVkdT-2cb6boofA7fDZ5Xyf8Cxdvo0YxrvF5oPHfuTAntAhgbChKFZ0UXiG6Z-0kCrWdJ0BbNrN0tNTnwHMjbs7/s800/pan_anko_donut.png"
    }
  ]
);
