import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { showToast } from "../utils/toast"; // ✅ Toastify utility

const FeaturedCarousel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const data = {
"/movies": [
  {
    id: 1,
    title: "Animal",
    date: "Now Showing",
    location: "In Theatres Near You",
    price: "₹250 onwards",
    image:
"https://imgs.search.brave.com/CJH67M-3jXLZnQR9kBfpCYJhbMu0iZFBeRRZtjBE5kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBlLzBh/L2MxLzBlMGFjMTI0/MzA2NmJiMzg2NGUw/MWVjYmU2MGRhODkz/LmpwZw"  },
  {
    id: 2,
    title: "Fighter",
    date: "Now Showing",
    location: "Book Tickets Now",
    price: "₹300 onwards",
    image:
"https://imgs.search.brave.com/YcDdHrSGrO7tswQnV8Ys0XiNsfX5jLRdKwGD36pw0DM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2luZW1hdGVyaWFs/LmNvbS9wLzI5N3gv/MGF5bHAzYngvZmln/aHRlci1pbmRpYW4t/bW92aWUtcG9zdGVy/LW1kLmpwZz92PTE3/MDE2OTExOTk"  },
  {
    id: 3,
    title: "Stree 2",
    date: "Releasing Soon",
    location: "All India",
    price: "₹200 onwards",
    image:
"https://imgs.search.brave.com/DNFxHprXPd_4WfPsL8tDgRvhqnLZ4m62ofiRpd2va_4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jYWNoZS5jaW5l/bWF0ZXJpYWwuY29t/L3AvNTAweC9uaXN0/Ym50bC9zdHJlZS0y/LWluZGlhbi1tb3Zp/ZS1wb3N0ZXIuanBn/P3Y9MTcyMzEyODkw/Mw"  },

  // ⭐ NEW MOVIES ADDED BELOW

  {
    id: 4,
    title: "Pushpa 2",
    date: "Releasing 2025",
    location: "Pan India",
    price: "₹300 onwards",
    image:
"https://imgs.search.brave.com/bBprYgC1HNi8_s7O-82dLsvuDXkTdH8JTIO6HXehORE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYWxs/dS1hcmp1bi0xMjAw/LXgtMTg2MC1iYWNr/Z3JvdW5kLXF3NGVh/anlpc3d5NGg2dTcu/anBn"  },
  {
    id: 5,
    title: "Dunki",
    date: "Now Showing",
    location: "PVR, Inox, IMAX",
    price: "₹180 onwards",
    image:
"https://imgs.search.brave.com/OfypRNzGT0VfoIF5Ij40pd1pGISFkfSRJLd8La61HAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIyLzQ0/Lzc0LzIyNDQ3NDdj/ZTQ4ZTNiNDU4MDg2/YzYzMWE5ZjIwZjQ1/LmpwZw"
  },
  {
    id: 6,
    title: "Jawan",
    date: "Now Streaming",
    location: "Netflix",
    price: "₹Free",
    image:
"https://imgs.search.brave.com/ptIT6LkLLKq1QM0kftYwQTHKltgqGbz0_ji6tQUeYEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyODAz/ODM3LmpwZw"  },
  {
    id: 7,
    title: "Vikram",
    date: "Now Watching",
    location: "In Theatres",
    price: "₹220 onwards",
    image:
"https://imgs.search.brave.com/MpP8PIT-T5hsKR3IdHoa03uJZaJlpGnaNELvVhxINB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFsbGVuZ2VzdG9y/ZS5jb20vY2RuL3No/b3AvZmlsZXMvVmlr/cmFtLUthbWFsSGFh/c2FuLVRhbWlsTW92/aWVQb3N0ZXIyX2xh/cmdlLmpwZz92PTE3/MTM2MTg5NjE"  },
  {
    id: 8,
    title: "Leo",
    date: "Now Watching",
    location: "Multiplexes in India",
    price: "₹240 onwards",
    image:
"https://imgs.search.brave.com/gdY65shCucciY0hWcIs_W3UpEdRqvBxHVyLKHmMNHtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41MzE4/MzczNzY4Ljg4MDgv/ZnBvc3RlcixzbWFs/bCx3YWxsX3RleHR1/cmUsc3F1YXJlX3By/b2R1Y3QsNjAweDYw/MC5qcGc"  },
  {
    id: 9,
    title: "KGF Chapter 2",
    date: "Blockbuster Hit",
    location: "In Theatres",
    price: "₹200 onwards",
    image:
"https://imgs.search.brave.com/JWAJQLYtUJZnDurkUOTQlfIrps20XGkbmWFSwMIxGC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VlLzc3/LzQ1L2VlNzc0NTc2/ZTgzNzJkOTBmOTk4/YWRhMjZlNWVhOGUz/LmpwZw"  },
  {
    id: 10,
    title: "Brahmāstra",
    date: "Now Showing",
    location: "IMAX, PVR",
    price: "₹280 onwards",
    image:
"https://imgs.search.brave.com/XTyHtqs6nV9Wm3QvH8GxyMrpXGI3wQase2w33exWSec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9teWhv/dHBvc3RlcnMuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL21MNjMx/Nl8xMDI0eDEwMjQu/anBnP3Y9MTc0ODUz/MjAwNQ"  }
],
  }
  const slides = data[currentPath] || data["/movies"];

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-3 rounded-full shadow-md backdrop-blur-sm z-30 transition-all duration-300"
    >
      <FiChevronRight size={24} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-3 rounded-full shadow-md backdrop-blur-sm z-30 transition-all duration-300"
    >
      <FiChevronLeft size={24} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    accessibility: true,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="relative w-screen h-[82vh] flex items-center justify-center overflow-hidden"
          >
            {/* Background blur */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
                filter: "blur(30px) brightness(0.93)",
                transform: "scale(1.18)",
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/65 to-transparent"></div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] h-full px-6 md:px-16 text-gray-900">
              {/* Text Section */}
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-medium">{item.date}</p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700">{item.location}</p>
                <p className="font-semibold text-gray-800">{item.price}</p>

                {/* ✅ Toast + Navigate */}
                <button
                  onClick={() => {
                    showToast("🎟️ Redirecting to details page...");
                    const base =
                      currentPath === "/movies"
                        ? "movies"
                        : currentPath === "/events"
                        ? "events"
                        : "activities";
                    navigate(
                      `/details/${base}/${item.id ?? encodeURIComponent(item.title)}`
                    );
                  }}
                  className="mt-4 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  Book Tickets
                </button>
              </div>

              {/* Poster */}
              <div className="hidden md:flex justify-end w-[420px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl shadow-2xl w-[380px] h-[520px] object-cover border border-white/20"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedCarousel;
