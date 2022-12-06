const cheerio = require('cheerio');
const fs = require('fs');

const readedFile = fs.readFileSync('./jackson.html', { encoding: 'utf-8' }).replace(/\n/g,'');

const $ = cheerio.load(readedFile);

$.html();

const arr = $('[class="media-flex__body"]').toArray();

arr.forEach(ele => console.log(ele.children[0].data));``