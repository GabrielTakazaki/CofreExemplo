# language: en
Feature: Validacao
  Como um usuario
  eu quero verificar se a senha
  eh valida

  Scenario Outline: Adicionar senhas invalidas
    Given que eu entrei <string> no cofre
    When eu pressionar validacao
    Then o resultado deve ser <saida>

    Examples: 
      | string    | saida  |
      | "123"     | true   |
      | "1234444" | true   |
      | ""        | false  |

