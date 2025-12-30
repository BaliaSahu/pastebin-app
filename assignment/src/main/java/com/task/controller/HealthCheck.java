package com.task.controller;

import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:5173")
public class HealthCheck {
	
	@GetMapping("/api/healthz")
	public ResponseEntity<HashMap<String,Boolean>> checkApp(){
		HashMap<String, Boolean> run=new HashMap<>();
		run.put("ok", true);
		return new ResponseEntity<>(run,HttpStatus.OK);
	}
}
