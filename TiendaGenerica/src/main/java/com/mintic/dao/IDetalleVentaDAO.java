package com.mintic.dao;

import java.util.List;

import com.mintic.entities.DetalleVenta;


public interface IDetalleVentaDAO {
	
	List<DetalleVenta> getUsuarios();

	void eliminar(Long id);

	void registrar(DetalleVenta cliente);


	void actualizar(DetalleVenta cliente);
	
	DetalleVenta FindById (Long id);
	
	

}
