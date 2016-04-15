// Asynchronous functions - callback heaven:

// What if we have, for example a sequence of promises or even sequence of promises with conditional logic for async functionality:

const username = 'gadyonysh';
const getProfile = () => fetch(`https://api.github.com/users/${username}`);
const getRepos = () => fetch(`https://api.github.com/users/${username}/repos`);

getProfile()
  .then(profileResponse => profileResponse.json())
  .then(profile => getRepos()
    .then(reposResponse => reposResponse.json())
    .then(repos => ({
      profile,
      repos
    }))
  )
  .then(combined => {
    console.log(combined);
  })
  .catch(err => {
    console.error(err);
  }); // can be simplified with external storage

// To define function as asynchronous it should be marked with "async" keyword:
async function asyncAction() {}
// or:
const asyncActionArrow = async () => ({});

// Async function call must be marked with "await" keyword:
const actionResult = await asyncAction();

// We can also "await" on a promise:
const asyncActionPromise = () => new Promise((resolve, reject) => resolve('gotcha!'));
const promiseResult = await asyncActionPromise();

// after we get "await" result, the next line will be executed

// We can rewrite our github api usage example with:

const getCombined = async () => {
  const profileResponse = await getProfile();
  const profile = await profileResponse.json();
  const reposResponse = await getRepos();
  const repos = await reposResponse.json();

  return {
    profile,
    repos
  };
};

(async function()
{
  try
  {
    const combined = await getCombined();
    console.log(combined);
  }
  catch (err)
  {
    console.error(err);
  }
})();

getCombined()
  .then(combined => console.log(combined))
  .catch(err => console.error(err));


// To call async functions in concurrent way:
const concurrent = async () => {
  const [res1, res2, res3] = await Promise.all([asyncFn1, asyncFn2, asyncFn3]);
  /* do something with results */
};

const racing = async () => await Promise.race([asyncFn1, asyncFn2, asyncFn3]);;
