package com.mintic.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mintic.dao.IClienteDAO;
import com.mintic.entities.Cliente;
import com.mintic.entities.Usuario;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;



@Repository
@Transactional
public class ClienteDAOImp implements IClienteDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Cliente> getCliente() {
		String query = "FROM Cliente";
		List<Cliente> list = entityManager.createQuery(query).getResultList();
		if (list.isEmpty()) {
			
			return null;
		}
		return list;
		
	}

	@Override
	public void eliminar(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void registrar(Cliente cliente) {
		
		entityManager.merge(cliente);
		
		
	}

	@Override
	public Cliente obtenerClientePorCredenciales(Cliente cliente) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void actualizar(Cliente cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Cliente FindById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Cliente> clientByCedula(String cedula) {
		
	    String query = "FROM Cliente WHERE numeroDocumento = :numeroDocumento";
	    List<Cliente> lista = entityManager.createQuery(query)
	            .setParameter("numeroDocumento", cedula)
	            .getResultList();

	    if (lista.isEmpty()) {
	        return null;
	    }


	    return lista;

	}

}
