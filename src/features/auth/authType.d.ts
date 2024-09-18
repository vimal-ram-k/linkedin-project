type AuthType = {
  login: (userid, password) => void;
  logout: () => void;
};

type UserType = {
  username: string;
};
