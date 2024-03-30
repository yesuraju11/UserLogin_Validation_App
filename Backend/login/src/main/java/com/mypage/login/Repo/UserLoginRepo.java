package com.mypage.login.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mypage.login.Entity.UserLogin;

public interface UserLoginRepo extends JpaRepository<UserLogin, Integer>
{
	// this method used to fetch the all data users
	List<UserLogin> findAll();

	// this method used to get the one user by using email 
	List<UserLogin> findByEmail(String email);
}
