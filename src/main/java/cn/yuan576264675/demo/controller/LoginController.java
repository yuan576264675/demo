/**   
 * Copyright © 2017 eSunny Info. Tech Ltd. All rights reserved.
 * 
 * 功能描述：
 * @Package: cn.yuan576264675.demo.controller 
 * @author: chenjiangfeng   
 * @date: 2017年12月15日 下午3:49:21 
 */
package cn.yuan576264675.demo.controller;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.yuan576264675.demo.entity.User;
import lombok.extern.slf4j.Slf4j;

/**   
* Copyright: Copyright (c) 2017 yuan
* 
* @ClassName: LoginController.java
* @Description: 该类的功能描述
*
* @version: v1.0.0
* @author: yuan
* @date: 2017年12月15日 下午3:49:21 
*
* Modification History:
* Date         Author          Version            Description
*---------------------------------------------------------*
* 2017年12月15日     chenjiangfeng     v1.0.0               修改原因
*/
@RestController
@Slf4j
public class LoginController {

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(User user) {
		
		String name = user.getName();
		String pwd = user.getPwd();
		
		if(StringUtils.isBlank(name) || StringUtils.isBlank(pwd)){
			log.error("用户名密码为空");
			return "login";
		}
		
		return "login";
	}

}
