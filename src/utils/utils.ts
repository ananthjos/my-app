export interface UserDetail {
  name: Name;
  email: string;
}

export interface Name {
  first: string;
  last: string;
  title: string;
}

export interface Response {
  gender: string;
  name: Name;
  location: object;
  email: string;
  login: object;
  dob: object;
  registered: object;
  phone: string;
  cell: string;
  id: object;
  picture: object;
  nat: string;
}

export function getUserDetailObject(response: Response): UserDetail {
  // const { name, email }:{name:object;email:string} = response;
  const name: Name = response?.name;
  const email: string = response?.email;
  return { name: name, email: email };
}

export function saveUserDetails(data: object): void {
  let existingUsersData = JSON.parse(
    localStorage.getItem("userDetails") || "{}"
  );

  let parsedExistingData: object[] = JSON.parse(existingUsersData);

  parsedExistingData.push(data);

  existingUsersData = JSON.stringify(parsedExistingData);

  localStorage.setItem("userDetails", existingUsersData);
}
