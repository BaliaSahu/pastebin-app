package com.task.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.task.entity.Content;

public interface ContentRepository extends MongoRepository<Content,String> {

}
