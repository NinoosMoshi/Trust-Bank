package com.ninos.auth_users.controller;

import com.ninos.auth_users.dto.UpdatePasswordRequest;
import com.ninos.auth_users.dto.UserDTO;
import com.ninos.auth_users.service.UserService;
import com.ninos.res.Response;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;


    @GetMapping
    public ResponseEntity<Response<Page<UserDTO>>> getAllUsers(@RequestParam(defaultValue = "0") int page,
                                                               @RequestParam(defaultValue = "10") int size){
        return ResponseEntity.ok(userService.getAllUsers(page, size));
    }

    @GetMapping("/me")
    public ResponseEntity<Response<UserDTO>> getMyProfile(){
        return ResponseEntity.ok(userService.getMyProfile());
    }

    @PutMapping("/update-password")
    public ResponseEntity<Response<?>> updatePassword(@RequestBody @Valid UpdatePasswordRequest updatePasswordRequest){
        return ResponseEntity.ok(userService.updatePassword(updatePasswordRequest));
    }

    @PutMapping("/profile-picture")
    public ResponseEntity<Response<?>> uploadProfilePicture(@RequestParam("file")MultipartFile file){
        return ResponseEntity.ok(userService.uploadProfilePicture(file));
    }



}
