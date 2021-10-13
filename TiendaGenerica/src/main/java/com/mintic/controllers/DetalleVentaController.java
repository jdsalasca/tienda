package com.mintic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.IDetalleVentaDAO;
import com.mintic.entities.DetalleVenta;

@RestController
public class DetalleVentaController {
	
	@Autowired
	IDetalleVentaDAO iDetalleVentaDAO;
	
	@RequestMapping(value= "api/DetalleVenta", method = RequestMethod.GET)
	public List<DetalleVenta> getDetalleVenta () {
		
		return iDetalleVentaDAO.getDetalleVenta();
	}
	
	
	@RequestMapping(value= "api/addDetalleVenta", method = RequestMethod.POST)
	public void addDetalleVenta (@RequestBody DetalleVenta detalleVenta) {
		
		iDetalleVentaDAO.registrar(detalleVenta);
	}
	

	
	@RequestMapping(value= "api/DeleteDetalleVenta/{id}", method = RequestMethod.DELETE)
	public void deleteVenta (@PathVariable Long id) {
		
		iDetalleVentaDAO.eliminar(id);
	}
	
	
	@RequestMapping(value= "api/UpdateDetalleVenta/{id}", method = RequestMethod.POST)
	public void updateVenta (@RequestBody DetalleVenta detalleVenta, @PathVariable Long id) {
		
		iDetalleVentaDAO.actualizar(detalleVenta);
	}
	

	
	
	@RequestMapping(value= "api/DetalleVentaById/{id}", method = RequestMethod.GET)
	public DetalleVenta proveedorById ( @PathVariable Long id) {
		
		return iDetalleVentaDAO.FindById(id);
	}
	
	
	
}
