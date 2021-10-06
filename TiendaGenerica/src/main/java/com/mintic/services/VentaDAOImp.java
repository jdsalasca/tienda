package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.mintic.dao.IVentaDAO;
import com.mintic.entities.Venta;


@Repository
public class VentaDAOImp implements IVentaDAO {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Venta> getVentas() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eliminar(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void registrar(Venta cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void actualizar(Venta cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Venta FindById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}


}
