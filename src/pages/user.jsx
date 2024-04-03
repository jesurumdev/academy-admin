import { Helmet } from 'react-helmet-async';

import { SingleUserView } from 'src/sections/user/view';

export default function UserPage() {

  
    return (
      <>
        <Helmet>
          <title> User  </title>
        </Helmet>

        <SingleUserView />
      </>
    );
  }
  