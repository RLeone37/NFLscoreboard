export default {
  async fetch(request, env) {
    // Simple ESPN scoreboard proxy with CORS headers
    const target = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";
    const res = await fetch(target, { headers: { "User-Agent": "Mozilla/5.0" } });
    const newHeaders = new Headers(res.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.set("Cache-Control", "no-store");
    return new Response(await res.text(), { status: res.status, headers: newHeaders });
  }
};
