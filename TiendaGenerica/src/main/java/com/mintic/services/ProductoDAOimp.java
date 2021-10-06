package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mintic.dao.IProductoDAO;
import com.mintic.entities.Producto;




@Repository
public class ProductoDAOimp implements IProductoDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Producto> getProducto() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eliminar(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void registrar(Producto cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Producto obtenerProductoPorCredenciales(Producto cliente) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void actualizar(Producto cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Producto FindById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
