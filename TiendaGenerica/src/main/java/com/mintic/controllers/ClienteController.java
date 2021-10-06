package com.mintic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.IClienteDAO;
import com.mintic.dao.ITipodeDocumentoDAO;
import com.mintic.entities.Cliente;
import com.mintic.entities.TipodeDocumento;
import com.mintic.entities.Usuario;
import com.mintic.services.ClienteDAOImp;
import com.mintic.services.TipodeDocumentoDAOImp;

@RestController
public class ClienteController {
	
	@Autowired
	IClienteDAO iClienteDAO;
	
	@Autowired
	ITipodeDocumentoDAO itipodeDocumentoDAO;
	
	
	@RequestMapping(value= "api/clientes", method = RequestMethod.GET)
	public List<Cliente> getClientes () {
		
		return iClienteDAO.getCliente();
		
		
	}
	
	@RequestMapping(value= "api/addCliente", method = RequestMethod.POST)
	public void addCliente (@RequestBody Cliente cliente) {
		
//		cliente.setIdTipoDocumento(itipodeDocumentoDAO.getTipodeDocumentoById(cliente.getIdTipoDocumento().getId()));
		iClienteDAO.registrar(cliente);
//		recibir un dto e instanciar el cliente 
	}
	
	@RequestMapping(value= "api/clientes", method = RequestMethod.DELETE)
	public void deleteCliente (@PathVariable Long id) {
		
		iClienteDAO.eliminar(id);
		
	}
	
	@RequestMapping(value= "api/clientes/{id}", method = RequestMethod.POST)
	public void updateCliente (@RequestBody Cliente cliente, @PathVariable Long id) {
		
		
		iClienteDAO.actualizar(cliente);
		
		
	}
	
	
	@RequestMapping(value= "api/TipoDeDocumentos/{id}", method = RequestMethod.GET)
	public TipodeDocumento tipoDeDocumento (@PathVariable Long id) {
		
		
		
		return itipodeDocumentoDAO.getTipodeDocumentoById(id);
		
		
	}
	
	@RequestMapping(value= "api/TipoDeDocumento/", method = RequestMethod.GET)
	public List<TipodeDocumento> listaTipoDeDocumento () {
		
		
		
		return itipodeDocumentoDAO.getTipoDeDocumento();
		
		
	}
	
	
	

}
