package com.mintic.controllers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mintic.dao.IProductoDAO;
import com.mintic.entities.Producto;
import com.mintic.entities.Proveedor;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

@RestController
public class ProductoController {
	
	@Autowired
	IProductoDAO iProductoDAO;
	
	
	
	@RequestMapping(value= "api/producto", method = RequestMethod.GET)
	public List<Producto> getProductos() {
		
		return iProductoDAO.getProducto();
	}
	


	@RequestMapping(value= "api/addProducto", method = RequestMethod.POST)
	public void addProducto (@RequestBody Producto producto ) {
		iProductoDAO.registrar(producto);

		
//		
	}

}

 
