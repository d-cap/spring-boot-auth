package com.abnb.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/secure")
@PreAuthorize("hasAuthority('ROLE_DOMAIN_USER')")
public class SecureController {

	@RequestMapping(value = "/message")
	public String secureMessage(@AuthenticationPrincipal User domainUser) {
		return "{\"message\": \"Secure message\"}";
	}
}
