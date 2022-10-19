const React = require('react');
const Layout = require('./Layout');

function LoginPage({ user }) {
  return (
    <Layout user={user}>
      <div className="container-fluid">
        <div className="col-md-4 offset-md-4">
          <div className="form-container-login">
            <div className="form-icon">
              <i className="fa fa-user" />
            </div>
            <h3 className="title">Login</h3>
            <form className="form-horizontal js-login" method="POST">
              <div className="form-group">
                <label>email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="email address"
                  name="email"
                />
              </div>
              <div className="form-horizontal">
                <label>password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="password"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-default">
                Войти
              </button>
            </form>
          </div>
          <div className="js-login-error" />
        </div>
      </div>
      <script defer src="/js/registration.js" />
    </Layout>
  );
}

module.exports = LoginPage;
