package com.mintic.dao;

import java.util.List;

import com.mintic.entities.TipodeDocumento;

public interface ITipodeDocumentoDAO {
	
	
	List<TipodeDocumento> getTipoDeDocumento ();
	
	TipodeDocumento getTipodeDocumentoById (Long Id);
	
	

}
