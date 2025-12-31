package com.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.task.request.ContentReq;
import com.task.response.ContentRes;
import com.task.response.CreateContentRes;
import com.task.service.ContentService;

@RestController
@CrossOrigin("https://pasteb.netlify.app")
public class ContentController {
	@Autowired
	private ContentService contentService;
	
	@PostMapping("/api/pastes")
	public ResponseEntity<CreateContentRes> createContent(@RequestBody ContentReq req){
		CreateContentRes res=this.contentService.createContent(req);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	@GetMapping("/api/pastes/{id}")
	public ResponseEntity<ContentRes> getContent(@PathVariable("id") String id){
		ContentRes res =this.contentService.getContent(id);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	
}
