import { useEffect } from "react";
import Section from "../Section";

import ProductBanner from "../Section/ProductBanner";
import { pageTitle } from "../../helpers/PageTitle";

const roomDetailsData = {
  title:
    "Disfrutá de un departamento premium de 3 ambientes, completamente equipado, con desayuno y acceso ilimitado a la piscina y spa. No se permiten camas adicionales en esta categoría.",
  title2: "Sobre el Alojamiento",
  detailes: `Unidades de 3 ambientes con terraza privada tipo deck y parrilla, ideales para disfrutar al aire libre. 
El living-comedor se integra con la terraza, aportando luminosidad y vistas despejadas. 
Cocina completa y equipada con electrodomésticos modernos para mayor comodidad y autonomía. 
Dos dormitorios amplios con placares empotrados y ropa de cama premium para un descanso reparador. 
Baño completo con hidromasaje y amenities de alta calidad. 
Superficie cubierta de 60 m² y descubierta de 18 m², diseñada para confort y funcionalidad. 
Incluye servicio Grindelia: desayuno diario, limpieza y acceso a piscina y spa. 
Atención al huésped disponible para resolver cualquier necesidad durante tu estadía.`,
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
  roomCapacity: "Hasta 8 huéspedes",
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
    features: ["110 m²", "8 Huéspedes", "Wi-Fi"],
    btnText: "Ver detalles",
  },
];

const galleryData = [
  { imgUrlLg: "/images/room_lg_4.jpg", imgUrlSm: "/images/room_sm_4.jpg" },
  { imgUrlLg: "/images/room_lg_5.jpg", imgUrlSm: "/images/room_sm_5.jpg" },
  { imgUrlLg: "/images/room_lg_6.jpg", imgUrlSm: "/images/room_sm_6.jpg" },
  { imgUrlLg: "/images/room_lg_4.jpg", imgUrlSm: "/images/room_sm_4.jpg" },
  { imgUrlLg: "/images/room_lg_5.jpg", imgUrlSm: "/images/room_sm_5.jpg" },
  { imgUrlLg: "/images/room_lg_6.jpg", imgUrlSm: "/images/room_sm_6.jpeg" },
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
          currency="3 Ambientes"
          data={galleryData}
        />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <div className="container">
          <div className="row cs_gap_y_40 align-items-start">
            <div className="col-lg-6">
              <div className="cs_room_details">
                <h3 className="cs_fs_38 cs_mb_29 cs_mb_lg_20">
                  Sobre el Alojamiento
                </h3>
                <p className="cs_mb_49 cs_mb_lg_30">
                  {roomDetailsData.detailes}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_room_details">
                <h3 className="cs_fs_31 cs_mb_29 cs_mb_lg_20">Comodidades</h3>
                <ul className="cs_list cs_style_3 cs_mp_0">
                  {/* Icono y texto "hasta 8 huéspedes" como primer item, en línea */}
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/images/icons/review.svg"
                      alt="Huéspedes"
                      style={{
                        width: 24,
                        height: 24,
                        marginRight: 8,
                        verticalAlign: "middle",
                      }}
                    />
                    <span>hasta 8 huéspedes</span>
                  </li>
                  {roomDetailsData.roomFacilities?.map((item, index) => (
                    <li key={index}>
                      <img src={item.iconUrl} alt="Icon" />
                      {item.title}
                    </li>
                  ))}
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
