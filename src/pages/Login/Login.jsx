import "./Login.css";

export function Login() {
    return (
        <section>
            <form>
                <fieldset className="container__login">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" autoComplete="username" placeholder="Digite seu email" />
                    <label htmlFor="passsword">Senha</label>
                    <input type="password" name="passward" autoComplete="current-password" placeholder="Digite a sua senha"/>
                </fieldset>
            </form>
        </section>
    );
}