/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ltg.posserver.repository.jpa;

import com.ltg.posserver.repository.jpa.model.SeguRoles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author dpeniafiel
 */
@RepositoryRestResource(collectionResourceRel = "roles", path = "roles")
public interface SeguRolesRepository extends JpaRepository<SeguRoles, String> {

}
