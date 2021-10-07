package com.mintic.dao;

import java.util.List;

import com.mintic.entities.DetalleVenta;


public interface IDetalleVentaDAO {
	
	List<DetalleVenta> getDetalleVenta();

	void eliminar(Long id);

	void registrar(DetalleVenta detalleventa);


	void actualizar(DetalleVenta detalleventa);
	
	DetalleVenta FindById (Long id);
	
	

}
