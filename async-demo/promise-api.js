// let p = Promise.resolve({ id: 1, name: "Mahad" });

// p.then((user) => console.log(user));

// let e = Promise.reject(new Error("Something went wrong"));

// e.catch((err) => console.log(err.message));

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("name1");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("name2");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
Promise.race([p1, p2]).then((result) => console.log(result));
