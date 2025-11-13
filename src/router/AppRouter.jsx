import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../pages/AdminDashboard";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import EventSection from "../components/EventSection";
import ActivitySection from "../components/ActivitySection";
import ExploreSection from "../components/ExploreSection"; // ✅ Imported new section
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound"; // ✅ add import at top
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignUpPage";

const movieData = [
  {
    title: "Animal",
    location: "PVR Cinemas",
    price: "₹250 onwards",
    image:
      "https://imgs.search.brave.com/egDTw2jAwtaALJ82UGNr-jYVKBMeKPkJVWkkbQfA29I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEteWtwLWVUREwu/anBn",
  },
  {
    title: "Fighter",
    location: "INOX",
    price: "₹300 onwards",
    image:
      "https://imgs.search.brave.com/vG3H6O_xwfJgX8_y_1Gw9sUaugbqJuNK2gDJaOhr-gw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jYWNoZS5jaW5l/bWF0ZXJpYWwuY29t/L3AvNTAweC92bnlr/bm9pby9maWdodGVy/LWluZGlhbi1tb3Zp/ZS1wb3N0ZXIuanBn/P3Y9MTcwMjQ1MTkx/Ng",
  },
  {
    title: "Stree 2",
    location: "IMAX",
    price: "₹200 onwards",
    image:
      "https://imgs.search.brave.com/I9eZX5Kx8oRyf-mQzPjHgmqZsdgu0sqQtmQgdUueiHs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jYWNoZS5jaW5l/bWF0ZXJpYWwuY29t/L3AvNTAweC9uaXN0/Ym50bC9zdHJlZS0y/LWluZGlhbi1tb3Zp/ZS1wb3N0ZXIuanBn/P3Y9MTcyMzEyODkw/Mw",
  },
];

const eventData = [
  {
    title: "Sunidhi Chauhan Live | Delhi",
    location: "Venue to be announced, Delhi",
    price: "₹2000 onwards",
    image:
      "https://imgs.search.brave.com/6rDg6_ozBuDpBt0vt8AiSj5l0L1S5-xW0pwZWEelKKQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnNpZGVyLmlu/L2ltYWdlL3VwbG9h/ZC9jX2Nyb3AsZ19j/dXN0b20vdjE3NjEx/MzA1NDUvbHZzcm5h/NTN0Mnp2OXJhbXhz/bzkucG5n",
  },
  {
    title: "A.R. Rahman - Harmony of Hearts",
    location: "Indira Gandhi Indoor Stadium, Delhi",
    price: "₹999 onwards",
    image:
      "https://imgs.search.brave.com/3te0st0AWb8Y3wGCq-neARi6HI3igrRVjtxeoHdKw_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnNpZGVyLmlu/L2ltYWdlL3VwbG9h/ZC9jX2Nyb3AsZ19j/dXN0b20vdjE3NjI1/MDAyMjkvdWN4MmZ0/emE5b3lzbHBtbTNz/YnYuanBn",
  },
];

const activityData = [
  {
    title: "Jubin Nautiyal - Live in Concert",
    location: "Mumbai",
    price: "₹1800 onwards",
    image:
      "https://imgs.search.brave.com/AKZCYXSPY3xR1sH6G6aYQUzeOullOjFPG1Cz9kbQWyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnNpZGVyLmlu/L2ltYWdlL3VwbG9h/ZC9jX2Nyb3AsZ19j/dXN0b20vdjE3NjIz/NDAxMjcvenR1dzJp/dTh6ejE4cXNiY2dw/bW8uanBn",
  },
  {
    title: "Fly India Adventures",
    location: "Manali, Himachal Pradesh",
    price: "₹2500 onwards",
    image:
      "https://imgs.search.brave.com/-cvgZ_8dIlMo9OggVXZsYNDToId1RPHJ03j0vsIbqEY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sd18x/MjgwL2NfY3JvcCxn/X2N1c3RvbS92MTc2/MTg5ODU4MS9oYWlx/dWJrMHUxZGY4dG1k/ZmFjci5wbmc",
  },
];

// ✅ Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero
                title="Discover the Best Events, Movies & Experiences"
                subtitle="Find what’s happening near you, anytime!"
              />
              <CategorySection sectionTitle="🎬 Top Hindi Movies Near You" />
              <EventSection />
              <ActivitySection />
            </PageWrapper>
          }
        />

        {/* 🎥 Movies Page */}
        <Route
          path="/movies"
          element={
            <PageWrapper>
              <Hero
                title="🎥 Top Movies in Theatres"
                subtitle="Book tickets for trending movies now."
              />
              <CategorySection sectionTitle="Top Hindi Movies Near You" />
              <ExploreSection title="🎬 Explore Popular Movies" items={movieData} />
            </PageWrapper>
          }
        />

        {/* 🎤 Events Page */}
        <Route
          path="/events"
          element={
            <PageWrapper>
              <Hero
                title="🎤 Exciting Events Near You"
                subtitle="Concerts, comedy shows, and live performances await!"
              />
              <EventSection />
              <ExploreSection title="🎤 Explore Trending Events" items={eventData} />
            </PageWrapper>
          }
        />

        {/* 🔥 Activities Page */}
        <Route
          path="/activities"
          element={
            <PageWrapper>
              <Hero
                title="🔥 Adventures & Activities"
                subtitle="Explore outdoor fun, sports, and adventures!"
              />
              <ActivitySection />
              <ExploreSection title="🔥 Explore Adventures & Fun" items={activityData} />
            </PageWrapper>
          }
        />

        {/* 🔒 Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <AdminDashboard />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
  path="/details/:type/:id"
  element={
    <PageWrapper>
      <DetailPage />
    </PageWrapper>
  }
/>
<Route path="/details/:type/:id" element={<DetailPage />} />

<Route
  path="*"
  element={
    <PageWrapper>
      <NotFound />
    </PageWrapper>
  }
/>

<Route
  path="/login"
  element={
    <PageWrapper>
      <LoginPage />
    </PageWrapper>
  }
/>

<Route
  path="/signup"
  element={
    <PageWrapper>
      <SignupPage />
    </PageWrapper>
  }
/>

      </Routes>
      
    </AnimatePresence>
  );
};

export default AppRouter;
