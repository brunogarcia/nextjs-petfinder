const {
  NEXT_PUBLIC_PETFINDER_API_URL,
  NEXT_PUBLIC_PETFINDER_CLIENT_ID,
  NEXT_PUBLIC_PETFINDER_CLIENT_SECRET,
} = process.env;

const getAccessToken = async () => {
  const { access_token } = await (
    await fetch(`${NEXT_PUBLIC_PETFINDER_API_URL}/oauth2/token`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: NEXT_PUBLIC_PETFINDER_CLIENT_ID,
        client_secret: NEXT_PUBLIC_PETFINDER_CLIENT_SECRET,
      }),
    })
  ).json();

  return access_token;
};

export default getAccessToken;
