export default defineEventHandler(async (event) => {
  //   // query parameter
  //   const { name } = getQuery(event);

  //   // handle post data, useBody is a asynchornous so use await before it
  //   const { age } = await readBody(event)

  //   return {
  //     message: `Hello, ${name}! You are ${age} years old.`
  //   }

  // Api call with pvt key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_llW18MfOa2UNwU0x0iEouVx5NNxOB5rp1PdUC6I8"
  );
  return data;
});

// We can accept the Post request in server folder by event object
// And also get the query parameters
