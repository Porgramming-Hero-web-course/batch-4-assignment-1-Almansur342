{
  interface Profile{
    name: string;
    age: number;
    email: string;
  };
  function updateProfile (obj: Profile, updates: Partial<Profile>): Profile{
    return {...obj, ...updates};
  }
}