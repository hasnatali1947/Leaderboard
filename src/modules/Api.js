const post = async (object) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEkSj3aHvfo77HaUbGSz/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    })
    .then((res) => res.json())
    .catch((error) => error);
  return response;
};

const get = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEkSj3aHvfo77HaUbGSz/scores/',
    {
      method: 'GET',
    })
    .then((res) => res.json())
    .catch((error) => error);
  return response;
};

export { post, get };
