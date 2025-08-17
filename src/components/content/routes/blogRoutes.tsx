// Fokus - Xeberler - Elanlar - Musahibeler ve Cixislar
import BlogsCreate from '../components/blogs/BlogsCreate';
import BlogsEdit from '../components/blogs/BlogsEdit';
import BlogsShow from '../components/blogs/BlogsShow';

export const blogsRoutes = [
  { id: 'blogs-show', route: '/xeberler', component: <BlogsShow /> },
  { id: 'blogs-create', route: '/xeberler/create', component: <BlogsCreate /> },
  { id: 'blogs-edit', route: '/xeberler/edit/:id', component: <BlogsEdit /> },
];
