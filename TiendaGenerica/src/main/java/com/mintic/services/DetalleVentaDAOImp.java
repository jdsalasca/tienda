package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mintic.dao.IDetalleVentaDAO;
import com.mintic.entities.DetalleVenta;




@Repository
public class DetalleVentaDAOImp implements IDetalleVentaDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<DetalleVenta> getUsuarios() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eliminar(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void registrar(DetalleVenta cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void actualizar(DetalleVenta cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public DetalleVenta FindById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
