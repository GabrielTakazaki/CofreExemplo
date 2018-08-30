$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cofre/TravadoCofrePMTest.feature");
formatter.feature({
  "name": "SenhaInvalida",
  "description": "  Como um usuário eu devoo\n  inserir uma senha inválida\n  e o sistema deve retornar uma mensagem\n  de senha inválida",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adicionar uma senha",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "pressionei o botao 123466",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoCofrePMTest.pressionei_o_botao(int)"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat cofre.TravadoCofrePMTest.pressionei_o_botao(TravadoCofrePMTest.java:88)\r\n\tat ✽.pressionei o botao 123466(cofre/TravadoCofrePMTest.feature:9)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "pressionei entrar",
  "keyword": "When "
});
formatter.match({
  "location": "TravadoCofrePMTest.pressionei_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "a mensagem \"senha errada. Tente novamente\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "TravadoCofrePMTest.a_mensagem_deve_aparecer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("cofre/cofreCocumber.feature");
formatter.feature({
  "name": "Validacao",
  "description": "  Como um usuario\n  eu quero verificar se a senha\n  eh valida",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Adicionar senhas invalidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei \u003cstring\u003e no cofre",
  "keyword": "Given "
});
formatter.step({
  "name": "eu pressionar validacao",
  "keyword": "When "
});
formatter.step({
  "name": "o resultado deve ser \u003csaida\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "string",
        "saida"
      ]
    },
    {
      "cells": [
        "\"123\"",
        "true"
      ]
    },
    {
      "cells": [
        "\"1234444\"",
        "true"
      ]
    },
    {
      "cells": [
        "\"\"",
        "false"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Adicionar senhas invalidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei \"123\" no cofre",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "eu pressionar validacao",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "o resultado deve ser true",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Adicionar senhas invalidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei \"1234444\" no cofre",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "eu pressionar validacao",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "o resultado deve ser true",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Adicionar senhas invalidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei \"\" no cofre",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "eu pressionar validacao",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "o resultado deve ser false",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});