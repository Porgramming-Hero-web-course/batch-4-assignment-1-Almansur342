{
  interface Profile{
    name: string;
    age: number;
    email: string;
  };
  function updateProfile (obj: Profile, updates: Partial<Profile>): Profile{
    return {...obj, ...updates};
  }
  const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile,{ age: 26 }))
}