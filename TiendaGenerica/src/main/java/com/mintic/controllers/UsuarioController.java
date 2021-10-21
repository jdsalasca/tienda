package com.mintic.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.IUsuarioDao;
import com.mintic.entities.Cliente;
import com.mintic.entities.Usuario;
import com.mintic.utils.JWTUtil;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

@RestController
public class UsuarioController {
	
	/*@CrossOrigin*/
	
	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Autowired
	private JWTUtil jwtUtil;

	@RequestMapping(value= "api/usuariosConAuth", method = RequestMethod.GET)
	public List<Usuario> getUsuarioListA(@RequestHeader (value = "Authorization") String token) {
		if (!validarToken(token)) {
			return null;
		}
		
		
		
		return usuarioDao.getUsuarios(); //esto se retorna como Json
	}
	@RequestMapping(value= "api/usuarios", method = RequestMethod.GET)
	public List<Usuario> getUsuarioList() {
	
		
		return usuarioDao.getUsuarios(); //esto se retorna como Json
	}
	
	private boolean validarToken (String token) {
		
		String usuarioId = jwtUtil.getKey(token);
		return usuarioId != null;
		
		
	}
	

	@RequestMapping(value= "api/usuarioDeleteConAuth/{id}", method = RequestMethod.DELETE)
	public void eliminarA(@RequestHeader (value = "Authorization") String token, @PathVariable Long id) {
		
		if (!validarToken(token)) {
			return;
		}
		usuarioDao.eliminar(id);
	}
	
	@RequestMapping(value= "api/usuarioDelete/{id}", method = RequestMethod.DELETE)
	public void eliminar( @PathVariable Long id) {
		

		usuarioDao.eliminar(id);
	}
	
	@RequestMapping(value= "api/usuarioUpdate/{id}", method = RequestMethod.POST)
	public void actualizar(@RequestBody Usuario usuario, @PathVariable Long id) {
		usuarioDao.actualizar(usuario);
	}
	
	@RequestMapping(value= "api/usuarioGet/{id}", method = RequestMethod.GET)
	public Usuario obtenerUsuario(@PathVariable Long id) {
		return usuarioDao.FindById(id);
	}
	
	@RequestMapping(value= "api/usuario", method = RequestMethod.POST)
	public void registrarUsuario (@RequestBody Usuario usuario) {
		Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
		String hash = argon2.hash(1, 1024, 1, usuario.getPassword());
		usuario.setPassword(hash);
		
		usuarioDao.registrar(usuario);
	}
	
	@RequestMapping(value= "api/usuarioGetByCedula/{cedula}", method = RequestMethod.GET)
	public List<Usuario> obtenerUsuario(@PathVariable String cedula) {
		return usuarioDao.FindByCedula(cedula);
	}
	

	
	@RequestMapping(value= "api/FindByNameUsuario/{name}", method = RequestMethod.GET)
	public List<Usuario> clientesByName (@PathVariable String name) {
		
		
		
		return usuarioDao.FindByName(name);
	}
	
	

}
