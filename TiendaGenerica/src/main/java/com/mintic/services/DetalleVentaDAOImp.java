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
		
		Proveedor detalleventa = entityManager.find(Proveedor.class, id);
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
		// TODO Auto-generated method stub
		return null;
	}



}
