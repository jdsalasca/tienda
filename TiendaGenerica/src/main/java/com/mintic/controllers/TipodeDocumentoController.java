package com.mintic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.StreamingHttpOutputMessage.Body;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.ITipodeDocumentoDAO;
import com.mintic.entities.TipodeDocumento;

@RestController
public class TipodeDocumentoController {
	@Autowired
	ITipodeDocumentoDAO iTipodeDocumentoDAO;

	
	
	@RequestMapping(value= "api/TipoDeDocumentos/{id}", method = RequestMethod.GET)
	public TipodeDocumento tipoDeDocumento (@PathVariable Long id) {
		
		
		
		return iTipodeDocumentoDAO.getTipodeDocumentoById(id);
		
		
	}
	
	@RequestMapping(value= "api/TipoDeDocumento/", method = RequestMethod.GET)
	public List<TipodeDocumento> listaTipoDeDocumento () {
		
		
		return iTipodeDocumentoDAO.getTipoDeDocumento();
		
	}
	
	@RequestMapping(value= "api/addTipoDeDocumentos/", method = RequestMethod.POST)
	public void addTipoDedocumento (@RequestBody TipodeDocumento tipoDedocumento) {
		
		iTipodeDocumentoDAO.registrar(tipoDedocumento);
	}
	
	
}
