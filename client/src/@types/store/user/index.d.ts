interface UserType {
  id: number;
  name: string;
  profileImage: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  sex: number;
  residence: string;
  birthPlace: string;
  school: string;
  job: string;
  hobby: string;
  bestScore: number;
  averageDistance: number;
  homeCourse: string;
  email: string;
  password: string;
  clubImage: string;
  show: number;
  typeId: string;
  favourite: string;
  blood: number;
  history: number;
  hcap: number;
  classification: number;
}

type PartialUserType = Partial<UserType>;
type ArrayPartialUserType = PartialUserType[];
type ObjectUserType = { [key: number]: UserType };
type SignupUserType = Pick<UserType, 'name' | 'password' | 'email' | 'sex'>;
type SNSUserType = Pick<PartialUserType, 'facebook' | 'twitter' | 'instagram' | 'youtube'>;
type LoginUserType = Pick<UserType, 'password' | 'email'>;
type ImageUserType = Pick<UserType, 'profileImage' | 'clubImage'>;
type PartialImageUserType = Partial<ImageUserType>;
