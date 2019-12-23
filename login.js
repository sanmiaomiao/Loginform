!function (t,e){
	 "object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("login",[],e):t.login=e()
}(this,function(){
	//工具类函数
	 'use strict' //严格模式 ES5提出
			  //模块代码的公用工具类
			  function isObj(obj){
			  	return typeof obj==='object' && obj!==null
			  }
			  function isArray(arr){
			  	return arr.constructor===Array;
			  }
	
	return function(obj){
			
				  	if(!isObj(obj)|| isArray(obj)){
				  		//console.log('数据类型错误')
				  		throw new Error('数据类型错误')
				  	}
					//获取传入参数
					
					var el=obj.el;
					var forgetpwdUrl=obj.data.forgetpwdUrl;
					var registerUrl=obj.data.registerUrl;
					var color=obj.data.color?obj.data.color:'darkcyan';
					
					//所有的回调函数
					var submitcallback=obj.callback.submitcallback;
					var remembercallback=obj.callback.remembercallback;
					//提前预览
					/* 
					<div class="container" style="padding: 10px;">//
						<div class="inputInfo">					
							<div class="username" style="border: 1px solid #808080;">
								<img src="images/userIcon.png" style="width: 15px;height: 15px;"/>
								<input type="text" placeholder="用户名" style="border: 1px solid transparent;font-size: 15px;"/>						
							</div>
							<div class="warnInfo" style="color: #FF5777;font-size: 13px; padding: 3px;">提示信息</div>
							<div class="password" style="border: 1px solid #808080;">
								<img src="images/passwordIcon.png" style="width: 15px;height: 15px;"/>
								<input type="text" placeholder="密码" style="border: 1px solid transparent;font-size: 15px;"/>
							</div>
							<div class="warnInfo" style="color: #FF5777;font-size: 13px; padding: 3px;">提示信息</div>
						</div>
						<div class="Re-For" style="display: flex;justify-content: space-between; margin: 5px;">
							<div class="Re">
								<input type="checkbox" name="remeberMe" />记住我
							</div>
							<div class="For">
								<a href="#" style="text-decoration: none;color: darkcyan;">忘记密码？</a>
							</div>
						</div>
						<div class="login-button">
							<button style="text-align: center;background-color: darkcyan;color: white;border: 1px solid darkcyan;width: 100%;border-radius: 0.25rem;font-size: 15px;padding: 5px;">登录</button>
						</div>
						<div class="register" style="margin: 5px;">
							<span>没有账号？</span><a href="#" style="color: darkcyan;text-decoration: none;">现在注册！</a>
						</div>
					</div> */
					
					//创建dom
					var ParentNode=document.querySelector(el);
					var container=document.createElement('div');//<div class="container" style="padding: 10px;">
					container.className="container";
					container.style.padding='10px';
					ParentNode.appendChild(container);
					var inputInfo=document.createElement('div');//<div class="inputInfo">		
					inputInfo.className="inputInfo";
					container.appendChild(inputInfo);				
					var username=document.createElement('div');//<div class="username" style="border: 1px solid #808080;">
					username.className="username";
					username.style.border='1px solid #808080';					
					inputInfo.appendChild(username);
					var userimg=document.createElement('img');//<img src="images/userIcon.png" style="width: 15px;height: 15px;"/>
					userimg.style.width='15px';
					userimg.style.height='15px';
					userimg.setAttribute('src',"images/userIcon.png");
					username.appendChild(userimg);
					var usertext=document.createElement('input');//<input type="text" placeholder="用户名" style="border: 1px solid transparent;font-size: 15px;"/>		
					usertext.setAttribute('type','text');
					usertext.setAttribute('placeholder','用户名');
					usertext.style.border="1px solid transparent";
					usertext.style.fontSize="15px";
					username.appendChild(usertext);
					//username绑定事件
					function changeValue(){//验证用户名						
						let value=usertext.value;
						warnInfo.style.color='red';
						if(!((/^[a-zA-Z0-9]*$/).test(value))){
							warnInfo.innerHTML='用户名只能由字母和数字组成';
						}else if(value.length<5||value.length>12){
							warnInfo.innerHTML='用户名必须为5到12位之间';
						}else{
							warnInfo.style.color='transparent';
						}
					}
					function clearWarn(){//聚焦清除警告
						warnInfo.style.color='transparent';
					}
					usertext.onfocus=function(){
						clearWarn();
					},
					usertext.onblur=function(){
						changeValue();
					}
					
					var warnInfo=document.createElement('div');//<div class="warnInfo" style="color: #FF5777;font-size: 13px; padding: 3px;">提示信息</div>
					warnInfo.className="warnInfo";
					warnInfo.style.color='transparent';
					warnInfo.style.fontSize='13px';
					warnInfo.innerHTML='提示信息';
					inputInfo.appendChild(warnInfo);
					var password=document.createElement('div');//<div class="password" style="border: 1px solid #808080;">
					password.className="password";
					password.style.border='1px solid #808080';
					inputInfo.appendChild(password);
					var passwordimg=document.createElement('img');//<img src="images/passwordIcon.png" style="width: 15px;height: 15px;"/>
					passwordimg.style.width='15px';
					passwordimg.style.height='15px';
					passwordimg.setAttribute('src',"images/passwordIcon.png");
					password.appendChild(passwordimg);
					var passtext=document.createElement('input');//<input type="text" placeholder="密码" style="border: 1px solid transparent;font-size: 15px;"/>
					passtext.setAttribute('type','text');
					passtext.setAttribute('placeholder','密码');
					passtext.style.border="1px solid transparent";
					passtext.style.fontSize="15px";
					passtext.innerHTML='提示信息';
					password.appendChild(passtext);
					//password绑定事件
					function changepassValue(){//验证密码
						let value=passtext.value;
						warnInfo2.style.color='red';
						if(!((/^[a-zA-Z0-9]*$/).test(value))){
							warnInfo2.innerHTML='密码只能由字母和数字组成';
						}else if(value.length<5||value.length>12){
							warnInfo2.innerHTML='密码必须为5到12位之间';
						}else{
							warnInfo2.style.color='transparent';
						}
					}
					function clearpassWarn(){//聚焦清除警告
						warnInfo2.style.color='transparent';
					}
					passtext.onfocus=function(){
						clearpassWarn();
					},
					passtext.onblur=function(){
						changepassValue();
					}
					var warnInfo2=document.createElement('div');//<div class="warnInfo" style="color: #FF5777;font-size: 13px; padding: 3px;">提示信息</div> */
					warnInfo2.className="warnInfo";
					warnInfo2.style.color='transparent';
					warnInfo2.style.fontSize='13px';
					warnInfo2.innerHTML='提示信息';
					inputInfo.appendChild(warnInfo2);
					
					var ReFor=document.createElement('div');//<div class="Re-For" style="display: flex;justify-content: space-between; margin: 5px;">
					ReFor.className="Re-For";
					container.appendChild(ReFor);
					var Re=document.createElement('div');//<div class="Re">
					Re.className="Re";
					ReFor.appendChild(Re);
					var reInput=document.createElement('input');
					reInput.setAttribute('type','checkbox');
					reInput.setAttribute('name','remeberMe');
					Re.innerHTML='记住我';
					Re.appendChild(reInput);
					var For=document.createElement('div');//<div class="For">
					For.className="For";
					ReFor.appendChild(For);
					var forA=document.createElement('a');
					forA.setAttribute('href',forgetpwdUrl);
					forA.style.textDecoration='none';
					forA.style.color=color;
					forA.innerHTML='忘记密码';
					For.appendChild(forA);
					var loginButton=document.createElement('div');//<div class="login-button">
					loginButton.className="login-button";
					container.appendChild(loginButton);
					var button=document.createElement('button');
					button.className='logbutton';
					button.style.backgroundColor=color;
					button.style.color="white";
					button.style.border="1px solid";
					button.style.borderColor=color;
					button.innerHTML="登录";
					loginButton.appendChild(button);
					//发送表单事件
					button.onclick=function(){
						usertext.onblur();//防止空表单提交
						passtext.onblur();
						senddata();
					}
					function senddata(){
						if(warnInfo.style.color==='transparent'&&warnInfo2.style.color==='transparent'){
						let userN=usertext.value;
						let pwd=passtext.value;
						//发送ajax请求
						let a={
							'username':userN,
							"password":pwd
						}
						submitcallback(a);
						if(reInput.checked){//记住密码触发的回调函数							
							remembercallback(a)
						}
					}
					}
					
					var register=document.createElement('div');	//<div class="register" style="margin: 5px;">
					register.className="register";
					container.appendChild(register);
					/* <div class="register" style="margin: 5px;">
							<span>没有账号？</span><a href="#" style="color: darkcyan;text-decoration: none;">现在注册！</a>
						</div> */
					var nocount=document.createElement('span');
					nocount.innerHTML="没有账号？";
					register.appendChild(nocount);
					var registernow=document.createElement('a');
					registernow.setAttribute('href',registerUrl);
					registernow.style.color=color;
					registernow.style.textDecoration="none";
					registernow.innerHTML="现在注册!";
					register.appendChild(registernow);
					
					
					
		
	}
})