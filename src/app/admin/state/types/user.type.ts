export interface User {
  _id: string;
  name?: string;
  email?: string;
  phone?: number;
  status?: boolean;
  isverified?: boolean;
  jwttoken?: string;
  token?: string;
}

export interface UserState {
  users: ReadonlyArray<User>;
  loading: boolean;
  loaded: boolean;
  error: any;
}
export interface Banner {
  _id?: String;
  heading?: String;
  subheading?: String;
  image?: String;
  blocked?: boolean;
}

export interface BannerState {
  banners: ReadonlyArray<Banner>;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export interface Professional {
  _id?: string;
  name?: string;
  ownername?: string;
  email?: string;
  phone?: string;
  blocked?: boolean;
  isVerifed: boolean;
  certificate?: string;
  photo?: string;
}
export interface ProfessionalState {
  professionals: ReadonlyArray<Professional>;
  loading: boolean;
  loaded: boolean;
  error: any;
}
export interface dashboarddata {
  usercount: number;
  professionalnotverifiedcount: number;
  professionalverifiedcount: number;
  bannercount: number;
  bookedcount: number;
}
