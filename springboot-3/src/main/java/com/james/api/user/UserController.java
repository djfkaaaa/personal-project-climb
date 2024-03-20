package com.james.api.user;

import com.james.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping("/login")
    public Map<String,?> login(@RequestBody Map<?,?> paraMap){
        Map<String,String> resMap = new HashMap<>();
        String name = (String)paraMap.get("username");
        String pw = (String)paraMap.get("password");
        System.out.println("리퀘스트가 가져온 ID = " + name);
        System.out.println("리퀘스트가 가져온 PW = " + pw);
        resMap.put("username", name);
        resMap.put("password", pw);
        return resMap;
    }

    public Map<String,?>  addUsers() {
        return null;
    }

    public Map<String,?>  save(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?>  findAll() throws SQLException {
        return null;
    }
//
//    public Map<String,?>  login(@RequestBody Map<String,?> map) {
//        return null;
//    }

    public Map<String,?>  findById(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?>  updatePassword(@RequestBody Map<String,?> map){
        return null;
    }

    public Map<String,?>  delete(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?>  existsById(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?>  findUsersByName(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String, ?> findUsersByNameFromMap(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?>  findUsersByJob(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String, ?> findUsersByJobFromMap(@RequestBody Map<String,?> map) {
        return null;
    }

    public String count() {
        return null;
    }
    public Optional<User> getOne(@RequestBody Map<String,?> map) {
        return null;
    }
    public Map<String, ?> getUserMap(){
        return null;
    }
    public Messenger putUsers(@RequestBody Map<String,?> map) throws SQLException {
        return null;
    }
    public Messenger createTable() throws SQLException {
        return null;
    }
    public Messenger deleteTable() throws SQLException {
        return null;
    }
}
