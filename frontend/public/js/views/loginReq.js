import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Login Required");
    }
    async getHtml() {
        return `
           <div>
                <h2>Login Required</h2>
                <p>Please login to access this page.</p>
                <a href="/login" class="btn" data-link>Login</a>
            </div>
        `;
    }
}
