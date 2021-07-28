

export const submitForm = data =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
      console.log(data);
    }, 750)
  }
  );