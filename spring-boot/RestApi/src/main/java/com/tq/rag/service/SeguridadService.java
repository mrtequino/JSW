/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tq.rag.service;

import com.tq.rag.model.dao.SeguridadDao;
import com.tq.rag.model.dto.SeguRoles;
import com.tq.rag.model.dto.SeguUsuario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author dpeniafiel
 */
@Service
public class SeguridadService {

    @Autowired
    private SeguridadDao dao;

    public List<SeguUsuario> usuarioFindAll() {
        return dao.usuarioFindAll();
    }

    public List<SeguRoles> rolFindAll() {
        return dao.rolFindAll();
    }

    @Transactional(rollbackFor = Throwable.class)
    public void usuarioCreate(SeguUsuario usuario) {
        dao.usuarioCreate(usuario);
    }

    @Transactional(rollbackFor = Throwable.class)
    public void usuarioDelete(SeguUsuario usuario) {
        dao.usuarioDelete(usuario);
    }
}
