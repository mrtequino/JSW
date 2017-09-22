package com.tq.rag.controller;

import com.tq.rag.model.dto.SeguRoles;
import com.tq.rag.model.dto.SeguUsuario;
import com.tq.rag.service.SeguridadService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seguridad")
public class SeguridadController {

    @Autowired
    private SeguridadService service;

    @PreAuthorize("hasRole('ROLE_1')")
    @RequestMapping("/usuario/findAll")
    @ResponseBody
    public List<SeguUsuario> usuarioFindAll() {
        return service.usuarioFindAll();
    }

    @PreAuthorize("hasRole('ROLE_1')")
    @RequestMapping(value = "/usuario/create", method = RequestMethod.POST)
    @ResponseBody
    public List<SeguUsuario> usuarioCreate(@RequestBody SeguUsuario usuario) {
        service.usuarioCreate(usuario);
        return service.usuarioFindAll();
    }

    @PreAuthorize("hasRole('ROLE_1')")
    @RequestMapping(value = "/usuario/delete", method = RequestMethod.POST)
    @ResponseBody
    public List<SeguUsuario> usuarioDelete(@RequestBody SeguUsuario usuario) {
        service.usuarioDelete(usuario);
        return service.usuarioFindAll();
    }

    @PreAuthorize("hasRole('ROLE_2')")
    @RequestMapping("/rol/findAll")
    @ResponseBody
    public List<SeguRoles> rolFindAll() {
        return service.rolFindAll();
    }

}
