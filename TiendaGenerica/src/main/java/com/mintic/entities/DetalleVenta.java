package com.mintic.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "detalleventa")
public class DetalleVenta {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	
    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto idProducto;
    
    @ManyToOne
    @JoinColumn(name = "idVenta")
    private Venta idVenta;
    private int cantidadProducto;
    private int valorTotal;
    private double valorVenta;
    private double valorIva;
    
    

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Producto getIdProducto() {
		return idProducto;
	}
	public void setIdProducto(Producto idProducto) {
		this.idProducto = idProducto;
	}
	public Venta getIdVenta() {
		return idVenta;
	}
	public void setIdVenta(Venta idVenta) {
		this.idVenta = idVenta;
	}
	public int getCantidadProducto() {
		return cantidadProducto;
	}
	public void setCantidadProducto(int cantidadProducto) {
		this.cantidadProducto = cantidadProducto;
	}
	public int getValorTotal() {
		return valorTotal;
	}
	public void setValorTotal(int valorTotal) {
		this.valorTotal = valorTotal;
	}
	public double getValorVenta() {
		return valorVenta;
	}
	public void setValorVenta(double valorVenta) {
		this.valorVenta = valorVenta;
	}
	public double getValorIva() {
		return valorIva;
	}
	public void setValorIva(double valorIva) {
		this.valorIva = valorIva;
	}
	
	
	public DetalleVenta(Long id, Producto idProducto, Venta idVenta, int cantidadProducto, int valorTotal,
			double valorVenta, double valorIva) {
		super();
		this.id = id;
		this.idProducto = idProducto;
		this.idVenta = idVenta;
		this.cantidadProducto = cantidadProducto;
		this.valorTotal = valorTotal;
		this.valorVenta = valorVenta;
		this.valorIva = valorIva;
	}
	public DetalleVenta() {
	}
	public DetalleVenta(Long id) {
		super();
		this.id = id;
	}
	
	
    	
    

}
