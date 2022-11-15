//Css
import './css/Settings.css'

function Settings() {
    return (
        <section className="settings">
            <article className="settings-container">
                <div className="setting-header">
                    <h1>Settings</h1>
                </div>
                <div className="settings-password">
                    <h1>Change password</h1>
                    <form>
                        <input type="password" name="old-password" id="old-password" placeholder='Old Password' />
                        <input type="password" name="password" id="password" placeholder='New Password' />
                        <input type="password-confirm" name="password-confirm" id="password" placeholder='Confirm New Password' />
                        <button type="submit">Update Password</button>
                    </form>
                </div>
            </article>
        </section>
    )
}

export default Settings