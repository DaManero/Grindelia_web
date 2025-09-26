import React from "react";
import SidebarSearch from "./Widgets/SidebarSearch";
import CategoryWidget from "./Widgets/CategoryWidget";
import RecentPostWidget from "./Widgets/RecentPostWidget";
import TagWidget from "./Widgets/TagWidget";

const categoryData = [
  {
    title: "Luxury Hotel",
    numberOfItem: 0,
    href: "/blog",
  },
  {
    title: "Resort",
    numberOfItem: 2,
    href: "/blog",
  },
  {
    title: "Travel",
    numberOfItem: 3,
    href: "/blog",
  },
  {
    title: "Restaurant",
    numberOfItem: 5,
    href: "/blog",
  },
  {
    title: "Tour Agency",
    numberOfItem: 1,
    href: "/blog",
  },
  {
    title: "Tour Agency",
    numberOfItem: 1,
    href: "/blog",
  },
];

const blogData = [
  {
    title: "Discovering Hidden Treasures Near Seapearl",
    date: "Apr 10, 2025",
    href: "/blog/blog-details",
  },
  {
    title: `Rejuvenation Tips from Seapearl's Spa Experts`,
    date: "Sep 7, 2025",
    href: "/blog/blog-details",
  },
  {
    title: "Finding Tranquility at Seapearl Resort",
    date: "Sep 3, 2025",
    href: "/blog/blog-details",
  },
  {
    title: `Seapearl's Commitment to Eco-Friendly Practices`,
    date: "Sep 7, 2025",
    href: "/blog/blog-details",
  },
];

const tagData = [
  { title: "Business", href: "/blog" },
  { title: "Traveling", href: "/blog" },
  { title: "Tourism", href: "/blog" },
  { title: "Lifestyle", href: "/blog" },
  { title: "Beauty", href: "/blog" },
  { title: "Spa", href: "/blog" },
  { title: "Food", href: "/blog" },
  { title: "Restaurant", href: "/blog" },
];

export default function BlogSidebar() {
  return (
    <div className="cs_sidebar cs_right_sidebar">
      <div className="cs_sidebar_item widget_search">
        <SidebarSearch />
      </div>
      <div className="cs_sidebar_item widget_categories">
        <CategoryWidget widgetTitle="Categories" data={categoryData} />
      </div>
      <div className="cs_sidebar_item">
        <RecentPostWidget widgetTitle="Latest post" data={blogData} />
      </div>
      <div className="cs_sidebar_item widget_tag_cloud">
        <TagWidget widgetTitle="Popular tags" data={tagData} />
      </div>
    </div>
  );
}
