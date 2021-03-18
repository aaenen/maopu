package com.aaenen.maopu_server.service.implmenet;

import com.aaenen.maopu_server.dao.AdminMapper;
import com.aaenen.maopu_server.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author aaenen
 * @PackageName:com.aaenen.maopu_server.service.implmenet
 * @ClassName: AdminServiceImpl
 * @Description
 * @date 2021/3/14 15:31
 */

/**
 * 管理员Service实现类
 */
@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminMapper adminMapper;

    /**
     * 验证管理员密码是否正确
     *
     * @param username 管理员用户名
     * @param password 管理员密码
     * @return
     */
    @Override
    public boolean verifyPassword(String username, String password) {
        return adminMapper.verifyPassword(username, password) > 0;
    }
}
