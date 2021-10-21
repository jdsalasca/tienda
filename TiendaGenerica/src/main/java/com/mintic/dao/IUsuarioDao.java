package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Usuario;


public interface IUsuarioDao {
	 
	List<Usuario> getUsuarios();

	void eliminar(Long id);

	void registrar(Usuario usuario);

	Usuario obtenerUsuarioPorCredenciales(Usuario usuario);

	void actualizar(Usuario usuario);
	
	Usuario FindById (Long id);

	List<Usuario> FindByCedula(String cedula);

	List<Usuario> FindByName(String nombre);
	
	

}
