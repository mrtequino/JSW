/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tq.rag.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

/**
 *
 * @author dpeniafiel
 */
@JsonRootName("SeguUsuario")
public class SeguUsuario {

    @JsonProperty(value = "usuaCodigo")
    private String usua_codigo;

    @JsonProperty(value = "usuaUsuario")
    private String usua_usuario;

    @JsonProperty(value = "usuaClave")
    private String usua_clave;

    @JsonProperty(value = "usuaEstado")
    private String usua_estado;

    public String getUsua_codigo() {
        return usua_codigo;
    }

    public void setUsua_codigo(String usua_codigo) {
        this.usua_codigo = usua_codigo;
    }

    public String getUsua_usuario() {
        return usua_usuario;
    }

    public void setUsua_usuario(String usua_usuario) {
        this.usua_usuario = usua_usuario;
    }

    public String getUsua_clave() {
        return usua_clave;
    }

    public void setUsua_clave(String usua_clave) {
        this.usua_clave = usua_clave;
    }

    public String getUsua_estado() {
        return usua_estado;
    }

    public void setUsua_estado(String usua_estado) {
        this.usua_estado = usua_estado;
    }

}
