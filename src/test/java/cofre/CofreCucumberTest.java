/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cofre;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author Minoru
 */
public class CofreCucumberTest extends CofrePMTest {

    public CofreCucumberTest() {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);
    }

    @Given("^que liguei o cofre$")
    public void que_liguei_o_cofre() throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.FALSE);
    }

    @Then("^a mensagem de senha \"([^\"]*)\" deve aparecer$")
    public void a_mensagem_de_senha_deve_aparecer(String arg1) throws Exception {
        assertEquals(arg1, cofrePM.getDisplay());
        verify(sensorMock).destravar();
    }

    @Given("^que limpo o display$")
    public void que_limpo_o_display() throws Exception {
        cofrePM.clear();
    }

    @Then("^a tela limpa \"([^\"]*)\" deve aparecer$")
    public void a_tela_limpa_deve_aparecer(String arg1) throws Exception {
        assertEquals(arg1, cofrePM.getDisplay());
    }

    @Given("^que a porta esta aberta$")
    public void que_a_porta_esta_aberta() throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.FALSE);
    }

    @When("^eu digitar qualquer coisa como (\\d+) na senha$")
    public void eu_digitar_qualquer_coisa_como_na_senha(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
    }

    @Then("^a mensagem \"([^\"]*)\"$")
    public void a_mensagem(String arg1) throws Exception {
        assertEquals(arg1, cofrePM.getDisplay());
        cofrePM.clear();
        cofrePM.ok();
    }

    @Given("^que digito a senha com a porta fechada$")
    public void que_digito_a_senha_com_a_porta_fechada() throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
    }

    @When("^eu digitar (\\d+)$")
    public void eu_digitar(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
    }

    @Then("^a senha \"([^\"]*)\" aparece no display$")
    public void a_senha_aparece_no_display(String arg1) throws Exception {
        assertEquals(arg1, cofrePM.getDisplay());
    }

    @When("^aperto Ok$")
    public void aperto_Ok() throws Exception {
        cofrePM.ok();
    }

    @Then("^o display \"([^\"]*)\" deve aparecer$")
    public void o_display_deve_aparecer(String arg1) throws Exception {
        assertEquals(arg1, cofrePM.getDisplay());
        verify(sensorMock).travar();
        verify(memoriaMock).salvarSenha("193566");
    }

    @Given("^que digito a senha$")
    public void que_digito_a_senha() throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha())
                .thenReturn("123466");
    }

    @Then("^a senha valida \"([^\"]*)\" aparece no display$")
    public void a_senha_valida_aparece_no_display(String arg1) throws Exception {
        assertEquals(arg1, cofrePM.getDisplay());
    }

    @Then("^o display de \"([^\"]*)\" deve aparecer$")
    public void o_display_de_deve_aparecer(String arg1) throws Exception {
        assertEquals("senha correta. Cofre aberto", cofrePM.getDisplay());

        verify(sensorMock, times(2)).destravar(); //destravar eh chamado pelo construtor tb
    }

}
