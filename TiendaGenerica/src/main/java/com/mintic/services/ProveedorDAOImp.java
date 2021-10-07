package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mintic.dao.IProveedorDAO;
import com.mintic.entities.Cliente;
import com.mintic.entities.Proveedor;


@Repository
@Transactional
public class ProveedorDAOImp implements IProveedorDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Proveedor> getProveedores() {
		String query = "FROM Proveedor";
		List<Proveedor> list = entityManager.createQuery(query).getResultList();
		if (list.isEmpty()) {
			
			return null;
		}
		return list;
		
	}

	@Override
	public void eliminar(Long id) {
		Proveedor proveedor = entityManager.find(Proveedor.class, id);
		entityManager.remove(proveedor);
		
	}

	@Override
	public void registrar(Proveedor proveedor) {
		entityManager.merge(proveedor);
		
	}

	@Override
	public void actualizar(Proveedor proveedor) {
		entityManager.merge(proveedor);
		
	}

	@Override
	public Proveedor FindById(Long id) {
		
		return entityManager.find(Proveedor.class, id);
		
		
	}
	
	
	@Override
	public List<Proveedor> ProovedorByCedula(String nit) {
		
	    String query = "FROM Proveedor WHERE nit = :nit";
	    List<Proveedor> lista = entityManager.createQuery(query)
	            .setParameter("nit", nit)
	            .getResultList();

	    if (lista.isEmpty()) {
	        return null;
	    }

	    return lista;


}
	
}
