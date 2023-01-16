import './profile.css'

export const ChangePassword = () => {
  return (
    
        
        <article class="profile__main__right">
            <h3>Cambiar contraseña</h3>
            <div class="profile__main__right__info__rename">
                <form action="/usuario/perfil/cambiar_password?_method=PUT" method="POST">
                    <h4>Ingresa tu nueva contraseña</h4>
               {/*  <div class="input__profile">
                    <input type="password" name="password_old" placeholder="Ingresa contraseña actual">
                    <p class="form__error error_profile"><%= locals.errors && errors.password_old ? errors.password_old.msg : null%></p>
                </div>
                <div class="input__profile">
                    <input type="password" name="password" placeholder="Ingresa tu nueva constraseña">
                    <p class="form__error error_profile"><%= locals.errors && errors.password ? errors.password.msg : null%></p>
                </div>
                <div class="input__profile">
                    <input type="password" name="password2" placeholder="Repite tu nueva constreseña">
                    <p class="form__error error_profile"><%= locals.errors && errors.password2 ? errors.password2.msg : null%></p>
                </div> */}
                
                <button class="registrarse__button profile__btn" type="submit">Cambiar</button>
            </form>
            </div>
        </article>

   
  )
}
