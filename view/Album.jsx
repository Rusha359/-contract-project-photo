const React = require('react');
const Layout = require('./Layout');

module.exports = function Album() {
    return (
        <Layout>
            <div className='container'>
                <form method='POST' action='/photos'>
                    <div className="create-album">
                        <h5 className="album">Создать новый альбом</h5>
                        <a className="btn btn-primary" type='Submit'>Submit</a>
                    </div>
                </form>
                <form method='#' action='#'>
                    <div className="choose-album">
                        <h5 className="album">Выбрать из списка моих альбомов</h5>
                        <a className="btn btn-primary" type='Submit'>Submit</a>
                    </div>
                </form>
            </div>
        </Layout>
    )
}