require('regenerator/runtime');

module.exports = function NewsApi(Api) {

  Api.prototype.listNews = async function(query = {}) {
          const page = query.page || 1;
          console.log(page);
          const pageRows = query.pageRows || 10;
          return await this._fetch({
            method: 'GET',
            url: `/news?page=${page}&pageRows=${pageRows}`,
          })
          .then((response) => {
            var json = response.json();
            if (response.status === 200 || response.status === 201) {
              return json;
            } else {
              throw(json);
            }
          })
          .catch((error) => {
            throw(error);
          });
      }

  Api.prototype.getNews = async function(id = 1) {
      return await this._fetch({
        method: 'GET',
        url: `/news/${id}`,
      })
      .then((response) => {
        var json = response.json();
        if (response.status === 200 || response.status === 201) {
          return json;
        } else {
          throw(json);
        }
      })
      .catch((error) => {
        throw(error);
      });
  }
  return Api;
}
