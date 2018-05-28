/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ltg.posserver.repository.jpa.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author dpeniafiel
 */
@Entity(name = "segu_usuario")
public class SeguUsuario implements Serializable {

    @Id
    @Column(name = "usua_codigo")
    private String usuaCodigo;

    @Column(name = "usua_username")
    private String usuaUserName;

    @Column(name = "usua_password")
    private String usuaPassword;

    @Column(name = "usua_estado")
    private String usuaEstado;

    public String getUsuaCodigo() {
        return usuaCodigo;
    }

    public void setUsuaCodigo(String usuaCodigo) {
        this.usuaCodigo = usuaCodigo;
    }

    public String getUsuaUserName() {
        return usuaUserName;
    }

    public void setUsuaUserName(String usuaUserName) {
        this.usuaUserName = usuaUserName;
    }

    public String getUsuaPassword() {
        return usuaPassword;
    }

    public void setUsuaPassword(String usuaPassword) {
        this.usuaPassword = usuaPassword;
    }

    public String getUsuaEstado() {
        return usuaEstado;
    }

    public void setUsuaEstado(String usuaEstado) {
        this.usuaEstado = usuaEstado;
    }

}
