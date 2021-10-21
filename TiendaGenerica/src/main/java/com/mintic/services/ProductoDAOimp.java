package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mintic.dao.IProductoDAO;
import com.mintic.entities.Producto;
import com.mintic.entities.Usuario;




@Repository
@Transactional
public class ProductoDAOimp implements IProductoDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Producto> getProducto() {
		String query = "FROM Producto";
		return entityManager.createQuery(query).getResultList();	
	}

	@Override
	public void eliminar(Long id) {
		Producto producto = entityManager.find(Producto.class, id);
		entityManager.remove(producto);
		
		
	}

	@Override
	public void registrar(Producto producto) {
		entityManager.merge(producto);

		
	}

	@Override
	public void actualizar(Producto producto) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Producto FindById(Long id) {
		
		
		return entityManager.find(Producto.class, id);
		
	}
	
	@Override
	public List<Producto> FindByNombre(String nombre) {
	    String query = "FROM Producto WHERE nombre LIKE :pattern ";
	    List<Producto> lista = entityManager.createQuery(query)
	            .setParameter("pattern", "%"+ nombre+"%")
	            .setMaxResults(4)
	            .getResultList();

	    if (lista.isEmpty()) {
	        return null;
	    }
	    return lista;

}

}