package com.task.service;

import com.task.request.ContentReq;
import com.task.response.ContentRes;
import com.task.response.CreateContentRes;

public interface ContentService {
	public CreateContentRes createContent(ContentReq req);
	public ContentRes getContent(String id);
}
