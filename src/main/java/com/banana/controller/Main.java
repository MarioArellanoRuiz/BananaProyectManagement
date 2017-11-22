/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.banana.controller;

import com.banana.model.User;

/**
 *
 * @author Dell
 */
public class Main {
    public static void main(String[] args) {
        User newUser = new User("mario", "arellano", "mario@outlook.com", "123");
        Operaciones.altaUser(newUser);
    }
    
}
