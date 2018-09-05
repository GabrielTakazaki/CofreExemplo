$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cofre/TravadoCofrePMTest.feature");
formatter.feature({
  "name": "Destravar o cofre",
  "description": "  Como um usuário eu devo\n  inserir uma senha valida\n  e o sistema deve retornar uma mensagem\n  de senha correta. Cofre aberto",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "CofreInicial",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que liguei o cofre",
  "keyword": "Given "
});
formatter.match({
  "location": "CofreCucumberTest.que_liguei_o_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem de senha \"Entre com a senha 6 digitos\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_mensagem_de_senha_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CofreLimpo",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que limpo o display",
  "keyword": "Given "
});
formatter.match({
  "location": "CofreCucumberTest.que_limpo_o_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tela limpa \"\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_tela_limpa_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PortaAberta",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta esta aberta",
  "keyword": "Given "
});
formatter.match({
  "location": "CofreCucumberTest.que_a_porta_esta_aberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar qualquer coisa como 5 na senha",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar_qualquer_coisa_como_na_senha(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"Feche a porta antes de digitar a senha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PortaFechadaGravarSenha",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que digito a senha com a porta fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "CofreCucumberTest.que_digito_a_senha_com_a_porta_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 1",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"1\" aparece no display",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_senha_aparece_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 9",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"19\" aparece no display",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_senha_aparece_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 3",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"193\" aparece no display",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_senha_aparece_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 5",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"1935\" aparece no display",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_senha_aparece_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 6",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"19356\" aparece no display",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_senha_aparece_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 6",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"193566\" aparece no display",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_senha_aparece_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aperto Ok",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.aperto_Ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o display \"Senha salva. Cofre trancado\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.o_display_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "DigitarSenhaValida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que digito a senha",
  "keyword": "Given "
});
formatter.match({
  "location": "CofreCucumberTest.que_digito_a_senha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 1",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 2",
  "keyword": "And "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 3",
  "keyword": "And "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 4",
  "keyword": "And "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 6",
  "keyword": "And "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar 6",
  "keyword": "And "
});
formatter.match({
  "location": "CofreCucumberTest.eu_digitar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha valida \"123466\" aparece no display",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.a_senha_valida_aparece_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aperto Ok",
  "keyword": "When "
});
formatter.match({
  "location": "CofreCucumberTest.aperto_Ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o display de \"senha correta. Cofre aberto\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "CofreCucumberTest.o_display_de_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
});