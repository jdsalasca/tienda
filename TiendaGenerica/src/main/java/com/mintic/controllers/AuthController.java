package com.mintic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.dao.IUsuarioDao;
import com.mintic.entities.Usuario;
import com.mintic.utils.JWTUtil;


@RestController
public class AuthController {

	@Autowired
	IUsuarioDao usuarioDao;

	@Autowired
	JWTUtil jwtUtil;

	@RequestMapping(value= "api/login", method = RequestMethod.POST)
	public String login (@RequestBody Usuario usuario) {
		
		Usuario usuarioLogueado = usuarioDao.obtenerUsuarioPorCredenciales(usuario);
		
	if (usuarioLogueado != null) {
			
			String tokenJwt = jwtUtil.create( String.valueOf(usuarioLogueado.getId()), usuarioLogueado.getEmail());
			return tokenJwt;
			
			
		}
		return String.valueOf(1);
	}


}
