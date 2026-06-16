<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="sitemap image">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XML Sitemap</title>
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            margin: 0;
            padding: 2rem;
            background: #f8fafc;
            color: #0f172a;
            line-height: 1.5;
          }
          main {
            max-width: 960px;
            margin: 0 auto;
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 1.5rem 2rem;
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 1.5rem;
          }
          p {
            margin: 0 0 1.5rem;
            color: #475569;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            text-align: left;
            padding: 0.75rem 0.5rem;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
          }
          th {
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #64748b;
          }
          a {
            color: #0f766e;
            word-break: break-all;
          }
        </style>
      </head>
      <body>
        <main>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              <h1>XML Sitemap Index</h1>
              <p>This sitemap index lists child sitemaps for search engines. Styling is for human readers only.</p>
              <table>
                <thead>
                  <tr>
                    <th>Sitemap</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a></td>
                      <td><xsl:value-of select="sitemap:lastmod" /></td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <h1>XML Sitemap</h1>
              <p>This sitemap lists URLs for search engines. Styling is for human readers only.</p>
              <table>
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Last Modified</th>
                    <th>Images</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a></td>
                      <td><xsl:value-of select="sitemap:lastmod" /></td>
                      <td>
                        <xsl:for-each select="image:image">
                          <div><a href="{image:loc}"><xsl:value-of select="image:title" /></a></div>
                        </xsl:for-each>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
