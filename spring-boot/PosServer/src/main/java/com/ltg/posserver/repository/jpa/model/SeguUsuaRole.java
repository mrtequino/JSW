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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 *
 * @author dpeniafiel
 */
@Entity(name = "segu_usua_role")
public class SeguUsuaRole implements Serializable {

    @Id
    @Column(name = "usuarole_codigo")
    private String usuaroleCodigo;

    @ManyToOne(targetEntity = SeguUsuario.class)
    @JoinColumn(name = "usua_codigo")
    private SeguUsuario usuario;

    @ManyToOne(targetEntity = SeguRoles.class)
    @JoinColumn(name = "role_codigo")
    private SeguRoles rol;

    public String getUsuaroleCodigo() {
        return usuaroleCodigo;
    }

    public void setUsuaroleCodigo(String usuaroleCodigo) {
        this.usuaroleCodigo = usuaroleCodigo;
    }

    public SeguUsuario getUsuario() {
        return usuario;
    }

    public void setUsuario(SeguUsuario usuario) {
        this.usuario = usuario;
    }

    public SeguRoles getRol() {
        return rol;
    }

    public void setRol(SeguRoles rol) {
        this.rol = rol;
    }

}
