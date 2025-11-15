import { useEffect } from "react";
import Section from "../Section";

import ProductBanner from "../Section/ProductBanner";
import { pageTitle } from "../../helpers/PageTitle";

const roomDetailsData = {
  title:
    "Disfrutá de un departamento premium de 3 ambientes, completamente equipado, con desayuno y acceso ilimitado a la piscina y spa. No se permiten camas adicionales en esta categoría.",
  title2: "Sobre el Alojamiento",
  detailes:
    "Unidades de 2 ambientes con terraza privada tipo deck y parrilla (adatpadas para personas con discapacidad), ideales para disfrutar al aire libre. El living-comedor se integra con la terraza, aportando luminosidad y vistas despejadas. Cocina completa y equipada con electrodomésticos modernos para mayor comodidad y autonomía. Dormitorio en suite con jacuzzi y vestidor; además dos dormitorios amplios con placares empotrados y ropa de cama premium para un descanso reparador. Baño completo con hidromasaje y amenities de alta calidad. Superficie cubierta de 60 m² y descubierta de 18 m², diseñada para confort y funcionalidad. Incluye servicio Grindelia: desayuno diario, limpieza y acceso a piscina y spa; atención al huésped disponible para resolver cualquier necesidad durante tu estadía.",
  roomFacilitiesTitle: "Comodidades",
  roomFacilities: [
    { iconUrl: "/images/icons/facility_icon_1.svg", title: "Cama king size" },
    { iconUrl: "/images/icons/facility_icon_2.svg", title: "Locker personal" },
    { iconUrl: "/images/icons/facility_icon_3.svg", title: "Escritorio" },
    { iconUrl: "/images/icons/facility_icon_4.svg", title: "Locker personal" },
    {
      iconUrl: "/images/icons/facility_icon_5.svg",
      title: "Aire acondicionado",
    },
    { iconUrl: "/images/icons/facility_icon_6.svg", title: "Minibar" },
    {
      iconUrl: "/images/icons/facility_icon_7.svg",
      title: "Cafetera y tetera",
    },
    { iconUrl: "/images/icons/facility_icon_8.svg", title: "Televisión" },
    { iconUrl: "/images/icons/facility_icon_9.svg", title: "Wi-Fi" },
    { iconUrl: "/images/icons/facility_icon_10.svg", title: "Bañera" },

    {
      iconUrl: "/images/icons/facility_icon_12.svg",
      title: "Servicio a la habitación 24/7",
    },
  ],
  roomCapacityTitle: "Capacidad",
  roomCapacity: "Hasta 4 huéspedes",
};

const featureData = [
  {
    iconUrl: "/images/icons/restaurant.svg",
    title: "Restaurante & Bar",
    subTitle:
      "Gastronomía de autor con vista al mar. Platos y tragos para todos los gustos.",
  },
  {
    iconUrl: "/images/icons/massage.svg",
    title: "Spa & Bienestar",
    subTitle:
      "Relajate en nuestro spa con tratamientos exclusivos y zona de relax.",
  },
  {
    iconUrl: "/images/icons/gym.svg",
    title: "Gimnasio",
    subTitle: "Entrená con equipos de última generación y vista panorámica.",
  },
  {
    iconUrl: "/images/icons/swimmer.svg",
    title: "Piscina Infinita",
    subTitle: "Piscina climatizada con borde infinito y solárium.",
  },
  {
    iconUrl: "/images/icons/briefcase.svg",
    title: "Centro de Negocios",
    subTitle: "Salas de reuniones y espacios de coworking para tu comodidad.",
  },
  {
    iconUrl: "/images/icons/room-service.svg",
    title: "Room Service 24/7",
    subTitle: "Servicio a la habitación todo el día, todos los días.",
  },
];

const roomData = [
  {
    imgUrl: "/images/Room_5.webp",
    title: "Premium 2 Ambientes",
    currency: "$",
    price: 350,
    pricePer: "/Noche",
    href: "/room/2a",
    features: ["110 m²", "4 Huéspedes", "Wi-Fi"],
  },
];

const galleryData = [
  { imgUrlLg: "/images/room_lg_3.jpg", imgUrlSm: "/images/room_sm_3.jpg" },
  { imgUrlLg: "/images/room_lg_2.jpg", imgUrlSm: "/images/room_sm_2.jpg" },
  { imgUrlLg: "/images/room_lg_1.jpg", imgUrlSm: "/images/room_sm_1.jpg" },
  { imgUrlLg: "/images/room_lg_4.jpg", imgUrlSm: "/images/room_sm_4.jpg" },
  { imgUrlLg: "/images/room_lg_5.jpg", imgUrlSm: "/images/room_sm_5.jpg" },
  { imgUrlLg: "/images/room_lg_6.jpg", imgUrlSm: "/images/room_sm_6.jpg" },
];

export default function RoomDetailsPageV2() {
  pageTitle("Room Details V2");
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <Section
        topSpaceLg="100"
        topSpaceMd="80"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <ProductBanner
          title="Departamento Premium"
          currency="2 Ambientes"
          data={galleryData}
        />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        {/* Estilos locales para separación, color y normalización de íconos */}
        <style>{`
          @media (min-width: 992px) {
            .room2a-row { column-gap: 32px; flex-wrap: nowrap; }
            .room2a-right { padding-left: 32px; }
          }
          @media (min-width: 1200px) {
            .room2a-row { column-gap: 40px; }
            .room2a-right { padding-left: 40px; }
          }
          /* Compactar bullets de Comodidades */
          .room2a-right .cs_list.cs_style_3 li {
            margin-bottom: 6px;
            line-height: 1.35;
            padding-top: 0;
            padding-bottom: 0;
          }
          /* Unificar tamaño/alineación y color (gris oscuro) de todos los íconos */
          .room2a-right .cs_list.cs_style_3 li img {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            vertical-align: middle;
            object-fit: contain;
            filter: grayscale(1) brightness(0.35) contrast(1.1); /* unifica color */
          }
          /* Color más oscuro para textos */
          .room2a-left .cs_room_details p {
            color: #4b4b49;
          }
          .room2a-right .cs_list.cs_style_3,
          .room2a-right .cs_list.cs_style_3 li,
          .room2a-right .cs_list.cs_style_3 li span {
            color: #4b4b49;
          }
        `}</style>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-start room2a-row">
            <div className="col-lg-6 room2a-left">
              <div className="cs_room_details">
                <h3 className="cs_fs_38 cs_mb_29 cs_mb_lg_20">
                  Sobre el Alojamiento
                </h3>
                <p
                  className="cs_mb_49 cs_mb_lg_30"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    hyphens: "auto",
                  }}
                >
                  {roomDetailsData.detailes}
                </p>
              </div>
            </div>
            <div className="col-lg-6 room2a-right">
              <div className="cs_room_details">
                <h3 className="cs_fs_31 cs_mb_29 cs_mb_lg_20">Comodidades</h3>
                <ul className="cs_list cs_style_3 cs_mp_0">
                  {/* Huéspedes (unificado al mismo estilo que el resto) */}
                  <li>
                    <img src="/images/icons/review.svg" alt="Huéspedes" />
                    hasta 4 huéspedes
                  </li>
                  {/* ...existing code... */}
                  {roomDetailsData.roomFacilities
                    ?.filter((item) => {
                      const t = (item.title || "").toLowerCase();
                      return !(
                        t.includes("locker") ||
                        t.includes("escritorio") ||
                        t.includes("lavander")
                      );
                    })
                    .map((item, index) => (
                      <li key={index}>
                        <img src={item.iconUrl} alt="Icon" />
                        {item.title}
                      </li>
                    ))}
                  {/* Servicio de Playa (unificado al mismo estilo) */}
                  <li>
                    <img
                      src="/images/icons/swimmer.svg"
                      alt="Servicio de Playa"
                    />
                    Servicio de Playa (en temporada)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      ></Section>
    </>
  );
}
