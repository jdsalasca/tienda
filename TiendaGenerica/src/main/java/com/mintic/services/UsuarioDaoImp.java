package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mintic.dao.IUsuarioDao;
import com.mintic.entities.Cliente;
import com.mintic.entities.Usuario;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;


@Repository
@Transactional
public class UsuarioDaoImp implements IUsuarioDao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Usuario> getUsuarios() {
		String query = "FROM Usuario";
		return entityManager.createQuery(query).getResultList();	
	}

	@Override
	public void eliminar(Long id) {
		
		Usuario usuario= entityManager.find(Usuario.class, id);
		entityManager.remove(usuario);
		
		
	}

	@Override
	public void registrar(Usuario usuario) {
		
		entityManager.merge(usuario);
	
		
	}

	@Override
	public Usuario obtenerUsuarioPorCredenciales(Usuario usuario) {
	
		
        String query = "FROM Usuario WHERE email = :email OR nick= :email";
        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter("email", usuario.getEmail())
                .getResultList();

        if (lista.isEmpty()) {
            return null;
        }

        String passwordHashed = lista.get(0).getPassword();

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if (argon2.verify(passwordHashed, usuario.getPassword())) {
            return lista.get(0);
        }
        return null;
    }


@Override
public void actualizar(Usuario usuario) {
	entityManager.merge(usuario);
}

@Override
public Usuario FindById(Long id) {
	Usuario usuario= entityManager.find(Usuario.class, id);

	
	return usuario;
}

@Override
public List<Usuario> FindByCedula(String cedula) {
    String query = "FROM Usuario WHERE cedula = :cedula";
    List<Usuario> lista = entityManager.createQuery(query)
            .setParameter("cedula", cedula)
            .getResultList();

    if (lista.isEmpty()) {
        return null;
    }

    String passwordHashed = lista.get(0).getPassword();

    Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
    if (argon2.verify(passwordHashed, lista.get(0).getPassword())) {
        return lista;
    }
    return lista;

	
}
@Override
public List<Usuario> FindByName(String nombre) {
String query = "FROM Usuario WHERE nombre LIKE :pattern ";
List<Usuario> lista = entityManager.createQuery(query)
        .setParameter("pattern", "%"+ nombre+"%")
        .setMaxResults(4)
        .getResultList();

if (lista.isEmpty()) {
    return null;
}
return lista;
}

@Override
public List<Usuario> FindByEmail(String email) {
	    String query = "FROM Usuario WHERE email = :email";
	    List<Usuario> lista = entityManager.createQuery(query)
	            .setParameter("email", email)
	            .getResultList();

	    if (lista.isEmpty()) {
	        return null;
	    }
	return lista;
}

@Override
public List<Usuario> FindByNick(String nick) {
    String query = "FROM Usuario WHERE nick = :nick";
    List<Usuario> lista = entityManager.createQuery(query)
            .setParameter("nick", nick)
            .getResultList();

    if (lista.isEmpty()) {
        return null;
    }
	return lista;
}

}

