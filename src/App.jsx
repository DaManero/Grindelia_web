import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import NotFound from "./components/Pages/404Page";
import AboutPage from "./components/Pages/AboutPage";
import RoomsPage from "./components/Pages/RoomsPage";
import RoomsListViewPage from "./components/Pages/RoomsListViewPage";
import RoomDetailsPage from "./components/Pages/RoomDetailsPage";
import RoomDetailsPageV2 from "./components/Pages/RoomDetailsPageV2";
import RoomDetailsPageV3 from "./components/Pages/RoomDetailsPageV3";
import SearchResultPage from "./components/Pages/SearchResultPage";
import CompleteReservationPage from "./components/Pages/CompleteReservationPage";
import ServicesPage from "./components/Pages/ServicesPage";
import CoworkPage from "./components/Pages/cowork";
import SpaWellnessPage from "./components/Pages/SpaWellnessPage";
import InfinityPoolPage from "./components/Pages/InfinityPoolPage";
import TeamPage from "./components/Pages/TeamPage";
import GalleryPage from "./components/Pages/GalleryPage";
import FaqPage from "./components/Pages/FaqPage";
import BlogPage from "./components/Pages/BlogPage";
import BlogGridPage from "./components/Pages/BlogGridPage";
import BlogList from "./components/Pages/BlogListPage";
import BlogDetailsPage from "./components/Pages/BlogDetailsPage";
import ContactPage from "./components/Pages/ContactPage";
import Layout2 from "./components/Layout/Layout2";
import Layout3 from "./components/Layout/Layout3";
import Layout4 from "./components/Layout/Layout4";
import Layout6 from "./components/Layout/Layout6";
import Layout5 from "./components/Layout/Layout5";
import Layout7 from "./components/Layout/Layout7";
import Layout8 from "./components/Layout/Layout8";
import Layout9 from "./components/Layout/Layout9";
import Layout10 from "./components/Layout/Layout10";
import NotAvailableRoom from "./components/Pages/NotAvailableRoom";
import NoSearchResult from "./components/Pages/NoSearchResult";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/" element={<Layout7 />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms-list-view" element={<RoomsListViewPage />} />
        <Route path="/room/room-details" element={<RoomDetailsPage />} />
        <Route path="/room/room-details-v2" element={<RoomDetailsPageV2 />} />
        <Route path="/room/room-details-v3" element={<RoomDetailsPageV3 />} />
        <Route path="/room/not-available-room" element={<NotAvailableRoom />} />
        <Route path="/search-result" element={<SearchResultPage />} />
        <Route path="/not-found-any-room" element={<NoSearchResult />} />
        <Route
          path="/complete-reservation"
          element={<CompleteReservationPage />}
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cowork" element={<CoworkPage />} />
        <Route path="/spa-wellness" element={<SpaWellnessPage />} />
        <Route path="/infinity-pool" element={<InfinityPoolPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-grid" element={<BlogGridPage />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog/blog-details" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
