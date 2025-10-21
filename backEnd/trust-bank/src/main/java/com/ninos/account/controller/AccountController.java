package com.ninos.account.controller;

import com.ninos.account.dto.AccountDTO;
import com.ninos.account.entity.Account;
import com.ninos.account.service.AccountService;
import com.ninos.res.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;


    @GetMapping("/me")
    public ResponseEntity<Response<?>> getMyAccounts(){
        return ResponseEntity.ok(accountService.getMyAccounts());
    }

    @DeleteMapping("/close/{accountNumber}")
    public ResponseEntity<Response<?>> deleteAccount(@PathVariable String accountNumber){
        return ResponseEntity.ok(accountService.closeAccount(accountNumber));
    }


}
