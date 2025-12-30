package com.task.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContentReq {
	private String content;
	private Integer ttlSeconds;
	private Integer maxViews;
}
