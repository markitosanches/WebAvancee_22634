import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    
    constructor(){
        super()
        this.setTitle('Dashboard')
    }

    async getHtml() {
        return `
            <h1>Bienvenu SPA</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste impedit vitae iure deserunt itaque quod veniam illo accusamus iusto sit quidem, in nostrum aliquam vero nemo voluptatibus neque doloremque cumque.</p>
            <p>
                <a href="/posts" data-link>Voir les posts</a>
            </p>
        `
    }

}