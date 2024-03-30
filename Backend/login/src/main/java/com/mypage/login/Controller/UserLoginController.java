package com.mypage.login.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mypage.login.Entity.UserLogin;
import com.mypage.login.Repo.UserLoginRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/userlogin")
public class UserLoginController 
{
	@Autowired
	private UserLoginRepo userLoginRepo;
	private JdbcTemplate jdbcTemplate;
	
	//-----------List of users data-----------
	@GetMapping("/user")
	public List<UserLogin> getAllData()
	{ 
		System.out.println(userLoginRepo.findAll());
		return userLoginRepo.findAll();
		
	}
	
	//-----------post Method---- Register Data-----------
	
		@PostMapping("/post")
		public String postStdData(@RequestBody UserLogin userLogin)
		{
			
			System.out.println("--------------------------");
			
			System.out.println(userLogin);
			
			System.out.println("--------------------------");
			userLoginRepo.save(userLogin);
			
			return "dataa put";
			 
		}
		
		//---------------------- login data validation-----
		@PostMapping("/validlogin")
		//@ResponseBody
		public UserLogin validLogin(@RequestParam("email") String email,@RequestParam("password") String password )
		{
			
		
			List<UserLogin> user=userLoginRepo.findByEmail(email);
			for (UserLogin userLogin : user) 
			{
				//System.out.println(userLogin);
				
				if(password.equals(userLogin.getPassword()))
				{
					System.out.println(userLogin);
					return userLogin ;
				}
			
			}
			return  null;
			
			
			
		}
		
		//---------------Forgot Password method--------------------------------------
		
		@PostMapping("/forgotPassword")
		public UserLogin forgotPassword(@RequestParam("email") String email,@RequestParam("phoneNum") String phoneNum )
		{
			List<UserLogin> user=userLoginRepo.findByEmail(email);
			for (UserLogin userLogin : user) 
			{
				//System.out.println(userLogin);
				
				if(phoneNum.equals(userLogin.getPhoneNum()))
				{
					System.out.println(userLogin);
					return userLogin ;
				}
			
			}
			
			return null;
			
		}

	
	

}
