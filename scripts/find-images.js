const https = require('https');

function getUrl(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'MehrbanCareBot/1.0 (contact@mehrbancare.com)'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', e => resolve({ error: e.message }));
  });
}

async function testWiki() {
  // Search Wikimedia Commons for high-res royalty-free elderly care / south asian / family images
  const queries = ['elderly care', 'indian grandmother', 'pakistani family', 'grandparents'];
  for (const q of queries) {
    const res = await getUrl(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&format=json&srnamespace=6&srlimit=10`);
    if (res.data) {
      try {
        const json = JSON.parse(res.data);
        console.log(`Wiki [${q}]:`, json.query?.search?.length);
      } catch (e) {
        console.log('Error parsing wiki');
      }
    }
  }
}

testWiki();
