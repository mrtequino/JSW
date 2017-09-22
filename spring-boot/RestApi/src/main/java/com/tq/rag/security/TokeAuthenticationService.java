package com.tq.rag.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.LinkedHashMap;
import java.util.regex.Pattern;

class TokenAuthenticationService {

    static final long EXPIRATIONTIME = 864_000_000; // 10 days
    static final String SECRET = "ThisIsASecret";
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    static void addAuthentication(HttpServletResponse res, Authentication auth) throws JsonProcessingException {
        List<AccountRoles> roles = new ArrayList<>();
        for (GrantedAuthority ga : auth.getAuthorities()) {
            AccountRoles rol = new AccountRoles();
            rol.setRol(ga.getAuthority());
            roles.add(rol);
        }
        String jsonRoles = new ObjectMapper().writeValueAsString(roles);

        String JWT = Jwts.builder().setSubject(auth.getName()).claim("roles", jsonRoles)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(SignatureAlgorithm.HS512, SECRET).compact();
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
    }

    static Authentication getAuthentication(HttpServletRequest request)
            throws JsonParseException, JsonMappingException, IOException {
        String token = request.getHeader(HEADER_STRING);
        if (token != null) {
            // parse the token.
            Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody();
            // usuario desde el jwt
            String user = claims.getSubject();

            // autorizaciones desde el jwt
            List<LinkedHashMap> roles = new ObjectMapper().readValue(claims.get("roles").toString(), List.class);
            List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
            for (LinkedHashMap<String, String> rol : roles) {
                grantedAuthorities.add(new SimpleGrantedAuthority(rol.get("rol")));
            }

            return user != null ? new UsernamePasswordAuthenticationToken(user, null, grantedAuthorities) : null;
        }
        return null;
    }
}
