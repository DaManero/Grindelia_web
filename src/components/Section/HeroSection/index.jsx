import React from "react";
import { Container } from "react-bootstrap";
import HeroSliderStyle1 from "../../Slider/HeroSliderStyle1";
import AvailabilityForm from "../../Forms/AvailabilityForm";

export default function HeroSection({ data }) {
  return (
    <section>
      <HeroSliderStyle1 data={data} />
      {/* Formulario de consulta de disponibilidad eliminado */}
    </section>
  );
}
