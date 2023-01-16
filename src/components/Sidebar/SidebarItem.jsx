import { Link } from 'react-router-dom';

import styles from './SidebarItem.module.css';

function SidebarItem({ title, id }) {
  return (
    <li className={styles.item}>
      <Link to={`/${id}`}>{title}</Link>
    </li>
  );
}

export default SidebarItem;
