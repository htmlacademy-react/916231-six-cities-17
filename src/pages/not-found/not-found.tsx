import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main">
        <div className="container">
          <h1>404 Not Found</h1>
          <Link to='/'>Вернуться на главную</Link>
          <div>
            <img src="img/error-404.jpg" width="500" height="333" alt="Page Not Found"></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
