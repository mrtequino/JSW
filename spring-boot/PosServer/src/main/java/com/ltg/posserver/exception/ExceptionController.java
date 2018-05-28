/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ltg.posserver.exception;

import java.util.Date;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 *
 * @author dpeniafiel
 */
//@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
@RestController
public class ExceptionController extends ResponseEntityExceptionHandler {

    @ExceptionHandler(AuthenticationException.class)
    protected ResponseEntity<CustomError> handleAllExceptions(Throwable ex, WebRequest request) {
        CustomError apiError = new CustomError();
        apiError.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        apiError.setTimestamp(new Date());
        apiError.setMessage(ex.getMessage());
        apiError.setStatusText("ERROR");
        apiError.setUrl(request.getContextPath());
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }
}
