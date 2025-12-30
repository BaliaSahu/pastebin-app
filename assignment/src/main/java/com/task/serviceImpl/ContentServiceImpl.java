package com.task.serviceImpl;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.entity.Content;
import com.task.exceptions.ContentExpiredException;
import com.task.exceptions.DatanotFoundException;
import com.task.repository.ContentRepository;
import com.task.request.ContentReq;
import com.task.response.ContentRes;
import com.task.response.CreateContentRes;
import com.task.service.ContentService;

@Service
public class ContentServiceImpl implements ContentService {

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private ContentRepository contentRepo;
	
	@Override
	public CreateContentRes createContent(ContentReq req) {
		
		Content ct=modelMapper.map(req, Content.class);
		ct.setExpiresAt(LocalDateTime.now().plusSeconds(req.getTtlSeconds())+"");
		ct.setRemainingViews(req.getMaxViews());
		
		ct=this.contentRepo.save(ct);
		CreateContentRes cr=modelMapper.map(ct, CreateContentRes.class);
		cr.setUrl("http://localhost:8080/api/pastes/"+ct.getId());
		return cr;
	}
	@Override
	public ContentRes getContent(String id) {
		try {

			Content ct=this.contentRepo.findById(id).orElseThrow(()->new DatanotFoundException("Invalid id"));
			
			if (isExpired(ct.getExpiresAt())) {
			   throw new ContentExpiredException("Paste is Expired");
			} 
			if(ct.getRemainingViews()<=0 ) {
				throw new ContentExpiredException("Paste view is Ended");
			}
			
			ct.setRemainingViews(ct.getRemainingViews()-1);
			ct=this.contentRepo.save(ct);
			return this.modelMapper.map(ct, ContentRes.class);
		}catch(Exception e) {
			throw new DatanotFoundException(e.getMessage());
		}
	}
	public boolean isExpired(String expiryString) {

	    LocalDateTime expiryTime = LocalDateTime.parse(expiryString);

	    return LocalDateTime.now().isAfter(expiryTime);
	}
}
