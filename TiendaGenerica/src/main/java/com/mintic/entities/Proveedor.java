package com.mintic.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "proveedor")
public class Proveedor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    private String ciudad;
    private String direccion;
    private String nombre;
    private String telefono;
    private String nit;
    
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCiudad() {
		return ciudad;
	}
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getNit() {
		return nit;
	}
	public void setNit(String nit) {
		this.nit = nit;
	}
	
	/**
	 * This constructors are necessary to implements non-serializable attribute of Spring Boot comunication c:
	 * @param id
	 * @param ciudad
	 * @param direccion
	 * @param nombre
	 * @param telefono
	 * @param nit
	 */
	public Proveedor(Long id, String ciudad, String direccion, String nombre, String telefono, String nit) {
		super();
		this.id = id;
		this.ciudad = ciudad;
		this.direccion = direccion;
		this.nombre = nombre;
		this.telefono = telefono;
		this.nit = nit;
	}
	public Proveedor() {
	}
	public Proveedor(Long id) {
		super();
		this.id = id;
	}

    
    

}
