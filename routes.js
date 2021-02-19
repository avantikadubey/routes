import CovidDashboard from 'views/CovidDashboard/CovidDashboard';
import LiveFeeds from 'views/LiveFeeds/LiveFeeds';
import Notifications from 'views/Notifications/Notifications';
import CameraManagement from 'views/CameraManagement/CameraManagement';
import ContactTracing from 'views/ContactTracing/ContactTracing';
import CrowdAnalytics from 'views/CrowdAnalytics/CrowdAnalytics';
import SocialDistancing from 'views/SocialDistancing/SocialDistancing';
import MobileDashboard from 'views/MobileDashboard/MobileDashboard';
import MobileNotifications from 'views/MobileNotifications/MobileNotifications';
import MobileLiveFeeds from 'views/MobileLiveFeeds/MobileLiveFeeds';
import EmployeeAssessment from 'views/EmployeeAssessment/EmployeeAssessment';
import MobileCrowdAnalytics from 'views/MobileCrowdAnalytics/MobileCrowdAnalytics';
import ManageUsers from 'views/ManageUsers/ManageUsers';
import MobileCameraManagement from 'views/MobileCameraManagement/MobileCameraManagement';
import MobileContactTracing from 'views/MobileContactTracing/MobileContactTracing';
import SelfAssessmentReport from 'views/SelfAssessmentReport/SelfAssessmentReport';
import TagManagement from 'views/TagManagement/TagManagement';
import DeviceManagement from 'views/DeviceManagement/DeviceManagement';
import EntryExitManagement from 'views/EntryExitManagement/EntryExitManagement';
import TrackSocialDistancing from 'views/TrackSocialDistancing/TrackSocialDistancing';
import SocialDistanceTrace from 'views/SocialDistanceTrace/SocialDistanceTrace';
import SettingManagement from 'views/SettingManagement/SettingManagement';
import ManageHealthCare from 'views/ManageHealthCare/ManageHealthCare';
import ManageChat from 'views/ManageChat/ManageChat';
import FAQManagement from 'views/FAQManagement/FAQManagement';
import FAQSetting from 'views/FAQSetting/FAQSetting';
import TermAndConditionSetting from 'views/TermAndConditionSetting/TermAndConditionSetting';
import AboutSetting from 'views/AboutSetting/AboutSetting';
import TrackBlueTooth from 'views/TrackBlueTooth/TrackBlueTooth';
import FeedBackManagement from 'views/FeedBackManagement/FeedBackManagement';
import FeedBackSetting from 'views/FeedBackSetting/FeedBackSetting';

const routes = [
  {
    path: '/dashboard',
    name: 'sidebar.link1',
    icon: 'fas fa-people-arrows',
    component: CovidDashboard,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
  },
  {
    path: '/entry-exit',
    name: 'Entry/Exit Management',
    icon: 'fas fa-people-arrows',
    component: EntryExitManagement,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
    hideInNavbar: false,
  },
  {
    path: '/mobile-dashboard',
    name: 'Mobile Dashboard',
    icon: 'fas fa-people-arrows',
    component: MobileDashboard,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
    hideInNavbar: true,
    hideFooter: true,
  },
  {
    path: '/alerts',
    name: 'sidebar.link12',
    icon: 'fas fa-bell',
    component: Notifications,
    layout: '/admin',
    roles: ['super_user', 'admin', 'security', 'senior_mgmt'],
  },
  {
    path: '/mobile-notification',
    name: 'Mobile Notifications',
    icon: 'fas fa-people-arrows',
    component: MobileNotifications,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
    hideInNavbar: true,
    hideFooter: true,
  },

  {
    path: '/live-feeds',
    name: 'sidebar.link11',
    icon: 'fas fa-video',
    component: LiveFeeds,
    layout: '/admin',
    roles: ['super_user', 'security', 'senior_mgmt'],
    hideInNavbar: false,
  },
  {
    path: '/mobile-live-feeds',
    name: 'Mobile Live Feed',
    icon: 'fas fa-video',
    component: MobileLiveFeeds,
    layout: '/admin',
    roles: ['super_user', 'security', 'senior_mgmt'],
    hideInNavbar: true,
    hideFooter: true,
  },

  {
    path: '/stream-list',
    name: 'sidebar.link10',
    icon: 'fas fa-camera-retro',
    component: CameraManagement,
    layout: '/admin',
    roles: ['super_user', 'security', 'senior_mgmt', 'it'],
  },
  {
    path: '/mobile-stream-list',
    name: 'Mobile Camera Management',
    icon: 'fas fa-camera-retro',
    component: MobileCameraManagement,
    layout: '/admin',
    roles: ['super_user', 'security', 'senior_mgmt', 'it'],
    hideInNavbar: true,
    hideFooter: true,
  },
  {
    path: '/contact-tracing',
    name: 'sidebar.link9',
    icon: 'fas fa-people-arrows',
    component: ContactTracing,
    layout: '/admin',
    roles: ['super_user', 'hr', 'senior_mgmt', 'healthcare'],
  },
  {
    path: '/mobile-contact-tracing',
    name: 'Mobile Contract Tracing',
    icon: 'fas fa-people-arrows',
    component: MobileContactTracing,
    layout: '/admin',
    roles: ['super_user', 'hr', 'senior_mgmt'],
    hideInNavbar: true,
    hideFooter: true,
  },
  {
    path: '/crowd-analytics',
    name: 'CROWD ANALYTICS',
    icon: 'fas fa-people-arrows',
    component: CrowdAnalytics,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
    hideInNavbar: false,
  },
  {
    path: '/mobile-crowd-analytics',
    name: 'MOBILE CROWD ANALYTICS',
    icon: 'fas fa-people-arrows',
    component: MobileCrowdAnalytics,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
    hideInNavbar: true,
    hideFooter: true,
  },
  {
    path: '/lab-monitoring',
    name: 'Lab Monitoring',
    icon: 'fas fa-people-arrows',
    component: SocialDistancing,
    layout: '/admin',
    roles: ['super_user', 'hr', 'senior_mgmt'],
    hideInNavbar: false,
  },
  {
    path: '/employee-assessment',
    name: 'Employee Assessment',
    icon: 'fas fa-people-arrows',
    component: EmployeeAssessment,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
    hideInNavbar: true,
  },
  {
    path: '/self-assessment-report',
    name: 'Self Assessment Report',
    icon: 'fas fa-people-arrows',
    component: SelfAssessmentReport,
    layout: '/admin',
    roles: ['super_user', 'admin', 'hr', 'security', 'senior_mgmt'],
    hideInNavbar: true,
  },
  {
    path: '/manage-users',
    name: 'Manage Users',
    icon: 'fas fa-people-arrows',
    component: ManageUsers,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: true,
  },
  {
    path: '/tag-management',
    name: 'BT Tag Management',
    icon: 'fas fa-people-arrows',
    component: TagManagement,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: false,
  },
  {
    path: '/device-provision',
    name: 'device Provisioning',
    icon: 'fas fa-people-arrows',
    component: DeviceManagement,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: true,
  },
  {
    path: '/social-distancing',
    name: 'Social Distancing',
    icon: 'fas fa-people-arrows',
    component: TrackSocialDistancing,
    layout: '/admin',
    roles: ['super_user', 'hr', 'healthcare'],
    hideInNavbar: false,
  },
  {
    path: '/social-distance-trace',
    name: 'Social Distance Trace',
    icon: 'fas fa-people-arrows',
    component: SocialDistanceTrace,
    layout: '/admin',
    roles: ['super_user', 'hr', 'healthcare'],
    hideInNavbar: true,
  },
  {
    path: '/setup',
    name: 'SetUp',
    icon: 'fas fa-people-arrows',
    component: SettingManagement,
    layout: '/admin',
    roles: ['super_user'],
  },
  {
    path: '/manage-healthcare',
    name: 'Manage healthCare Helpline',
    icon: 'fas fa-people-arrows',
    component: ManageHealthCare,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: true,
  },
  {
    path: '/manage-chat',
    name: 'Manage Chat',
    icon: 'fas fa-people-arrows',
    component: ManageChat,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: false,
  },
  {
    path: '/faq',
    name: 'FAQ',
    icon: 'fas fa-people-arrows',
    component: FAQManagement,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: false,
  },
  {
    path: '/manageFAQ',
    name: 'FAQ',
    icon: 'fas fa-people-arrows',
    component: FAQSetting,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: true,
  },
  {
    path: '/manageTerms',
    name: 'FAQ',
    icon: 'fas fa-people-arrows',
    component: TermAndConditionSetting,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: true,
  },
  {
    path: '/manageAbout',
    name: 'FAQ',
    icon: 'fas fa-people-arrows',
    component: AboutSetting,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: true,
  },
  {
    path: '/track-bluetooth',
    name: 'BlueTooth',
    icon: 'fas fa-people-arrows',
    component: TrackBlueTooth,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: false,
  },
  {
    path: '/feedBack',
    name: 'feedBack',
    icon: 'fas fa-people-arrows',
    component: FeedBackManagement,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: false,
  },
  {
    path: '/manageFeedBack',
    name: 'manage FeedBack',
    icon: 'fas fa-people-arrows',
    component: FeedBackSetting,
    layout: '/admin',
    roles: ['super_user'],
    hideInNavbar: true,
  },
];
export default routes;
