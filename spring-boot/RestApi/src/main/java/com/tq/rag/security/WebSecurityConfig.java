package com.tq.rag.security;

import java.util.Arrays;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().authorizeRequests().antMatchers("/").permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll().anyRequest().authenticated().and()
                // We filter the api/login requests
                .addFilterBefore(new JWTLoginFilter("/login", authenticationManager()),
                        UsernamePasswordAuthenticationFilter.class)
                // And filter other requests to check the presence of JWT in header
                .addFilterBefore(new JWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    // @Override
    @Autowired
    protected void configureAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        // Create a default account
//		auth.inMemoryAuthentication().withUser("admin").password("password").roles("ADMIN");
        auth.jdbcAuthentication().dataSource(dataSource).usersByUsernameQuery(
                "select aa.usua_usuario as \"username\", \n"
                + "aa.usua_clave as \"password\", \n"
                + "(case when aa.usua_estado='ACTIVO' then 1 else 0 end) as \"enabled\" \n"
                + "from segu_usuario aa \n"
                + "WHERE aa.usua_usuario=?")
                .authoritiesByUsernameQuery(
                        "select cc.usua_usuario AS \"username\", \n"
                        + "'ROLE_'||bb.role_rol as \"rol\" \n"
                        + "from segu_usua_role aa \n"
                        + "inner join segu_roles bb on bb.role_codigo=aa.role_codigo\n"
                        + "inner join segu_usuario cc on cc.usua_codigo=aa.usua_codigo\n"
                        + "WHERE cc.usua_usuario=?");
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setExposedHeaders(Arrays.asList("Authorization"));
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
