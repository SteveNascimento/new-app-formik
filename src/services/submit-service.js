

export const submitForm = data =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(data);
      resolve(data)
    }, 2000)
  }
  );