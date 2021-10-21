package com.mintic.services;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mintic.dao.ITipodeDocumentoDAO;
import com.mintic.entities.Cliente;
import com.mintic.entities.TipodeDocumento;
import com.mintic.entities.Usuario;



@Repository
@Transactional
public class TipodeDocumentoDAOImp implements ITipodeDocumentoDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<TipodeDocumento> getTipoDeDocumento() {
		String query = "FROM TipodeDocumento";
		List<TipodeDocumento> list = entityManager.createQuery(query).getResultList();
		if (list.isEmpty()) {
			
			return null;
		}
		return list;
		
	}

	@Override
	public TipodeDocumento getTipodeDocumentoById(Long id) {
{
			TipodeDocumento documento= entityManager.find(TipodeDocumento.class, id);

			
			return documento;
		}

	}

	@Override
	public void registrar(TipodeDocumento tipodeDocumento) {
		entityManager.merge(tipodeDocumento);
		
	}

}
