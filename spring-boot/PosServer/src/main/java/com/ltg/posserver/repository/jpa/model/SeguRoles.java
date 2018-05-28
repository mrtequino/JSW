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
@Entity(name = "segu_roles")
public class SeguRoles implements Serializable {

    @Id
    @Column(name = "role_codigo")
    private String roleCodigo;

    @Column(name = "role_nombre")
    private String roleNombre;

    @Column(name = "role_rol")
    private String roleRol;

    @Column(name = "role_estado")
    private String roleEstado;

    public String getRoleCodigo() {
        return roleCodigo;
    }

    public void setRoleCodigo(String roleCodigo) {
        this.roleCodigo = roleCodigo;
    }

    public String getRoleNombre() {
        return roleNombre;
    }

    public void setRoleNombre(String roleNombre) {
        this.roleNombre = roleNombre;
    }

    public String getRoleEstado() {
        return roleEstado;
    }

    public void setRoleEstado(String roleEstado) {
        this.roleEstado = roleEstado;
    }

    public String getRoleRol() {
        return roleRol;
    }

    public void setRoleRol(String roleRol) {
        this.roleRol = roleRol;
    }

}
