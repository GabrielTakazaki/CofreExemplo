# language: en
Feature: SenhaInvalida
  Como um usuário eu devoo
  inserir uma senha inválida
  e o sistema deve retornar uma mensagem
  de senha inválida

  Scenario: Adicionar uma senha
    Given pressionei o botao 123466
    When pressionei entrar
    Then a mensagem "senha errada. Tente novamente" deve aparecer