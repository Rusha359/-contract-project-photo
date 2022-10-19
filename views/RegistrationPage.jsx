const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({user}) {
  return (
    <Layout user={user}>
      <div className="container-fluid">
        <div className="offset-md-4 col-md-4 offset-sm-3 col-sm-6">
          <div className="form-container">
            <h3 className="title">Create Account</h3>

            <form className="form-horizontal js-registration" action="/registration" method="POST">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" name="name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" name="email" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Подтвердите пароль"
                  name="confirmPassword"
                />
              </div>
              <button className="btn signup">Вперед</button>
            </form>
            <div className="js-error"></div>
          </div>
        </div>
      </div>
      <script defer src="/js/registration.js" />
    </Layout>
  );
}

module.exports = RegistrationPage;
