package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Producto;



public interface IProductoDAO {
	
	List<Producto> getProducto();

	void eliminar(Long id);

	void registrar(Producto producto);


	void actualizar(Producto producto);
	
	Producto FindById (Long id);

	List<Producto> FindByNombre(String nombre);
	
	

}
