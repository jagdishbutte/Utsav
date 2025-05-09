"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import Layout from "../components/Layout";
import { useEffect, useMemo, useState } from "react";


const instagramProfiles = [
  {
    id: 1,
    username: "sharadbodage",
    displayName: "Sharad Bodage",
    profileImage:
      "https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-19/326410417_675449777660484_517326157085299195_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QGOBRuwWa3unSOeiJcVOad_L2zlU8MpyBfr6LO5orrnOsIsMAvHj0L1vjZ8at_mboM&_nc_ohc=puWG3l5Hh00Q7kNvwHRVorN&_nc_gid=4mzNOyUYsXM0KxrMcfq5qA&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfJ3L0UVqiTO9TZiIVuY1YCHpsjUMkFYJ1-LzySjsVYApw&oe=6823F3A5&_nc_sid=22de04",
    bio: "PhD Scholar / Entrepreneur / Mountaineer",
    link: "https://www.instagram.com/sharadbodage/",
  },
  {
    id: 2,
    username: "sanjayzinjad",
    displayName: "Sanjay Zinjad",
    profileImage:
      "https://pbs.twimg.com/profile_images/1454732327880327174/P_R0yJjF_400x400.jpg",
    bio: "Sales & Business Development professional | semiconductor |Trekker | Learning photography for passion..",
    link: "https://x.com/sanjayzinjad",
  },
  {
    id: 3,
    username: "krishnavarpe",
    displayName: "Krishna Sunil Varpe",
    profileImage:
      "https://instagram.fpnq2-2.fna.fbcdn.net/v/t51.2885-19/339323384_735467284924209_3844844432024651198_n.jpg?_nc_ht=instagram.fpnq2-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHAGoE1f7P7D7cjViLRG-qFy45cBkCjM1r5QPcdHgLnmZ1h2lRB41wVCEpARtWuGQM&_nc_ohc=PZGnUowX52QQ7kNvwFjdlH-&_nc_gid=0isVdnjzKvAuN27c95dnzg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfIT1eLxWVXqJc6iNV64nvRYbp-RKSsg9MaSMLTS1beRHw&oe=6823E895&_nc_sid=7a9f4b",
    bio: "|| कृष्णं सदा सहायते ||  🔆 F&O trader | Investor | entrepreneur 🔆 founder of @thodkyaat 🔆 run🏃🏻‍♂️, cycle🚴‍♂️, swim🏊‍♂️, hike🥾",
    link: "https://www.instagram.com/krishnavarpe/",
  },

  {
    id: 4,
    username: "ugalevikas",
    displayName: "Vikas Ugale",
    profileImage:
      "https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-19/405761623_1013653439933383_2470143803990601204_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QEnrRdjMLxUoOsvvxSGA5Tn_o2El08BwCFClUhOIRyGNqkbOQEAaTqmDEIqbAAy55U&_nc_ohc=ukDFTIzGpPEQ7kNvwFd3EGq&_nc_gid=dlGtF22b1REQ8aZigtu0FQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfJomsj7JEC5eQjqGC5k06-X3xxZVu4RNFuYphFv2E885Q&oe=6823E70D&_nc_sid=7a9f4b",
    bio: "Photographer | Journalist | Traveller",
    link: "https://www.instagram.com/ugalevikas/",
  },
  {
    id: 5,
    username: "kumar_katake",
    displayName: "Kumar Katake",
    profileImage:
      "https://instagram.fpnq2-2.fna.fbcdn.net/v/t51.2885-19/447387676_1172950557456296_8946957722529049002_n.jpg?_nc_ht=instagram.fpnq2-2.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QEk4-jGQPdCYzZUTbNB9bRoDkEwhJG_qKR_eZTdkNDc9LK_wCzlTnb2lR-oq6SJi_Y&_nc_ohc=0SbejkFq87YQ7kNvwH8XSUI&_nc_gid=8wUssVWARKQgxc62okuLqA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfJ-85DV7JRiQA0oe84tzZ7-Es8If5eA3RpI3T0H5KSZ6w&oe=6823E990&_nc_sid=7a9f4b",
    bio: "Mountaineer | Founder- @paaydal_trekkers_adventures",
    link: "https://www.instagram.com/kumar_katake/",
  },
  {
    id: 6,
    username: "rushikeshkhambayat",
    displayName: "Rushikesh Khambayat",
    profileImage:
      "https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-19/31223482_1829356750419408_4614484571872821248_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QH_HvtSfLxzEhQfdUFZoeG8MVWcV3oH6xcCGCwQqzcD_SLL-eiurbGtFpW8Pye21g0&_nc_ohc=h_zQ4ltoiZgQ7kNvwHXq642&_nc_gid=2aY0ow8Srfyoln2Yn67Y4g&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfJZottIr1h-XjsWWHOwf1Y5uMU7e2fAJZR5FtDy4TSpGA&oe=6823F55D&_nc_sid=22de04",
    bio: "Rushikesh Khambayat 🎬Film maker,Storyteller, Photographer 🎞Video Editor 🎭Actor Good listener 2nd account- punerushi",
    link: "https://www.instagram.com/rushikeshkhambayat/",
  },

  {
    id: 7,
    username: "mountaineer_pratik",
    displayName: "Pratik Bajare",
    profileImage:
      "https://instagram.fpnq2-2.fna.fbcdn.net/v/t51.2885-19/466690321_9190050341006480_7838953911168157169_n.jpg?_nc_ht=instagram.fpnq2-2.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QEkOyyzUJCcpkdJzRuneJY94vNAeGC-L3jvVb9rzMFCLWgu_KOL-aIfkmSW3lT-Cnc&_nc_ohc=tnmAlAIPh2YQ7kNvwEo-4Jm&_nc_gid=TBwzjAQPraA0FGZknNQ8Wg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfJj35Tr7i2_lbi2DwvY3Hop11GavgOHk1KZZ_NS9I6xBQ&oe=68241056&_nc_sid=7a9f4b",
    bio: "Professional Mountaineer | Sports Presenter | Athlete | Entrepreneur",
    link: "https://www.instagram.com/mountaineer_pratik/",
  },
  {
    id: 8,
    username: "jagdishbutte",
    displayName: "Jagdish Butte",
    profileImage:
      "https://instagram.fpnq2-2.fna.fbcdn.net/v/t51.2885-19/461079729_538393395222092_772376805880296532_n.jpg?_nc_ht=instagram.fpnq2-2.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QE3wSe46TPQZKsFYiIP5kkOF21pZDk8BxZ8bIDoaPKzhwy49QmxgULqFT7npI02V5E&_nc_ohc=DK5CGBjxk_IQ7kNvwFzrNKg&_nc_gid=cVLhr8P2z5L3FuuqlINT0g&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfJHtBL4rQQFs5M52u66hyJhD9M5DXflZSOiAScbDG8xzQ&oe=6823E61E&_nc_sid=7d3ac5",
    bio: "Get busy living, or get busy dying.",
    link: "https://www.instagram.com/jagdishbutte/",
  },
  {
    id: 9,
    username: "swapniil.79",
    displayName: "Swapnil Kalaskar",
    profileImage:
      "https://instagram.fpnq2-2.fna.fbcdn.net/v/t51.2885-19/491509919_18275171077264892_946181621539686254_n.jpg?_nc_ht=instagram.fpnq2-2.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QGiGM9uIloIXUwdhYvL_4vCLxthWhZb1dle00l-JyrkFnwIdu81RxWT0Zvzq4Um62g&_nc_ohc=zNq_jZEQ5UsQ7kNvwEIh6yw&_nc_gid=TvILc0AVWRtG3kXjt6x1Cg&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfJPTxij_Ym_9ZPvZTIr4y1IGD2CH-k-24gQOeDJxX42Aw&oe=6823E6EC&_nc_sid=7d3ac5",
    bio: "🇮🇳 | MIT🎓",
    link: "https://www.instagram.com/swapniil.79/",
  },
];

export default function Syndicate() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    const floatingCircles = useMemo(() => {
      return [...Array(20)].map((_, i) => {
        const size = Math.random() * 300 + 50;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const scale = Math.random() * 0.8 + 0.2;
        const duration = Math.random() * 10 + 20;

        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)",
              transform: `scale(${scale})`,
              animation: `float ${duration}s infinite linear`,
            }}
          />
        );
      });
    }, [isClient]);
    
  return (
    <Layout>
      <div className="relative pb-16">
        {/* Animated background elements */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            {floatingCircles}
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col items-center justify-center z-10 text-center pt-10 pb-12 relative">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-8"
            style={{
              background:
                "linear-gradient(to right, #ff9966, #ff5e62, #00f2fe, #4facfe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            The Utsav Syndicate
          </h1>
        </div>

        {/* Instagram Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10 relative px-8">
          {instagramProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:scale-102 hover:shadow-2xl border border-gray-700/50"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 mr-4 rounded-full p-[2px] bg-gradient-to-r from-pink-500 to-orange-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <Image
                        src={profile.profileImage}
                        alt={profile.displayName}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {profile.displayName}
                    </h3>
                    <p className="text-blue-400">@{profile.username}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{profile.bio}</p>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:opacity-90"
                >
                  View Instagram Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </Layout>
  );
}
