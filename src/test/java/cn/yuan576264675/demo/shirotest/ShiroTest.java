/**   
 * Copyright © 2017 eSunny Info. Tech Ltd. All rights reserved.
 * 
 * 功能描述：
 * @Package: cn.yuan576264675.demo.shirotest 
 * @author: chenjiangfeng   
 * @date: 2017年12月15日 下午2:24:53 
 */
package cn.yuan576264675.demo.shirotest;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**   
* Copyright: Copyright (c) 2017 yuan
* 
* @ClassName: ShiroTest.java
* @Description: 该类的功能描述
*
* @version: v1.0.0
* @author: yuan
* @date: 2017年12月15日 下午2:24:53 
*
* Modification History:
* Date         Author          Version            Description
*---------------------------------------------------------*
* 2017年12月15日     chenjiangfeng     v1.0.0               修改原因
*/
public class ShiroTest {

	private static final Logger logger = LoggerFactory.getLogger(ShiroTest.class);
	SqlSessionFactory
	@Test
	public void testShiro() {
		// 1、获取SecurityManager工厂，此处使用Ini配置文件初始化SecurityManager
		Factory<org.apache.shiro.mgt.SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
		// 2、得到SecurityManager实例 并绑定给SecurityUtils
		org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);
		// 3、得到Subject及创建用户名/密码身份验证Token（即用户身份/凭证）
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken("zhang", "1231");

		try {
			// 4、登录，即身份验证
			subject.login(token);
		} catch (AuthenticationException e) {
			// 5、身份验证失败
			logger.error("认证失败--->{}   {}1",token.getUsername(),token.getPassword());
		}

		Assert.assertEquals(true, subject.isAuthenticated()); // 断言用户已经登录

		// 6、退出
		subject.logout();
	}
	
}
