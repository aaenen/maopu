package com.aaenen.maopu_server.controller;


import com.aaenen.maopu_server.service.AdminService;
import com.aaenen.maopu_server.utils.Consts;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @author aaenen
 * @PackageName:com.aaenen.maopu_server.controller
 * @ClassName: AdminController
 * @Description 控制层，执行判断是否登录的方法
 * @date 2021/3/14 15:37
 */
@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    /**
     * 判断是否登录成功
     */
    @RequestMapping(value = "/admin/login/status",method = RequestMethod.POST)
    public Object loginStatus(HttpServletRequest request, HttpSession session){
        JSONObject jsonObject = new JSONObject();
        String adminName = request.getParameter("adminName");
        String adminPassword = request.getParameter("adminPassword");
        boolean flag = adminService.verifyPassword(adminName,adminPassword);
        if(flag){
            jsonObject.put(Consts.CODE,1);
            jsonObject.put(Consts.MSG,"登录成功");
            session.setAttribute(Consts.ADMIN_NAME,adminName);
            return jsonObject;
        }
        jsonObject.put(Consts.CODE,1);
        jsonObject.put(Consts.MSG,"用户名或密码错误");
        return jsonObject;
    }
}
