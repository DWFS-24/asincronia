function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
//async/await
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}
// then/catch
// function asyncCall() {
//   console.log('calling');
//   resolveAfter2Seconds().then((result) => {
//     console.log(result);
//   });
//   // Expected output: "resolved"
// }

asyncCall();