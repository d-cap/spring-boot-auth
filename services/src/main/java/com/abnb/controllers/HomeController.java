package com.abnb.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {

	@RequestMapping("/name")
	public String name() {
		return "{\"name\": \"AngularApp\"}";
	}
}
