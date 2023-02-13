import ConfirmRemove from 'components/confirm-remove';

import { DialogProvider } from 'hooks/useDialog';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <DialogProvider>
        <ConfirmRemove />
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Pesquisar"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form method="post">
              <button type="submit" disabled>
                Pesquisar
              </button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/`}>Home</a>
              </li>
              <li>
                <a href={`/products`}>Produtos</a>
              </li>
              <li>
                <a href={`/product-create`}>Inserir produto</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </DialogProvider>
    </>
  );
}
