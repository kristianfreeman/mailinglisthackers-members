import members from "./members.json";

addEventListener("fetch", evt => evt.respondWith(handle(evt)));
const handle = async () => {
  return new Response(JSON.stringify(members), {
    headers: { "Content-type": "application/json" }
  });
};
