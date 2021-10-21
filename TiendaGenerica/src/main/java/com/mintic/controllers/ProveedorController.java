package com.mintic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.IProveedorDAO;
import com.mintic.entities.Proveedor;

@RestController
public class ProveedorController {
	
	@Autowired
	IProveedorDAO iProveedorDAO;
	
	
	
	@RequestMapping(value= "api/Proveedores", method = RequestMethod.GET)
	public List<Proveedor> getProveedores () {
		
		return iProveedorDAO.getProveedores();
	}
	
	
	@RequestMapping(value= "api/addProveedor", method = RequestMethod.POST)
	public void addProveedor (@RequestBody Proveedor proveedor) {
		
		iProveedorDAO.registrar(proveedor);
	}
	
	
	@RequestMapping(value= "api/DeleteProveedor/{id}", method = RequestMethod.DELETE)
	public void deleteProveedor (@PathVariable Long id) {
		
		iProveedorDAO.eliminar(id);
	}
	
	
	@RequestMapping(value= "api/UpdateProveedor/{id}", method = RequestMethod.POST)
	public void updateProveedor (@RequestBody Proveedor proveedor, @PathVariable Long id) {
		
		iProveedorDAO.actualizar(proveedor);
	}
	
	@RequestMapping(value= "api/ProveedorByNit/{nit}", method = RequestMethod.GET)
	public List<Proveedor> proveedorByNit ( @PathVariable String nit) {
		
return iProveedorDAO.ProovedorByCedula(nit);
	}
	
	
	@RequestMapping(value= "api/ProveedorById/{id}", method = RequestMethod.GET)
	public Proveedor proveedorById ( @PathVariable Long id) {
		
return iProveedorDAO.FindById(id);
	}
	
	
	
	
	

}
