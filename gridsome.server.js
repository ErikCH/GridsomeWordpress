const axios = require('axios');
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async ({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    const { data } = await axios.get(
      'https://crudpi.io/b4b2d2/Gridsome'
    );
    const contentType = addContentType({
      typeName: 'HackerInfo',
      route: '/hacker/:id'
    });

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.hackerInfo,
        fields: {
          info: item.hackerIng
        }
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
