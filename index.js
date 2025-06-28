const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const STATIC_ROUTES = [
  { loc: '/', changefreq: 'daily', priority: 1.0 },
  { loc: '/terms', changefreq: 'monthly', priority: 0.6 },
  { loc: '/cusomterService', changefreq: 'monthly', priority: 0.7 },
  { loc: '/documents', changefreq: 'monthly', priority: 0.9 },
  { loc: '/products', changefreq: 'monthly', priority: 0.8 },
];

/** Allow to resonce to provide static html */
app.use(express.static(path.join(__dirname, 'dist')));

/** Path Routing
 * @description Allow whole routing to React static app
 */
app.get('/', function (_, res) {
  res.sendFile(__dirname + '/dist/index.html');
});
app.get('/sitemap.xml', function (_, res) {
  const urls = STATIC_ROUTES.map(
    (route) => `
    <url>
      <loc>https://your-domain.com${route.loc}</loc>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </url>`,
  ).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});
app.get('*', function (_, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

/** Server Start */
const PORT = process.env.REACT_APP_PORT || 8001;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
