package com.task.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.response.Healthz;

@RestController
@CrossOrigin(origins="https://pasteb.netlify.app")
public class HealthCheck {
	
	@GetMapping("/api/healthz")
	public ResponseEntity<Healthz> checkApp(){
		Healthz h=new Healthz();
		h.setOk(true);
		return new ResponseEntity<>(h,HttpStatus.OK); 
	}
}
