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

@RestController
public class ClienteController {
	
	@Autowired
	IClienteDAO iClienteDAO;
	
	
	
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
	
	@RequestMapping(value= "api/Deletecliente/{id}", method = RequestMethod.DELETE)
	public void deleteCliente (@PathVariable Long id) {
		
		iClienteDAO.eliminar(id);
		
	}
	
	@RequestMapping(value= "api/clientesById/{id}", method = RequestMethod.GET)
	public Cliente clientesById (@PathVariable Long id) {
		
		
		
		return iClienteDAO.clientById(id);
	}
	
	
	@RequestMapping(value= "api/updateCliente/{id}", method = RequestMethod.POST)
	public void updateCliente (@RequestBody Cliente cliente, @PathVariable Long id) {
		
		
		iClienteDAO.actualizar(cliente);
		
		
	}
	

	@RequestMapping(value= "api/clientesByCedula/{cedula}", method = RequestMethod.GET)
	public List<Cliente> clientesByCedula (@PathVariable String cedula) {
		
		
		
		return iClienteDAO.clientByCedula(cedula);
	}
	
	@RequestMapping(value= "api/FindByNameCliente/{name}", method = RequestMethod.GET)
	public List<Cliente> clientesByName (@PathVariable String name) {
		
		
		
		return iClienteDAO.clienteByName(name);
	}
	
	
	
	
	

}
