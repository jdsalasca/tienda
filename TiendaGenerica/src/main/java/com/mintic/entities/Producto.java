package com.mintic.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "producto")
public class Producto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    
    
    @ManyToOne
    @JoinColumn(name = "idProveedor")
    private Proveedor idProveedor;
    
    private double ivaCompra;
    
    private String nombre;
    
    private double precioCompra;
    
    

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Proveedor getIdProveedor() {
		return idProveedor;
	}

	public void setIdProveedor(Proveedor idProveedor) {
		this.idProveedor = idProveedor;
	}

	public double getIvaCompra() {
		return ivaCompra;
	}

	public void setIvaCompra(double ivaCompra) {
		this.ivaCompra = ivaCompra;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getPrecioCompra() {
		return precioCompra;
	}

	public void setPrecioCompra(double precioCompra) {
		this.precioCompra = precioCompra;
	}
	
	

	public Producto(Long id, Proveedor idProveedor, double ivaCompra, String nombre, double precioCompra) {
		super();
		this.id = id;
		this.idProveedor = idProveedor;
		this.ivaCompra = ivaCompra;
		this.nombre = nombre;
		this.precioCompra = precioCompra;
	}

	public Producto() {
		super();
	}

	public Producto(Long id) {
		super();
		this.id = id;
	}
	
	
    
    

    
}
