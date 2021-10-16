package com.mintic.dao;

import java.util.List;

import com.mintic.entities.Cliente;
import com.mintic.entities.DetalleVenta;
import com.mintic.entities.Venta;



public interface IVentaDAO {
	
	List<Venta> getVentas();

	void eliminar(Long id);

	Long registrar(Venta venta);


	void actualizar(Venta venta);
	
	Venta FindById (Long id);


	List<Venta> VentasByClientId(Cliente id);
	
	
	

}
