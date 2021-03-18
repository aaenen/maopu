package com.aaenen.maopu_server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author aaenen
 * @PackageName:com.aaenen.maopu_server.config
 * @ClassName: WebMvcConfig
 * @Description 解决跨域问题
 * @date 2021/3/14 14:05
 */

/**
 * @author aaenen
 * 解决跨域问题，Springboot启动时自动加载里面的方法
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        /**
         * addMapping：允许哪些目录可以使用跨域访问
         * allowedOrigins：允许哪些网站可以跨域访问
         * allowedMethods：允许哪些方法可以跨域访问
         * allowCredentials：访问时是否需要验证
         */
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowCredentials(true);
    }
}
