package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Cliente;



public interface IClienteDAO {
	
	List<Cliente> getCliente();

	void eliminar(Long id);

	void registrar(Cliente cliente);

	Cliente obtenerClientePorCredenciales(Cliente cliente);

	void actualizar(Cliente cliente);
	
	Cliente FindById (Long id);
	
	

}
