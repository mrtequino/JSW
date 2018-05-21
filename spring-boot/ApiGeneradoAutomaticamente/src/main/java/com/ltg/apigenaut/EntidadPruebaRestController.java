package com.ltg.apigenaut;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/entidadPrueba")
public class EntidadPruebaRestController {

    @Autowired
    private EntidadPruebaRepository entidadPruebaRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<EntidadPrueba> findAll() {
        return entidadPruebaRepository.findAll();
    }
    
	@RequestMapping(method = RequestMethod.GET, value = "/{entidadPruebaId}")
    public EntidadPrueba findOne(@PathVariable Long entidadPruebaId) {
        return entidadPruebaRepository.findOne(entidadPruebaId);
    }
    
	@RequestMapping(method = RequestMethod.POST)
    public EntidadPrueba add(@RequestBody EntidadPrueba entidadPrueba) {
        return entidadPruebaRepository.save(entidadPrueba);
    }

	@RequestMapping(method = RequestMethod.PUT)
    public EntidadPrueba update(@RequestBody EntidadPrueba entidadPrueba) {
        return entidadPruebaRepository.save(entidadPrueba);
    }
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/{entidadPruebaId}")
    public void delete(@PathVariable Long entidadPruebaId) {
        entidadPruebaRepository.delete(entidadPruebaId);
    }
	
}

