package com.aaenen.maopu_server.domain;

import java.io.Serializable;

/**
 * @author aaenen
 * @PackageName:com.aaenen.maopu_server.domain
 * @ClassName: Admin
 * @Description 管理员
 * @date 2021/3/14 14:34
 */

/**
 * 为了前后台的传输，还要实现序列化 implements Serializable
 */
public class Admin implements Serializable {
    //主键
    private Integer adminId;
    //账号
    private String adminName;
    //密码
    private String adminPassword;

    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }
}
