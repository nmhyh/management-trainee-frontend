export default [{
  _name: "CSidebarNav",
  _children: [
    {
      _name: "CSidebarNavDropdown",
      name: "Lên kế hoạch",
      router: "/plan",
      icon: "cil-plant",
      items: [
        {
          name: "Danh sách kế hoạch",
          to: "/plan/list",
          role: "Admin",
        },
        {
          name: "Thêm mới kế hoạch",
          to: "/plan/create",
          role: "Admin",
        },
      ],
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý sinh viên của tôi",
      to: "/student-management/students-managed-by-the-teacher",
      icon: "cil-user-follow",
      role: "TEACHER",
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Trang chủ sinh viên',
      to: '/student-home-page',
      icon: 'cil-home',
      role: "STUDENT",
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Danh sách biểu mẫu',
      to: '/internship-data-list',
      icon: 'cil-file',
      role: "STUDENT",
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Quản lý tài khoản',
      to: '/user-management',
      icon: 'cil-user',
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Phân công giáo viên",
      to: "/teacher-assignment",
      icon: "cil-flip",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Duyệt phiếu giới thiệu",
      to: "/confirm-referra-file",
      icon: "cil-pencil",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý công ty",
      to: "/company-management",
      icon: "cil-building",
      role: ["Admin", "TEACHER"],
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý sinh viên",
      to: "/student-management/list",
      icon: "cil-user-follow",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý giáo viên",
      to: "/teacher-management",
      icon: "cil-group",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý khoa - hệ - ngành",
      to: "/trainingsystem-management",
      icon: "cil-aperture",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý biểu mẫu",
      to: "/internship-data-management",
      icon: "cil-file",
      role: ["Admin", "TEACHER"],
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý báo cáo hàng tuần",
      to: "/weekly-report-management",
      icon: "cil-book",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Danh sách báo cáo hàng tuần",
      to: "/weekly-report-management-by-teacher",
      icon: "cil-book",
      role: "TEACHER",
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý lớp",
      to: "/class-management",
      icon: "cil-layers",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Quản lý thông báo",
      to: "/notification-management",
      icon: "cil-bell",
      role: ["Admin", "TEACHER"],
    },
    {
      _name: "CSidebarNavItem",
      name: "Thông báo đến sinh viên",
      to: "/notification-management/create-by-teacher",
      icon: "cil-send",
      role: 'TEACHER',
    },
    {
      _name: "CSidebarNavItem",
      name: "Giấy giới thiệu thực tập",
      to: "/certificate-management",
      icon: "cil-note-add",
      role: "STUDENT",
    },
    {
      _name: "CSidebarNavItem",
      name: "Xác nhận thực tập",
      to: "/internship-confirmation",
      icon: "cil-paperclip",
      role: "STUDENT",
    },
    {
      _name: "CSidebarNavItem",
      name: "Upload file",
      to: "/upload-file",
      icon: "cil-pencil",
      role: "STUDENT",
    },
    {
      _name: "CSidebarNavItem",
      name: "Thông kê xác nhận thực tập",
      to: "/internship-confirmation-statistics",
      icon: "cil-chart-line",
      role: "Admin",
    },
    {
      _name: "CSidebarNavItem",
      name: "Báo cáo hàng tuần",
      to: "/weekly-report-of-student",
      icon: "cil-book",
      role: "STUDENT",
    },
    {
      _name: "CSidebarNavItem",
      name: "Phiếu khảo sát",
      to: "/questionnaire",
      icon: "cil-book",
      role: "Admin",
    },
  ],
},];
