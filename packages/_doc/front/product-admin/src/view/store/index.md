
> 全局可用的状态

## state

### 数据字典 meta

- meta: `object` 数据字典模块
  - `area: Area[]` 区域
  - `industry: Industry[]` 行业
  - `company_scale: CompanyScale[]` 公司规模
  - `invoice_type: InvoiceType[]` 发票类型

- 用法
    ```js
    computed: {
        ...mapState('meta', [
            'area'
        ])
    }
    ```

### 用户信息 user/info

- user/info: `object` 用户信息模块
  - `id: number` 用户id
  - `name: string` 用户名称
  - `enable: boolean` 启用状态
  - `email: string` 邮箱
  - `phone: string` 手机号码
  - `post: string` 岗位
  - `sex: enum` 性别 -1 未知 1男 2女
  - `type: enum` 用户类型 1管理员 2成员
  - `updatePwdTime: string` 更新密码时间

- 用法
    ```js
    computed: {
        ...mapState('user/info', [
            'name'
        ])
    }
    ```

### 用户配置 user/config

- user/config: `object` 用户配置模块

### 用户权限 user/permission

- user/permission: `object` 用户权限模块
  - `list: Permission[]` 权限列表

- 用法
    ```js
    computed: {
        ...mapState('user/permission', [
            'list'
        ])
    }
    ```

## getters

### 用户权限 user/permission


- 类型 `Permission`
    ```ts
    interface Permission {
        ['权限标识']: boolean
    }
    ```

- 用法
    ```js
    computed: {
        ...mapGetters('user', [
            'permission'
        ])
    }
    ```
