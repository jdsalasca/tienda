package com.mintic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.IVentaDAO;
import com.mintic.entities.Cliente;
import com.mintic.entities.DetalleVenta;
import com.mintic.entities.Venta;

@RestController
public class VentaController {
	
	@Autowired
	IVentaDAO iVentaDAO;
	
	
	@RequestMapping(value= "api/Ventas", method = RequestMethod.GET)
	public List<Venta> getVentas () {
		
		return iVentaDAO.getVentas();
	}
	
	
	@RequestMapping(value= "api/addVenta", method = RequestMethod.POST)
	public void addVenta (@RequestBody Venta venta) {
		
		iVentaDAO.registrar(venta);
	}
	
	
	@RequestMapping(value= "api/DeleteVenta/{id}", method = RequestMethod.DELETE)
	public void deleteVenta (@PathVariable Long id) {
		
		iVentaDAO.eliminar(id);
	}
	
	
	@RequestMapping(value= "api/UpdateVenta/{id}", method = RequestMethod.POST)
	public void updateVenta (@RequestBody Venta venta, @PathVariable Long id) {
		
		iVentaDAO.actualizar(venta);
	}
	

	
	
	@RequestMapping(value= "api/VentaById/{id}", method = RequestMethod.GET)
	public Venta proveedorById ( @PathVariable Long id) {
		
return iVentaDAO.FindById(id);
	}
	
	@RequestMapping(value= "api/FindVentasForClient/{id}", method = RequestMethod.GET)
	public List<Venta> VentasByName (@PathVariable Long id) {
		
		
		
		return iVentaDAO.VentasByClientId(id);
	}
	
	

	
	

}
