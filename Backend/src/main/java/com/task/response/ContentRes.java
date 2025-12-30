package com.task.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContentRes {
	private String content;
	private Integer remainingViews;
	private String expiresAt;
}
