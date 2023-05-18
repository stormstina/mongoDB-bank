import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Create Account");
    }

    async getHtml() {
        return `
            <div class="form-wrapper">

                <h2>Create account</h2>
                
                <form action="" class="form" id="createAccount" >

                    <div class="form-group">
                        <label for="accountName" class="form-label">Choose name for account<sup>*</sup></label>
                        <input class="form-control" type="text" id="accountName" placeholder="Enter account name" required />
                    </div>

                    <div id="createAccError"></div>

                    <div class="form-group">
                        <label for="accountAmount" class="form-label">Amount<sup>*</sup> </label>
                        <input class="form-control" type="number" id="accountAmount" placeholder="Enter the amount" required />
                    </div>

                    <button class="btn">Create account</button>
                    
                </form>

            </div>`;
    }
    async addEventListeners() {
        document.querySelector("#createAccount").addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const accName = document.querySelector("#accountName").value;
                const accAmount = document.querySelector("#accountAmount").value;
                const res = await addData("/api/accounts", {
                    accName,
                    accAmount,
                });
                console.log(res);

                if(res.acknowledged) {
                    // todo! succes creating account

                } else {
                    const createAccError =
                        document.querySelector("#createAccError");
                    createAccError.innerHTML = ` 
                    <div class="alert-danger" role="alert">
                        <div class="col-auto">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div class="col">
                            <span>${res.error}</span>
                        </div>
                    </div>`;
                }

            } catch (error) {
                // Handle any network or server errors
                // todo! display modal?
                console.error("Create bank account error:", error);
            }


        });
    }
}

