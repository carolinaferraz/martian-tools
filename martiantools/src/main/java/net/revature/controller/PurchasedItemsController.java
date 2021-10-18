package net.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.revature.models.Products;
import net.revature.models.Purchased_items;
import net.revature.service.PurchasedItemsService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController("purchasedItemsController")
@RequestMapping("/pItem")
public class PurchasedItemsController {
	private PurchasedItemsService piService;

	@Autowired
	public PurchasedItemsController(PurchasedItemsService piService) {
		super();
		this.piService = piService;
	}
	
	@GetMapping(path="/{groupID}")
	public ResponseEntity<List<Purchased_items>> getItemsUsingGroupID(@PathVariable int groupID) {
		return new ResponseEntity<List<Purchased_items>>(this.piService.getItemsUsingGroupID(groupID), HttpStatus.OK);
	}

	@GetMapping(path="/max")
	public ResponseEntity<List<Products>> getItemMostBought() {
		return new ResponseEntity<List<Products>>(this.piService.getItemMostBought(), HttpStatus.OK);
	}
	
}
