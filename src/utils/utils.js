export function getUserDetailObject(response) {
  const { name, email } = response;
  return { name: name, email: email };
}

export function saveUserDetails(data) {
  let existingUsersData = localStorage.getItem("userDetails");

  existingUsersData = JSON.parse(existingUsersData);

  existingUsersData.push(data);

  existingUsersData = JSON.stringify(existingUsersData);

  localStorage.setItem("userDetails", existingUsersData);
}
