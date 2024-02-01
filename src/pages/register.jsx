import { Helmet } from 'react-helmet-async';

import { RegistrationView } from 'src/sections/registration/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Registro estudiante </title>
      </Helmet>

      <RegistrationView />
    </>
  );
}
