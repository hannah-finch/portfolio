import './error.css'

import { useRouteError } from 'react-router-dom';

// import Header from '../../components/header/header.jsx'
// import Footer from '../../components/footer/footer.jsx'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      {/* <Header /> */}
      <div>
        <h1>Oops!</h1>
        <p>Page does not exist</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      {/* <Footer /> */}
    </>
  );
}
