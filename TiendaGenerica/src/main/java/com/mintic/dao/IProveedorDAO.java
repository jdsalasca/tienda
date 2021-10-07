package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Proveedor;


public interface IProveedorDAO {
	
	List<Proveedor> getProveedores();

	void eliminar(Long id);

	void registrar(Proveedor proveedor);


	void actualizar(Proveedor proveedor);
	
	Proveedor FindById (Long id);
	
	List<Proveedor> ProovedorByCedula(String nit);
	
	

}
