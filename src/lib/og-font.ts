/* Shared Google Fonts fetch for the generated icon and OG image. Returns
   null on any failure so a network hiccup can never break the build. */
export async function loadInter(weight: 400 | 600 | 700) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`)
    ).text();
    const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!resource) return null;
    const response = await fetch(resource[1]);
    if (response.status !== 200) return null;
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}
