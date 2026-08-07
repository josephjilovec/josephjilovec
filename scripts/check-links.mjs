const links = [
  "https://josephjilovec.com/",
  "https://myhealthyaura.vercel.app/",
  "https://swiftdealsolutions.vercel.app/",
  "https://djhotwax.vercel.app/",
  "https://vantahelix.vercel.app/",
  "https://www.cannacoreseeds.com/",
  "https://snarklogic.vercel.app/",
  "https://medium.com/@jilovecjoseph",
  "https://calendly.com/jilovecjoseph/50-minute-meeting"
];

let failed = false;
for (const url of links) {
  try {
    const response = await fetch(url, { method: "GET", redirect: "follow", headers: { "user-agent": "JosephJilovec-site-link-check/1.0" } });
    const ok = response.status >= 200 && response.status < 400;
    console.log(`${ok ? "OK" : "FAIL"} ${response.status} ${url}`);
    if (!ok) failed = true;
  } catch (error) {
    console.error(`FAIL ${url}: ${error.message}`);
    failed = true;
  }
}
if (failed) process.exit(1);
