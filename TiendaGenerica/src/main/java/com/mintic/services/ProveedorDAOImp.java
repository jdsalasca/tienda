package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mintic.dao.IProveedorDAO;
import com.mintic.entities.Proveedor;


@Repository
public class ProveedorDAOImp implements IProveedorDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Proveedor> getProveedores() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eliminar(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void registrar(Proveedor cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Proveedor obtenerProveedoresPorCredenciales(Proveedor cliente) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void actualizar(Proveedor cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Proveedor FindById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}


}
