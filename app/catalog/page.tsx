"use client";

import React, { useEffect } from "react";
import SidebarBlock from "@/components/SidebarBlock/SidebarBlock";
import CampersGridBlock from "@/components/CampersGridBlock/CampersGridBlock";
import LoadMore from "@/components/LoadMore/LoadMore";
import { useAppStore } from "@/lib/store/appStore";

export default function CatalogPage() {
  const {
    campers,
    loading,
    hasMore,
    filters,
    setFilters,
    loadCampers,
  } = useAppStore();

  // перше завантаження сторінки
  useEffect(() => {
    loadCampers(true);
  }, []);

  // обробник пошуку з Sidebar
  const handleSearch = (newFilters: typeof filters) => {
    setFilters(newFilters);
    loadCampers(true); // скидаємо старі campers і завантажуємо нові за фільтрами
  };

  // Load More
  const handleLoadMore = () => {
    if (!loading && hasMore) loadCampers(false);
  };

  return (
    <section className="catalogPage">
      <div className=" catalogContainer">
        <aside className="sidebar">
            {/* SIDEBAR */}
            <SidebarBlock filters={filters} onSearch={handleSearch} />
        </aside>
        {/* MAIN CONTENT */}
        <div className="catalogContent">
          <CampersGridBlock campers={campers} />
          {hasMore && <LoadMore onClick={handleLoadMore} loading={loading} />}
          {!hasMore && <p>No more campers</p>}
        </div>
      </div>
    </section>
  );
}
