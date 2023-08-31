import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params){
    super(params)
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    //console.log(this.params.id)
    const nu = Number(this.params.id)

    async function getData(url){
        const response = await fetch(url)
        return response.json()
    }

    const data = await getData('/static/js/views/posts.json')
   
    const article = data.find(item => item.id === nu)

    return `
        <h1>`+article.title+`</h1>
        <p>`+article.descr+`</p>
        <stong>`+article.Author+`</strong>`
  }

}