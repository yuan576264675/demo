package cn.yuan576264675.demo.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import groovy.util.logging.Slf4j;

@RestController
@Slf4j
public class HelloWorldController {

	@RequestMapping("/hello")
	public String index() {
		return "Hello World";
	}
	
	@RequestMapping("/test/{deptCode}")
	public String test(@PathVariable(name="deptCode")String deptCode){
		System.out.println(deptCode);
		return deptCode+"sss";
	}

}
