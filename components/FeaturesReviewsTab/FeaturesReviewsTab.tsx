"use client";

import { useState } from "react";
import { Camper } from "@/types/camper";
import FeaturesBlock from "../FeaturesBlock/FeaturesBlock";
import ReviewsBlock from "../ReviewsBlock/ReviewsBlock";
import css from "./FeaturesReviewsTab.module.css";

type FeaturesReviewsTabProps = {
  camper: Camper;
};

type TabType = "features" | "reviews";

export default function FeaturesReviewsTab({ camper }: FeaturesReviewsTabProps) {
  const [activeTab, setActiveTab] = useState<TabType>("features");

  return (
    <section className={css.tabsSection}>
      {/* Tabs header */}
      <div className={css.tabsHeader}>
        <button
          type="button"
          className={`${css.tab} ${activeTab === "features" ? css.active : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>

        <button
          type="button"
          className={`${css.tab} ${activeTab === "reviews" ? css.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Tabs content */}
      <div className={css.tabsContent}>
        {activeTab === "features" && <FeaturesBlock camper={camper} />}
        {activeTab === "reviews" && <ReviewsBlock camper={camper} />}
      </div>
    </section>
  );
}
