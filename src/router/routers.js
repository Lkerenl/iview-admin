import Main from '@/components/main'
// import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
    {
    path: '/stu_info',
    name: 'stu_info',
    meta: {
      access: ['student']
    },
    component: Main,
    children: [
      {
        path: 'stu_info_page',
        name: '学生信息',
        meta: {
          icon: 'ios-book',
          title: '学生信息'
        },
        component: () => import('@/view/stu_info/user_info-page.vue')
      }
    ]
  },
  {
    path: '/user_course',
    name: 'user_course',
    meta: {
      access: ['student']
    },
    component: Main,
    children: [
      {
        path: 'course',
        name: '已选课程',
        meta: {
          icon: '_qq',
          title: '已选课程'
        },
        component: () => import('@/view/user_course/course.vue')
      }
    ]
  },
  {
    path: '/user_score',
    name: 'tools_methods',
    component: Main,
    meta: {
      access: ['student']
    },
    children: [
      {
        path: 'score_page',
        name: '成绩查询',
        meta: {
          icon: 'ios-hammer',
          title: '成绩查询'
        },
        component: () => import('@/view/user_score/score.vue')
      }
    ]
  },
  {
    path: '/GPA',
    name: 'GPA',
    component: Main,
    meta: {
      access: ['student']
    },
    children: [
      {
        path: 'GPA_page',
        name: '学分绩查询',
        meta: {
          icon: 'md-planet',
          title: '学分绩查询'
        },
        component: () => import('@/view/GPA/GPA_page.vue')
      }
    ]
  },
  {
    path: '/user_info',
    name: 'user_info',
    meta: {
      access: ['teacher']
    },
    component: Main,
    children: [
      {
        path: 'user_info_page',
        name: '个人信息',
        meta: {
          icon: 'ios-book',
          title: '个人信息'
        },
        component: () => import('@/view/user_info/user_info_page.vue')
      }
    ]
  },
  {
    path: '/insert',
    name: 'insert',
    meta: {
      access: ['teacher']
    },
    component: Main,
    children: [
      {
        path: 'insert_page',
        name: '成绩录入',
        meta: {
          icon: 'md-trending-up',
          title: '成绩录入'
        },
        component: () => import('@/view/insert/insert_page.vue')
      }
    ]
  },
  {
    path: '/analyse',
    name: 'analyse',
    component: Main,
    meta: {
      access: ['teacher', 'management']
    },
    children: [
      {
        path: 'analyse_page',
        name: '成绩分析',
        meta: {
          icon: 'ios-document',
          title: '成绩分析'
        },
        component: () => import('@/view/analyse/analyse_page.vue')
      }
    ]
  },
  {
    path: '/tea_stu_score',
    name: 'tea_stu_score',
    component: Main,
    meta: {
      access: ['teacher', 'management']
    },
    children: [
      {
        path: 'tea_stu_score',
        name: '学生成绩',
        meta: {
          icon: 'md-add',
          title: '学生成绩'
        },
        component: () => import('@/view/tea_stu_score/tea_stu_score_page.vue')

      }
    ]
  },
  {
    path: '/confirm_score',
    name: '成绩确认',
    component: Main,
    meta: {
      access: ['management']
    },
    children: [
      {
        path: 'cno_query',
        name: '成绩确认',
        meta: {
          icon: 'md-funnel',
          title: '成绩确认'
        },
        component: () => import('@/view/confirm_score/confirm_score.vue')
      },
      {
        path: 'query',
        name: '详情',
        // hideInMenu: true,
        meta: {
          hideInMenu: true,
          icon: 'md-flower',
          title: route => `带参路由-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/confirm_score/show_details.vue')
      }
    ]
  },

  {
    path: '/dump_score',
    name: 'dump-socre',
    component: Main,
    meta: {
      access: ['management']
    },
    children: [
      {
        path: 'dump',
        name: '学生成绩表',
        meta: {
          icon: 'md-funnel',
          title: '学生成绩表'
        },
        component: () => import('@/view/dump-score/dump-score.vue')// '@/view/dump-score/dump-score.vue')
      }
    ]
  },
  {
    path: '/update-code',
    name: 'update-code',
    component: Main,
    meta: {
      access: ['student', 'teacher', 'management']
    },
    children: [
      {
        path: 'update-code_page',
        name: '修改密码',
        meta: {
          icon: 'ios-bug',
          title: '修改密码'
        },
        component: () => import('@/view/update-code/update-code_page.vue')
      }
    ]
  },
  {
    path: '/logout_modal',
    name: 'logout',
    component: Main,
    meta: {
      access: ['student', 'teacher', 'management']
    },
    children: [
      {
        path: '/logout_modal',
        name: '退出系统',
        meta: {
          icon: 'ios-navigate',
          title: '退出系统'
        },
        component: () => import('@/view/logout/logout_modal.vue')
      }
    ]
  },
  // {
  //   path: '/argu',
  //   name: 'argu',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: Main,
  //   children: [
  //     // {
  //     //   path: 'params/:id',
  //     //   name: 'params',
  //     //   meta: {
  //     //     icon: 'md-flower',
  //     //     title: route => `动态路由-${route.params.id}`,
  //     //     notCache: true,
  //     //     beforeCloseName: 'before_close_normal'
  //     //   },
  //     //   component: () => import('@/view/argu-page/params.vue')
  //     // },
  //     // {
  //     //   path: 'query',
  //     //   name: 'query',
  //     //   meta: {
  //     //     icon: 'md-flower',
  //     //     title: route => `带参路由-${route.query.id}`,
  //     //     notCache: true
  //     //   },
  //     //   component: () => import('@/view/confirm_score/show_details.vue')//'@/view/argu-page/query.vue')
  //     // }
  //   ]
  // },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
