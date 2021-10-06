package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Venta;



public interface IVentaDAO {
	
	List<Venta> getVentas();

	void eliminar(Long id);

	void registrar(Venta cliente);


	void actualizar(Venta cliente);
	
	Venta FindById (Long id);
	
	

}
