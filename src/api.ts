const sleep = (time: number) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};

export const fetchEmployee = async () => {
  await sleep(800);

  return {
    firstName: "John",
    lastName: "Doe",
  };
};
