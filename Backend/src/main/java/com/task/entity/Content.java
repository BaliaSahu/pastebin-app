package com.task.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection="contents")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Content {
	@Id
	private String id;
	private String content;
	private Integer ttlSeconds;
	private String maxViews;
	private Integer remainingViews;
	private String expiresAt;
}
