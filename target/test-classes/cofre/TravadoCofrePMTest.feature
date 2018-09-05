# language: en
Feature: Destravar o cofre
  Como um usuário eu devo
  inserir uma senha valida
  e o sistema deve retornar uma mensagem
  de senha correta. Cofre aberto

  Scenario: CofreInicial
    Given que liguei o cofre
    Then a mensagem de senha "Entre com a senha 6 digitos" deve aparecer

  Scenario: CofreLimpo
    Given que limpo o display
    Then a tela limpa "" deve aparecer

  Scenario: PortaAberta
    Given que a porta esta aberta
    When eu digitar qualquer coisa como 5 na senha
    Then a mensagem "Feche a porta antes de digitar a senha"

  Scenario: PortaFechadaGravarSenha
    Given que digito a senha com a porta fechada
    When eu digitar 1
    Then a senha "1" aparece no display
    When eu digitar 9
    Then a senha "19" aparece no display
    When eu digitar 3
    Then a senha "193" aparece no display
    When eu digitar 5
    Then a senha "1935" aparece no display
    When eu digitar 6
    Then a senha "19356" aparece no display
    When eu digitar 6
    Then a senha "193566" aparece no display
    When aperto Ok
    Then o display "Senha salva. Cofre trancado" deve aparecer

  Scenario: DigitarSenhaValida
    Given que digito a senha
    When eu digitar 1
    And eu digitar 2
    And eu digitar 3
    And eu digitar 4
    And eu digitar 6
    And eu digitar 6
    Then a senha valida "123466" aparece no display
    When aperto Ok
    Then o display de "senha correta. Cofre aberto" deve aparecer
