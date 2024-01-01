// tab Routes
import Home from '../containers/Home/Home';
import FindADoctor from '../containers/FindADoctor/FindADoctor';
import Medicines from '../containers/Medicines/Medicines';
import ContactUs from '../containers/ContactUs/ContactUs';
import AskVirtualVaidya from '../containers/AskVirtualVaidya';

// screen routes
import Splash from '../containers/Splash';
import LoginScreen from '../containers/auth/LoginScreen';
import AuthStack from './Type/AuthStack';
import Signup from '../containers/auth/Signup';
import VerifyLoginOtp from '../containers/auth/VerifyLoginOtp';
import VerifyRegisterOtp from '../containers/auth/VerifyRegisterOtp';
import TabBar from './Type/TabBarNavigation';
import TermsOfService from '../containers/auth/TermsOfService';
import PrivacyPolicy from '../containers/auth/PrivacyPolicy';
import DrawerNavigation from './Type/DrawerNavigation';
import CategoryDoctorList from '../containers/FindADoctor/CategoryDoctorList';
import DortorProfile from '../containers/FindADoctor/DortorProfile';
import PatientsReview from '../containers/FindADoctor/PatientsReview';
import PaymentScreen from '../containers/FindADoctor/PaymentScreen';
import SelectTimeSlot from '../containers/FindADoctor/SelectTimeSlot';
import ConsultDoctor from '../containers/InstantConsultation/ConsultDoctor'
import ClinicDoctorDetailCard from '../containers/clinicConsultation/DoctorDetailCard'
import ProductByCategories from '../containers/Medicines/ProductByCategories';
import ProductDetail from '../containers/Medicines/ProductDetail';
import AppointmentBooked from '../containers/FindADoctor/AppointmentBooked';
import RescheduleAppointment from '../containers/FindADoctor/RescheduleAppointment';
import AppointmentCancellation from '../containers/FindADoctor/AppointmentCancellation';



export const TabRoute = {
  Home,
  FindADoctor,
  Medicines,
  ContactUs,
  AskVirtualVaidya,
};

export const StackRoute = {
  Splash,
  AuthStack,
  LoginScreen,
  VerifyLoginOtp,
  Signup,
  VerifyRegisterOtp,
  TabBar,
  TermsOfService,
  PrivacyPolicy,
  DrawerNavigation,
  CategoryDoctorList,
  DortorProfile,
  PatientsReview,
  PaymentScreen,
  SelectTimeSlot,
  ConsultDoctor,
  ClinicDoctorDetailCard,
  ProductByCategories,
  AppointmentBooked,
  RescheduleAppointment,
  AppointmentCancellation,
  ProductDetail,

  
};
