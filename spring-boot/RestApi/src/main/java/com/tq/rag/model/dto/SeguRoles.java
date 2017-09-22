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
@JsonRootName("SeguRoles")
public class SeguRoles {

    @JsonProperty(value = "roleCodigo")
    private String role_codigo;

    @JsonProperty(value = "roleRol")
    private String role_rol;

    @JsonProperty(value = "roleDescripcion")
    private String role_descripcion;

    @JsonProperty(value = "roleEstado")
    private String role_estado;

    public String getRole_codigo() {
        return role_codigo;
    }

    public void setRole_codigo(String role_codigo) {
        this.role_codigo = role_codigo;
    }

    public String getRole_rol() {
        return role_rol;
    }

    public void setRole_rol(String role_rol) {
        this.role_rol = role_rol;
    }

    public String getRole_descripcion() {
        return role_descripcion;
    }

    public void setRole_descripcion(String role_descripcion) {
        this.role_descripcion = role_descripcion;
    }

    public String getRole_estado() {
        return role_estado;
    }

    public void setRole_estado(String role_estado) {
        this.role_estado = role_estado;
    }

}
