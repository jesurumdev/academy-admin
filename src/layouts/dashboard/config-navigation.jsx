import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Menu',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Estudiantes',
    path: '/users',
    icon: icon('ic_user'),
  },
  {
    title: 'Asistencia',
    path: '/attendance',
    icon: icon('ic_lock'),
  },
  {
    title: 'Registro',
    path: '/register',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
