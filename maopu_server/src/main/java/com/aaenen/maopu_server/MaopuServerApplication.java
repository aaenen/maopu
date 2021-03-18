package com.aaenen.maopu_server;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 热更新  热加载
 * 1.cmd + shift + A ————>搜索registry，找到Registry...，注意是带三个点的，然后找到complier.automake.allow.when.app.running,勾选
 * 2.改完代码时候，cmd + F9可以进行热加载
 */
@SpringBootApplication
//启动前扫描dao这个包，加载进来
@MapperScan("com.aaenen.maopu_server.dao")
public class MaopuServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(MaopuServerApplication.class, args);
    }

}
