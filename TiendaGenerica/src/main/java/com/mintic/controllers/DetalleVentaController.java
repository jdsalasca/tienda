package com.mintic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.IDetalleVentaDAO;
import com.mintic.entities.DetalleVenta;
import com.mintic.entities.Proveedor;

@RestController
public class DetalleVentaController {
	
	@Autowired
	IDetalleVentaDAO iDetalleVentaDAO;
	
	@RequestMapping(value= "api/DetalleVenta", method = RequestMethod.GET)
	public List<DetalleVenta> getDetalleVenta () {
		
		return iDetalleVentaDAO.getDetalleVenta();
	}
	
	
	@RequestMapping(value= "api/DetalleVenta", method = RequestMethod.POST)
	public void addDetalleVenta (@RequestBody DetalleVenta detalleVenta) {
		
//		cliente.setIdTipoDocumento(itipodeDocumentoDAO.getTipodeDocumentoById(cliente.getIdTipoDocumento().getId()));
		iDetalleVentaDAO.registrar(detalleVenta);
//		recibir un dto e instanciar el cliente 
	}
	

}
