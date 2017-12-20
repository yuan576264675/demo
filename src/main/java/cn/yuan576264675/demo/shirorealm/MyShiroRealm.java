/**   
 * Copyright © 2017 eSunny Info. Tech Ltd. All rights reserved.
 * 
 * 功能描述：
 * @Package: cn.yuan576264675.demo.shirorealm 
 * @author: chenjiangfeng   
 * @date: 2017年12月15日 下午5:23:17 
 */
package cn.yuan576264675.demo.shirorealm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

/**   
* Copyright: Copyright (c) 2017 yuan
* 
* @ClassName: MyShiroRealm.java
* @Description: 该类的功能描述
*
* @version: v1.0.0
* @author: yuan
* @date: 2017年12月15日 下午5:23:17 
*
* Modification History:
* Date         Author          Version            Description
*---------------------------------------------------------*
* 2017年12月15日     chenjiangfeng     v1.0.0               修改原因
*/
public class MyShiroRealm extends AuthorizingRealm {

	/** 
	* @see org.apache.shiro.realm.AuthorizingRealm#doGetAuthorizationInfo(org.apache.shiro.subject.PrincipalCollection)  
	* @Function: MyShiroRealm.java
	* @Description: 该函数的功能描述
	*
	* @param:描述1描述
	* @return：返回结果描述
	* @throws：异常描述
	*
	* @version: v1.0.0
	* @author: yuan
	* @date: 2017年12月15日 下午5:23:41 
	*
	* Modification History:
	* Date         Author          Version            Description
	*---------------------------------------------------------*
	* 2017年12月15日    chengjiangfeng     v1.0.0               修改原因
	*/
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		// TODO Auto-generated method stub
		return null;
	}

	/** 
	* @see org.apache.shiro.realm.AuthenticatingRealm#doGetAuthenticationInfo(org.apache.shiro.authc.AuthenticationToken)  
	* @Function: MyShiroRealm.java
	* @Description: 该函数的功能描述
	*
	* @param:描述1描述
	* @return：返回结果描述
	* @throws：异常描述
	*
	* @version: v1.0.0
	* @author: yuan
	* @date: 2017年12月15日 下午5:23:41 
	*
	* Modification History:
	* Date         Author          Version            Description
	*---------------------------------------------------------*
	* 2017年12月15日    chengjiangfeng     v1.0.0               修改原因
	*/
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		// TODO Auto-generated method stub
		return null;
	}

}
