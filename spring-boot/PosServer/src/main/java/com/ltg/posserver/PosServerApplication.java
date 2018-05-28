/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ltg.posserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 *
 * @author dpeniafiel
 */
@SpringBootApplication
@EnableAutoConfiguration
public class PosServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(PosServerApplication.class, args);
    }
}
