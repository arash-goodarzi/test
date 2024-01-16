

export const getUserData = async (username:string) => {
  try {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`${apiUrl}?name=${username}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }

};
