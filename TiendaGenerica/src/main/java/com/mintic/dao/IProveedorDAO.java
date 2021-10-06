package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Proveedor;


public interface IProveedorDAO {
	
	List<Proveedor> getProveedores();

	void eliminar(Long id);

	void registrar(Proveedor cliente);

	Proveedor obtenerProveedoresPorCredenciales(Proveedor cliente);

	void actualizar(Proveedor cliente);
	
	Proveedor FindById (Long id);
	
	

}
