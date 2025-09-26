import { Icon } from '@iconify/react';
import React from 'react';

export default function SidebarSearch() {
  return (
    <form className="cs_sidebar_search" action="/">
      <input type="text" placeholder="Search..." />
      <button className="cs_sidebar_search_btn">
        <Icon icon="tabler:search" height={22} width={22} />
      </button>
    </form>
  );
}
