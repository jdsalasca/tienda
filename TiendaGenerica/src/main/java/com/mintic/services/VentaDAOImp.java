package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mintic.dao.IVentaDAO;
import com.mintic.entities.Proveedor;
import com.mintic.entities.Venta;


@Repository
@Transactional
public class VentaDAOImp implements IVentaDAO {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Venta> getVentas() {
		String query = "FROM Venta";
		List<Venta> list = entityManager.createQuery(query).getResultList();
		if (list.isEmpty()) {
			
			return null;
		}
		return list;
		
	}

	@Override
	public void eliminar(Long id) {
		Venta venta = entityManager.find(Venta.class, id);
		entityManager.remove(venta);
		
	}

	@Override
	public void registrar(Venta venta) {
		entityManager.merge(venta);
		
	}

	@Override
	public void actualizar(Venta venta) {
		entityManager.merge(venta);
		
	}

	@Override
	public Venta FindById(Long id) {
		return entityManager.find(Venta.class, id);
	}


}
