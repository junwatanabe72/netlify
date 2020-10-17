interface ProfileEditDataType {
  email: string;
  name: string;
  password: string;
  profileImage: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  sex: string;
  residence: string;
  birthPlace: string;
  school: string;
  job: string;
  hobby: string;
  bestScore: number;
  averageDistance: number;
  homeCourse: string;
  clubImage: string;
  show: string;
  confirmedPassword: string;
  typeId: string;
  favourite: string;
  blood: string;
  history: string;
  hcap: number;
  classification: string;
}

interface FormikValueType<T> {
  formikValues: T;
}
