package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mintic.dao.IDetalleVentaDAO;
import com.mintic.entities.Cliente;
import com.mintic.entities.DetalleVenta;
import com.mintic.entities.Proveedor;
import com.mintic.entities.Venta;




@Repository
@Transactional
public class DetalleVentaDAOImp implements IDetalleVentaDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<DetalleVenta> getDetalleVenta() {
		
		String query = "FROM DetalleVenta";
		List<DetalleVenta> list = entityManager.createQuery(query).getResultList();
		if (list.isEmpty()) {
			
			return null;
		}
		return list;
		
	}
		

	@Override
	public void eliminar(Long id) {
		
		DetalleVenta detalleventa = entityManager.find(DetalleVenta.class, id);
		entityManager.remove(detalleventa);
		
	}

	@Override
	public void registrar(DetalleVenta detalleventa) {
		
		entityManager.merge(detalleventa);
	}

	@Override
	public void actualizar(DetalleVenta detalleventa) {
		
		entityManager.merge(detalleventa);
		
	}

	@Override
	public DetalleVenta FindById(Long id) {
		return entityManager.find(DetalleVenta.class, id);
	}


	@Override
	public List<DetalleVenta> detalleVentasByName(String name) {
	    String query = "FROM DetalleVentas"
	    		+ "SELECT * WHERE nit = :nit";
	    List<DetalleVenta> lista = entityManager.createQuery(query)
	            .setParameter("name", name)
	            .getResultList();

	    if (lista.isEmpty()) {
	        return null;
	    }

	    return lista;
	}



}
