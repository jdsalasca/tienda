package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Producto;



public interface IProductoDAO {
	
	List<Producto> getProducto();

	void eliminar(Long id);

	void registrar(Producto cliente);

	Producto obtenerProductoPorCredenciales(Producto cliente);

	void actualizar(Producto cliente);
	
	Producto FindById (Long id);
	
	

}
