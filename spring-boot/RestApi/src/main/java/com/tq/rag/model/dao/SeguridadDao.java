/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tq.rag.model.dao;

import com.tq.rag.model.dto.SeguRoles;
import com.tq.rag.model.dto.SeguUsuario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author dpeniafiel
 */
@Repository
public class SeguridadDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<SeguUsuario> usuarioFindAll() {
        return jdbcTemplate.query("select "
                + "aa.usua_codigo, "
                + "aa.usua_usuario, "
                + "aa.usua_clave, "
                + "aa.usua_estado "
                + "from segu_usuario aa "
                + "order by aa.usua_codigo", new BeanPropertyRowMapper<>(SeguUsuario.class));
    }

    public List<SeguRoles> rolFindAll() {
        return jdbcTemplate.query("select * "
                + "from segu_roles aa "
                + "order by aa.role_codigo", new BeanPropertyRowMapper<>(SeguRoles.class));
    }

    public void usuarioCreate(SeguUsuario usuario) {
        jdbcTemplate.update("insert into segu_usuario(usua_codigo, usua_usuario, usua_clave, usua_estado) values(?,?,?,?)",
                usuario.getUsua_codigo(),
                usuario.getUsua_usuario(),
                usuario.getUsua_clave(),
                usuario.getUsua_estado());
    }

    public void usuarioDelete(SeguUsuario usuario) {
        jdbcTemplate.update("delete from segu_usuario where usua_codigo=?", usuario.getUsua_codigo());
    }

}
