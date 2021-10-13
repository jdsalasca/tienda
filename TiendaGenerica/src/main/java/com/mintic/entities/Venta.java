package com.mintic.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Venta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @ManyToOne
    @JoinColumn(name = "idCliente")
	private Cliente idCliente;
    
    @ManyToOne
    @JoinColumn(name = "idUsuario")
	private Usuario idUsuario;
    
    
	private Long totalVenta;
	private Long valorVenta;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Cliente getIdCliente() {
		return idCliente;
	}
	public void setIdCliente(Cliente idCliente) {
		this.idCliente = idCliente;
	}
	public Usuario getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Usuario idUsuario) {
		this.idUsuario = idUsuario;
	}
	public Long getTotalVenta() {
		return totalVenta;
	}
	public void setTotalVenta(Long totalVenta) {
		this.totalVenta = totalVenta;
	}
	public Long getValorVenta() {
		return valorVenta;
	}
	public void setValorVenta(Long valorVenta) {
		this.valorVenta = valorVenta;
	}
	public Venta(Long id, Cliente idCliente, Usuario idUsuario, Long totalVenta, Long valorVenta) {
		super();
		this.id = id;
		this.idCliente = idCliente;
		this.idUsuario = idUsuario;
		this.totalVenta = totalVenta;
		this.valorVenta = valorVenta;
	}
	public Venta() {
		super();
	}
	public Venta(Long id) {
		super();
		this.id = id;
	}

	
	

}
